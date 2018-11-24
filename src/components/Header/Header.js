import React, {Component} from 'react'


class Header extends Component {
  render() {
    const { app } = this.props
    const { contentsList } = app
    const contentButtons = contentsList.map((content) =>
      <div key={content}>
        <button>{content}</button><br/>
      </div>
    )
    return (
      <div style={{textAlign:"center"}}>
        <div style={{backgroundColor:"aqua"}}>
          {/* <link href="./index.scss" rel="stylesheet" type="text/css"/> */}
          <header className="root">
            <div style={{textAlign:"center"}}>
              <p><strong>React/Redux</strong></p>
              {contentButtons}
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header
