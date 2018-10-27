import React, { PropTypes } from 'react';

const NumBtn = ({n, onClick}) => (
  <button onClick={onClick} style={{
    color:'rgb(50, 150, 250)',
    backgroundColor: 'rgba(3, 169, 244, 0.08)',
    borderRadius: '33%',
    width: '30px',
    height: '30px',
    margin: '1px',
    border: 'outset rgb(50,150,250)',
  }}>{n}</button>
)

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumBtn
