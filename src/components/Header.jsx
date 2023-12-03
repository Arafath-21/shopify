import React from 'react'

function Header(props) {
  return <>
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">{props.h}</h1>
            <p className="lead fw-normal text-white-50 mb-0">{props.para}</p>
        </div>    
  </>
}

export default Header