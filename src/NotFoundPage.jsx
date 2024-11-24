import React from 'react'
import LottiHandler from './lottiHandler/LottiHAndler'

function NotFoundPage() {
  return (
    <section className='d-flex align-items-center justify-content-center vh-100'>
      <LottiHandler type='error' />
    </section>
  )
}

export default NotFoundPage
