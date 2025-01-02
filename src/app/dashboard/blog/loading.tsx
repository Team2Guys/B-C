
'use client'
import TableSkeleton from 'components/Dashboard/Tables/TableSkelton'
import React from 'react'

function loading() {
  return (
    <div><TableSkeleton rows={10} columns={1} /></div>
  )
}

export default loading