/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar/index'
import './index.css'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {clickedEmoji: [], score: 0, highScore: 0, game: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  check = name => {
    const {clickedEmoji, score, highScore} = this.state
    const element = clickedEmoji.find(each => each === name)
    if (element === undefined) {
      this.setState(prev => ({
        clickedEmoji: [...prev.clickedEmoji, name],
        score: prev.score + 1,
      }))
    } else {
      this.setState({game: 'lost'})
      if (score > highScore) {
        this.setState({highScore: score})
      }
    }
  }

  playAgain = () => {
    const {game} = this.state
    if (game !== '') {
      this.setState({score: 0, game: '', clickedEmoji: []})
    } else {
      this.setState({game: '', score: 0, highScore: 12, clickedEmoji: []})
    }
  }

  render() {
    const {score, highScore, game} = this.state
    let result = 'continue'
    if (score === 12) {
      result = 'win'
    } else if (game === 'lost') {
      result = 'lost'
    }
    const shuffled = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <NavBar score={score} highScore={highScore} result={result} />
          {result === 'win' && (
            <div className="win-lose-container">
              <WinOrLoseCard
                result={result}
                score={score}
                playAgain={this.playAgain}
              />
            </div>
          )}
          {result === 'lost' && (
            <div className="win-lose-container">
              <WinOrLoseCard
                result={result}
                score={score}
                playAgain={this.playAgain}
              />
            </div>
          )}
          {result === 'continue' && (
            <ul className="emoji-list-container">
              {shuffled.map(emoji => (
                <EmojiCard check={this.check} key={emoji.id} details={emoji} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
