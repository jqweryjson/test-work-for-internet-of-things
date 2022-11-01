export interface MySchema {
  streetAddress: string
  city: string
  state: string
  gender?: 'male' | 'female' | 'else'
  phones?: [string] | [string, string] | [string, string, string]
  parents?:
    | []
    | [
        {
          relation?: 'mother' | 'father'
          age?: number
          name?: string
          secondName?: string
          grandFather?: {
            [k: string]: unknown
          }
          grandMother?: {
            [k: string]: unknown
          }
          [k: string]: unknown
        }
      ]
    | [
        {
          relation?: 'mother' | 'father'
          age?: number
          name?: string
          secondName?: string
          grandFather?: {
            [k: string]: unknown
          }
          grandMother?: {
            [k: string]: unknown
          }
          [k: string]: unknown
        },
        {
          relation?: 'mother' | 'father'
          age?: number
          name?: string
          secondName?: string
          grandFather?: {
            [k: string]: unknown
          }
          grandMother?: {
            [k: string]: unknown
          }
          [k: string]: unknown
        }
      ]
  [k: string]: unknown
}

export const UI_SCHEMA_TEMPLATE = {
  'ui:page': {
    props: {
      'ui:schemaErrors': true,
    },
  },
}
