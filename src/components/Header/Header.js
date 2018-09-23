import React from 'react'

// TODO contentsListの切り出し
// const contentsList = () =>
//   <div>
//     <ul style={{listStyle:"none"}}>
//       <li><button>Caliculator</button></li>
//       <li>some</li>
//     </ul>
//   </div>

const Header  = ({onClick}) =>
  <div style={{backgroundColor:"aqua"}}>
    {/* <link href="./index.scss" rel="stylesheet" type="text/css"/> */}
    <header className="root">
      <div style={{textAlign:"center"}}>
        <p><strong>React-Redux</strong></p>
        <ul style={{listStyle:"none"}}>
          <li><button onClick={onClick}>Caliculator</button></li>
          <li>some</li>
        </ul>
      </div>
    </header>
  </div>

export default Header
