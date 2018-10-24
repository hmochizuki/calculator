import React from 'react'


const Result = ({ result }, maxLength) => (
  <div>
    <input 
      type="text"
      value={result}
      maxLength={maxLength}
      style={{
        borderRadius: '5%',
        border: 'outset rgb(50,150,250)',
        textAlign: 'right',
        width: '120px',
        height: '15px',
        color: 'rgb(50,150,250)',
        backgroundColor: 'rgba(3, 169, 244, 0.05)',
      }}
    />
  </div>
)

export default Result
