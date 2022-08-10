// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, highScore, result} = props
  return (
    <nav className="nav-bar">
      <div className="game-logo-box">
        <img
          className="game-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {result === 'continue' && (
        <>
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {highScore}</p>
        </>
      )}
    </nav>
  )
}

export default NavBar
