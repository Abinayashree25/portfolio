import React from 'react'

const Button = (props) => {
  return (
    <button
      style={{
        color: props.cl,
        borderRadius: props.br,
        padding: props.pa,
        fontSize: props.fs,
        cursor: props.cur,
        border: props.bd,
        transition: props.ts,
        background: props.bc
      }}
    >
      {props.val}
    </button>
  )
}

export default Button
