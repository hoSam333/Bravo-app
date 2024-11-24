import React from 'react'
import ContentLoader from "react-content-loader"

function Skelton(props) {
    const loader = Array(20).fill(0).map((_,key)=>(
        <div className='col-lg-3 col-md-6 col-sm-12' key={key}>
    <ContentLoader 
    speed={2}
    width={220}
    height={300}
    viewBox="0 0 220 300"
    backgroundColor="#d7d6d6"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="167" y="166" rx="0" ry="0" width="1" height="1" /> 
    <rect x="174" y="169" rx="0" ry="0" width="1" height="0" /> 
    <rect x="107" y="169" rx="0" ry="0" width="10" height="0" /> 
    <rect x="34" y="5" rx="0" ry="0" width="179" height="148" /> 
    <rect x="56" y="184" rx="0" ry="0" width="131" height="7" /> 
    <rect x="34" y="206" rx="9" ry="9" width="35" height="40" /> 
    <rect x="57" y="167" rx="0" ry="0" width="131" height="7" /> 
    <rect x="175" y="208" rx="9" ry="9" width="35" height="40" />
  </ContentLoader>
        </div>
    ))
    
    
  return loader
}

export default Skelton
