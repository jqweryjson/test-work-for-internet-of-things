import { has, isNumber, map, set, size, some } from 'lodash'
import { UI_SCHEMA_TEMPLATE } from './types'

const getUiElements = (properties: any): any => {
  return Object.assign(
    {},
    UI_SCHEMA_TEMPLATE,
    ...map(properties, (property: any, propertyName: string) => {
      switch (property.type) {
        case 'object':
          return getUiElements(property.properties)

        case 'array': {
          const propObj = { [propertyName]: { items: {} } } as any

          set(
            propObj,
            `${propertyName}.items`,
            property.items?.type === 'object'
              ? getUiElements(property.items.properties)
              : property.items
          )

          if (isNumber(property.maxItems)) {
            set(propObj, `${propertyName}.ui:validations.maxItems`, {
              value: property.maxItems,
              message: 'error',
            })
          }
          if (isNumber(property.minItems)) {
            set(propObj, `${propertyName}.ui:validations.minItems`, {
              value: property.minItems,
              message: 'error',
            })
          }
          return propObj
        }

        case 'string': {
          if (property.enum?.length)
            return {
              [propertyName]: {
                'ui:widget': 'radio',
                'ui:options': {
                  row: true,
                },
              },
            }
          return { [propertyName]: { 'ui:widget': 'input' } }
        }

        case 'integer':
          return { [propertyName]: { 'ui:widget': 'updown' } }

        default:
          return {}
      }
    })
  )
}

export const getUiSchema = (schema: any) => {
  return { ...getUiElements(schema.properties), required: schema.required }
}

export const isValidForm = (value: any) => {
  const hasRequired = some(value.uiSchema.required, (requiredField: string) =>
    has(value.formData, requiredField)
  )
  const hasInvalidField = some(
    value.formData,
    (fieldValue: string, fieldName: any) => {
      const validations = value.uiSchema?.[fieldName]?.['ui:validations']
      if (validations) {
        if (validations.maxItems) {
          if (size(fieldValue) > validations.maxItems.value) return true
        }
        if (validations.minItems) {
          if (size(fieldValue) < validations.minItems.value) return true
        }
        if (validations.maxLength) {
          if (size(fieldValue) > validations.maxLength.value) return true
        }
        if (validations.minLength) {
          if (size(fieldValue) < validations.minLength.value) return true
        }
      }
      return
    }
  )

  return hasRequired && !hasInvalidField
}
