// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: true,
    lastName: true,
  }

  clickFirstname = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  clickLastname = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    let head
    let head1
    let fName
    let lName

    const {firstName, lastName} = this.state
    if (firstName === false) {
      head = 'heading-container'
      fName = 'Joe'
    } else {
      head = 'heading-no-container'
      fName = ''
    }

    if (lastName === false) {
      head1 = 'heading-container'
      lName = 'Jonas'
    } else {
      head1 = 'heading-no-container'
      lName = ''
    }

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="display">
          <div className="main-div">
            <button type="button" onClick={this.clickFirstname}>
              Show/Hide Firstname
            </button>

            <p className={`first-name ${head}`}>{`${fName}`}</p>
          </div>
          <div className="main-div">
            <button type="button" onClick={this.clickLastname}>
              Show/Hide Lastname
            </button>

            <p className={`first-name ${head1}`}>{`${lName}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
