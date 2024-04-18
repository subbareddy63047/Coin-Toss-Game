// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {condition: true, total: 0, heads: 0, tails: 0}

  coinRotate = () => {
    const randomNumber = Math.ceil(Math.random() * 2)
    console.log(randomNumber)
    if (randomNumber === 1) {
      this.setState(prevState => ({
        condition: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        tails: prevState.tails,
      }))
    } else {
      this.setState(prevState => ({
        condition: false,
        total: prevState.total + 1,
        heads: prevState.heads,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {condition, total, heads, tails} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          <img
            src={
              condition
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
          />

          <button type="button" className="button" onClick={this.coinRotate}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total:{total}</p>
            <p className="total">Heads:{heads}</p>
            <p className="total">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
