import './index.css'

const EmojiCard = props => {
  const {details, check} = props
  const {emojiName, emojiUrl} = details

  const click = () => {
    check(emojiName)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="btn" onClick={click}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
