// Write your code here

import {Component} from 'react'

import './index.css'

class coinToss extends Component {
  state = {isLogic: true, Heads: 0, Tails: 0, count: 0}

  checkTheToss = () => {
    const {isLogic} = this.state
    if (isLogic === true) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="image"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="toss result"
        className="image"
      />
    )
  }

  clicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(`tossResults:${tossResult}`)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isLogic: true,
        Heads: prevState.Heads + 1,
        count: prevState.count + 1,
      }))
    } else {
      this.setState(prevState => ({
        isLogic: false,
        Tails: prevState.Tails + 1,
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {Heads, Tails, count} = this.state
    console.log(`Heads:${Heads}`)
    console.log(`Tails:${Tails}`)
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {this.checkTheToss()}
          <button type="button" className="button" onClick={this.clicked}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total:{count}</p>
            <p className="total">Heads:{Heads}</p>
            <p className="total">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default coinToss
