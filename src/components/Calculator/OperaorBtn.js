import React, { PropTypes } from 'react';

const OperatorBtn = ({writing,onClick}) => (
  <button onClick={ onClick } style={{
    color:'rgb(50, 150, 250)',
    backgroundColor: 'rgba(3, 169, 244, 0.08)',
    borderRadius: '33%',
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