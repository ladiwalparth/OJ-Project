import React from 'react'
import { useParams } from 'react-router-dom';
const DisplayProblem = () => {
  const { id } = useParams();
  return (
    <div>
        {id}
    </div>
  )
}

export default DisplayProblem
