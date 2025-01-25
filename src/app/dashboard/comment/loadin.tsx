import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout'
import HorizontalcardSkelton from 'components/Skeleton/HorizontalcardSkelton'
import React from 'react'

function loading() {
  return (
    <DefaultLayout>
        <HorizontalcardSkelton rows={10} columns={1} />
      </DefaultLayout>
  )
}

export default loading