import React, { Suspense } from 'react'
import Home from './Components/Home'

export default function Homepage() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  )
}