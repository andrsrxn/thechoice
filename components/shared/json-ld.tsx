import type { Thing, WithContext } from 'schema-dts'

interface JsonLdProps {
  schema: WithContext<Thing>
}

export const JsonLd = ({ schema }: JsonLdProps) => (
  <script
    type='application/ld+json'
    // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a JSON-LD script, not user-generated content.
    // biome-ignore lint/style/useNamingConvention: react convention
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
)
