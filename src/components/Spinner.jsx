import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({ loading }) => {
    const color = "#ffffff"
    const override = {
        margin : "100px auto",
        display : "block"
    }
  return (
    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
       
    />
  )
}

export default Spinner