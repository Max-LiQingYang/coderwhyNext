'use client'

import React, { useEffect } from 'react'

export default function Cart() {
  useEffect(() => {
    
    console.log('cookie', document.cookie)
  })

  return (
    <div>Cart</div>
  )
}
