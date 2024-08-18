import React from 'react'
import { useParams } from 'react-router-dom'

function EditResume() {

    const param = useParams()
    console.log(param.resumeId)

  return (
    <div>
      EditResume    
    </div>
  )
}

export default EditResume
