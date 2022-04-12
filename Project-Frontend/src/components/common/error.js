import React from 'react'

export const Error1 = (props)=>{
  return(
    <div className="ui grid" style={{display:(props.shold?"none":"")}}>
      <div className="seven wide column"></div>
      <div className="seven wide column " >
        <p style={{color:"red",position:"absolute",top:"-30%"}}>{props.text1}</p>
      </div>
    </div>
  )
}

export const Error2 = (props)=>{
  return(
    <div className="ui grid" style={{display:(props.shold?"none":"")}}>
      <div className="six wide column"></div>
      <div className="seven wide column" >
        <p style={{color:"red",position:"absolute",top:"-30%"}}>{props.text1}</p>
      </div>
    </div>
  )
}
