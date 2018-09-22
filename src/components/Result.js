import React from 'react'


const Result = ({ result }, maxLength) => (
  <div>
    <input 
      type="text"
      value={result}
      maxLength={maxLength}
    />
  </div>
)

export default Result
