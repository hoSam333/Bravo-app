import React from 'react'
import Lotti from 'lottie-react'
import loading from '../assets/lotti/loading.json'
import error from '../assets/lotti/error.json'


function LottiHAndler({type}) {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center vh-100'>
            {type === 'loading' ?
                <Lotti style={{width:'500px'}} animationData={ loading } loop={ true } /> :
            type === 'error' ?
                <Lotti style={{width:'300px'}} animationData={ error } loop={ true } /> : ''
            }
        </div>
    </>
  )
}

export default LottiHAndler
