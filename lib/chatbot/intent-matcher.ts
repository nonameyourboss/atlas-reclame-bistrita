import Fuse from 'fuse.js'
import { ATLAS_KNOWLEDGE, type ServiceKB, type FAQ } from './knowledge-base'

export type IntentType =
  | 'greeting'
  | 'pricing'
  | 'contact'
  | 'portfolio'
  | 'services_list'
  | 'service_info'
  | 'faq_match'
  | 'service_faq'
  | 'fallback'

export interface IntentResult {
  intent: IntentType
  confidence: number
  data?: ServiceKB | FAQ | (FAQ & { serviceId: string; serviceName: string })
}

export function normalizeRomanian(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/ț/g, 't')
    .replace(/ș/g, 's')
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/Ț/g, 't')
    .replace(/Ș/g, 's')
    .replace(/Ă/g, 'a')
    .replace(/Â/g, 'a')
    .replace(/Î/g, 'i')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

const faqFuse = new Fuse(ATLAS_KNOWLEDGE.faqs_general as FAQ[], {
  keys: ['q'],
  threshold: 0.45,
  includeScore: true,
})

const allServiceFaqs = ATLAS_KNOWLEDGE.services.flatMap((s) =>
  s.faqs.map((f) => ({ ...f, serviceId: s.id, serviceName: s.name }))
)

const serviceFaqFuse = new Fuse(allServiceFaqs, {
  keys: ['q'],
  threshold: 0.45,
  includeScore: true,
})

export function detectIntent(userMessage: string): IntentResult {
  const normalized = normalizeRomanian(userMessage)

  // Step 1: exact pattern match against known intents
  const intentKeys = ['greeting', 'pricing', 'contact', 'portfolio', 'services_list'] as const
  for (const intentKey of intentKeys) {
    const intent = ATLAS_KNOWLEDGE.intents[intentKey]
    const matched = (intent.patterns as readonly string[]).some((p) =>
      normalized.includes(normalizeRomanian(p))
    )
    if (matched) {
      return { intent: intentKey, confidence: 0.9 }
    }
  }

  // Step 2: fuzzy search in general FAQs
  const faqResults = faqFuse.search(normalized)
  if (faqResults.length > 0 && faqResults[0].score !== undefined && faqResults[0].score < 0.45) {
    return {
      intent: 'faq_match',
      confidence: 1 - faqResults[0].score,
      data: faqResults[0].item as FAQ,
    }
  }

  // Step 3: fuzzy search in service-specific FAQs
  const serviceFaqResults = serviceFaqFuse.search(normalized)
  if (
    serviceFaqResults.length > 0 &&
    serviceFaqResults[0].score !== undefined &&
    serviceFaqResults[0].score < 0.45
  ) {
    return {
      intent: 'service_faq',
      confidence: 1 - serviceFaqResults[0].score,
      data: serviceFaqResults[0].item as FAQ & { serviceId: string; serviceName: string },
    }
  }

  // Step 4: detect mentioned service by keywords or name
  const mentionedService = ATLAS_KNOWLEDGE.services.find(
    (s) =>
      s.keywords.some((k) => normalized.includes(normalizeRomanian(k))) ||
      normalized.includes(normalizeRomanian(s.name))
  )
  if (mentionedService) {
    return { intent: 'service_info', confidence: 0.7, data: mentionedService as ServiceKB }
  }

  return { intent: 'fallback', confidence: 0 }
}
