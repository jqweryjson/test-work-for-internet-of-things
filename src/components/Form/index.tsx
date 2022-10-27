/* eslint-disable no-console */
/* eslint-disable no-shadow */
import type { FC } from 'react'

import React from 'react'
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui'

import uiSchema from '../../uiSchema.json'
import givenFormData from '../../givenFormData.json'

import { MySchema } from '../../types'

interface Props {
  schema: MySchema
}

export const Form: FC<Props> = React.memo(({ schema }) => {
  const [formData, setFormData] = React.useState(givenFormData)

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
      onSubmit={() => alert('form submitted')}
    />
  )
})
