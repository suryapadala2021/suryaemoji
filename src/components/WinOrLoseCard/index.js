// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, result, playAgain} = props

  const reset = () => {
    playAgain()
  }
  return (
    <div className="win-or-loss-box">
      {result === 'win' && (
        <>
          <img
            className="win-or-loss-emoji"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
          <h1 className="you-won">You Won</h1>
          <p className="best-score">Best Score</p>
          <p className="win-or-loss-emoji-score">12/12</p>
        </>
      )}
      {result === 'lost' && (
        <>
          <img
            className="win-or-loss-emoji"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
          <h1 className="you-won">You Lose</h1>
          <p className="best-score">Score</p>
          <p className="win-or-loss-emoji-score">{score}/12</p>
        </>
      )}
      <button type="button" className="play-again-btn" onClick={reset}>
        Play Again
      </button>
    </div>
  )
}
export default WinOrLoseCard
