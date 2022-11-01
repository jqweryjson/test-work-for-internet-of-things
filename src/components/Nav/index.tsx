import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

export const Nav = () => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/test-work-for-internet-of-things/#"
        >
          Form
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/test-work-for-internet-of-things/#/dashboard"
        >
          Dashboard
        </Link>
      </Breadcrumbs>
    </div>
  )
}
