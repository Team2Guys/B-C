import Link from 'next/link'
import React from 'react'

const FreeVisit = () => {
  return (

<div className="text-center mt-10">
  <Link
    href="/book-free-visit" 
    className="inline-block bg-secondary text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition"
  >
    Book a Free Visit
  </Link>
</div>
  )
}

export default FreeVisit

