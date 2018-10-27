import React, { PropTypes } from 'react';

const OperatorBtn = ({writing,onClick}) => (
  <button onClick={ onClick } style={{
    color:'rgb(50, 150, 250)',
    backgroundColor: 'rgb(200,200,200,0.35)',
    borderRadius: '100%',
    width: '30px',
    height: '30px',
    margin: '1px',
    border: 'outset rgb(50,150,250)',
  }}>{writing}</button>
)

OperatorBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OperatorBtn
