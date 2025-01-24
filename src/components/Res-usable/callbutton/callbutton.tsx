import React from 'react'
import Link from 'next/link'
import { MdWifiCalling2 } from "react-icons/md";

const Callbutton = () => {
  return (
    <Link
      href="tel:+971544945339"
      target="_blank"
      rel="noopener noreferrer"
       aria-label="Call Phone Number"
      className="fixed bottom-12 left-6 z-50 flex items-center justify-center w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary-foreground transition-colors"
    >
      <MdWifiCalling2 size={24} />
    </Link>
  )
}

export default Callbutton