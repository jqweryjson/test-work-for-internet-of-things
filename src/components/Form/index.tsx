/* eslint-disable no-console */
/* eslint-disable no-shadow */
import type { FC } from 'react'

import React from 'react'
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui'

import givenFormData from '../../givenFormData.json'

import { MySchema } from '../../types'
import { getUiSchema, isValidForm } from '../../utils'

interface Props {
  schema: MySchema | any
}

export const Form: FC<Props> = React.memo(({ schema }) => {
  const [formData, setFormData] = React.useState(givenFormData)
  const uiSchema = getUiSchema(schema)
  console.log(uiSchema)

  const onSubmit = (value: any) => {
    if (isValidForm(value)) {
      alert('it`s okay')
    } else alert('not ok')
  }

  return (
    <MaterialJsonSchemaForm
      submitOnEnter
      activityIndicatorEnabled
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onChange={({ formData }: any) => {
        console.log(formData)
        setFormData(formData)
      }}
      // eslint-disable-next-line no-alert
      onSubmit={onSubmit}
    />
  )
})
