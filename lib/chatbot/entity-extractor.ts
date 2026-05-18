import { normalizeRomanian } from './intent-matcher'
import { ATLAS_KNOWLEDGE, type ServiceKB } from './knowledge-base'

export interface ExtractedEntities {
  service?: ServiceKB
  dimensions?: string
  location?: string
  quantity?: number
}

const DIMENSION_PATTERN = /(\d+(?:[.,]\d+)?)\s*(?:x|×|\*)\s*(\d+(?:[.,]\d+)?)\s*(m|cm|mm)?/i
const QUANTITY_PATTERN = /(\d+)\s*(?:buc|buca[tț]i|bucăți|buc\.|piese|exemplare)/i
const LOCATION_PATTERN = /(?:in|în|la|din)\s+([A-ZĂÂÎȘȚ][a-zăâîșț]+(?:[\s-][A-ZĂÂÎȘȚ]?[a-zăâîșț]+)*)/

export function extractEntities(userMessage: string): ExtractedEntities {
  const normalized = normalizeRomanian(userMessage)
  const result: ExtractedEntities = {}

  // Service detection
  const service = ATLAS_KNOWLEDGE.services.find(
    (s) =>
      s.keywords.some((k) => normalized.includes(normalizeRomanian(k))) ||
      normalized.includes(normalizeRomanian(s.name))
  )
  if (service) result.service = service as ServiceKB

  // Dimensions (e.g. "3x1m", "200x60cm")
  const dimMatch = userMessage.match(DIMENSION_PATTERN)
  if (dimMatch) {
    const unit = dimMatch[3] ?? 'm'
    result.dimensions = `${dimMatch[1]} × ${dimMatch[2]} ${unit}`
  }

  // Quantity
  const qtyMatch = userMessage.match(QUANTITY_PATTERN)
  if (qtyMatch) {
    result.quantity = parseInt(qtyMatch[1], 10)
  }

  // Location
  const locMatch = userMessage.match(LOCATION_PATTERN)
  if (locMatch) {
    result.location = locMatch[1]
  }

  return result
}
