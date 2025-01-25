"use client"

import TableSkeleton from 'components/Dashboard/Tables/TableSkelton'
import React from 'react'

function Loading() {
  return (
    <TableSkeleton rows={0} columns={9} />
  )
}

export default Loading