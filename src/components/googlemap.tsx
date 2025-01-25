import { GoogleMapsEmbed } from '@next/third-parties/google'
import React from 'react'

function GoogleMap() {
  return (
    <GoogleMapsEmbed
      id='footermap'
      apiKey={process.env.NEXT_PUBLIC_REVIEWS_API_KEY || ""}
      height={200}
      width="100%"
      mode="place"
      q="blinds+and+curtains+Dubai,Dubai,DXB"
    />
  )
}

export default GoogleMap