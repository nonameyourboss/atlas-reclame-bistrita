import { ATLAS_KNOWLEDGE, type ServiceKB, type FAQ, type ChatAction } from './knowledge-base'
import { type IntentResult } from './intent-matcher'
import { type ExtractedEntities } from './entity-extractor'

export interface ChatResponse {
  text: string
  action?: ChatAction
  quickReplies?: string[]
}

function randomChoice<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const PRICE_RANGE_LABELS: Record<string, string> = {
  low: 'prețuri accesibile (câteva sute de lei)',
  medium: 'prețuri medii (câteva sute - câteva mii de lei)',
  high: 'prețuri ridicate (mii de euro, în funcție de complexitate)',
  'on-request': 'prețuri individualizate per proiect',
}

export function generateResponse(
  intentResult: IntentResult,
  entities: ExtractedEntities,
): ChatResponse {
  const { intent, data } = intentResult

  switch (intent) {
    case 'greeting':
      return {
        text: randomChoice(ATLAS_KNOWLEDGE.intents.greeting.responses),
        quickReplies: [
          'Ce servicii oferiți?',
          'Cât costă o reclamă LED?',
          'Unde sunteți?',
          'Vezi portofoliu',
        ],
      }

    case 'pricing': {
      const service = entities.service
      const dimNote = entities.dimensions ? ` de ${entities.dimensions}` : ''
      if (service) {
        const rangeLabel = PRICE_RANGE_LABELS[service.priceRangeIndicator] ?? 'prețuri variabile'
        return {
          text: `Pentru ${service.name}${dimNote} lucrăm cu ${rangeLabel}. Prețul exact depinde de specificațiile tale — trimite-ne detaliile și îți facem ofertă în 24h.`,
          action: ATLAS_KNOWLEDGE.intents.pricing.action,
          quickReplies: ['Cere ofertă acum', 'Ce include prețul?', 'Alt serviciu'],
        }
      }
      return {
        text: ATLAS_KNOWLEDGE.intents.pricing.fallback,
        action: ATLAS_KNOWLEDGE.intents.pricing.action,
        quickReplies: ['Reclamă LED', 'Wrap auto', 'Bannere', 'Structuri'],
      }
    }

    case 'contact':
      return {
        text: ATLAS_KNOWLEDGE.intents.contact.response,
        action: ATLAS_KNOWLEDGE.intents.contact.action,
        quickReplies: ['Cere ofertă', 'Servicii', 'Portofoliu'],
      }

    case 'portfolio':
      return {
        text: ATLAS_KNOWLEDGE.intents.portfolio.response,
        action: ATLAS_KNOWLEDGE.intents.portfolio.action,
        quickReplies: ['Reclame LED', 'Wrap auto', 'Structuri', 'Contact'],
      }

    case 'services_list':
      return {
        text: ATLAS_KNOWLEDGE.intents.services_list.response,
        action: ATLAS_KNOWLEDGE.intents.services_list.action,
        quickReplies: ['Detalii LED', 'Detalii wrap auto', 'Detalii print', 'Prețuri'],
      }

    case 'service_info': {
      const s = data as ServiceKB
      return {
        text: `${s.name} — ${s.longDesc}\n\nMateriale: ${s.materials.slice(0, 3).join(', ')}.\nDimensiuni tipice: ${s.typicalSizes}.\nTimp producție: ${s.productionTime}.`,
        action: { type: 'navigate', label: `Detalii ${s.name}`, path: `/servicii/${s.id}` },
        quickReplies: ['Cere ofertă', 'Alt serviciu', 'Prețuri'],
      }
    }

    case 'faq_match': {
      const faq = data as FAQ
      return {
        text: faq.a,
        action: faq.action,
        quickReplies: faq.action ? ['Altă întrebare', 'Cere ofertă'] : ['Altă întrebare', 'Prețuri', 'Contact'],
      }
    }

    case 'service_faq': {
      const sfaq = data as FAQ & { serviceId: string; serviceName: string }
      return {
        text: sfaq.a,
        action: { type: 'navigate', label: `Detalii ${sfaq.serviceName}`, path: `/servicii/${sfaq.serviceId}` },
        quickReplies: ['Cere ofertă', 'Alt serviciu', 'Altă întrebare'],
      }
    }

    default:
      return {
        text: ATLAS_KNOWLEDGE.intents.fallback.response,
        action: ATLAS_KNOWLEDGE.intents.fallback.action,
        quickReplies: ['Ce servicii oferiți?', 'Program de lucru', 'Cere ofertă'],
      }
  }
}
