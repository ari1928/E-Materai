import React from 'react'
import { BeatLoader } from 'react-spinners'

function ThemedSuspense() {
  return (
    <div className="flex items-center min-h-screen">
      <div className='mx-auto'>
        <BeatLoader size={50} color={"#40E0D0"} />
      </div>
    </div>
  )
}

export default ThemedSuspense
