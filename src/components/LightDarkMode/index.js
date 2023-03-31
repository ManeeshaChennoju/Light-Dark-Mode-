import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    text: 'Light Mode',
    container: 'light_container',
    heading: 'light_heading',
    btnStyle: 'light_button',
  }

  onClickButton = () => {
    const {text, container, heading, btnStyle} = this.state
    let newText
    let newContainer
    let newHeading
    let newBtnStyle
    if (text === 'Light Mode') {
      newText = 'Dark Mode'
      newContainer = 'light_container'
      newHeading = 'light_heading'
      newBtnStyle = 'light_button'
    } else if (text === 'Dark Mode') {
      newText = 'Light Mode'
      newContainer = 'dark_container'
      newHeading = 'dark_heading'
      newBtnStyle = 'dark_button'
    }

    this.setState(prevState => {
      console.log('------------')
      return {
        text: newText,
        container: newContainer,
        heading: newHeading,
        btnStyle: newBtnStyle,
      }
    })
  }

  render() {
    const {text, container, heading, btnStyle} = this.state

    return (
      <div className="bg_container">
        <div className={container}>
          <h1 className={heading}> Click To Change Mode </h1>
          <button
            onClick={this.onClickButton}
            type="button"
            className={btnStyle}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
