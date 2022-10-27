import type { FC } from 'react'

import React from 'react'
import DSL from '../../DSL.json'

interface Props {}

export const Dashboard: FC<Props> = React.memo(() => {
  return <pre>{JSON.stringify(DSL, null, 2)}</pre>
})
