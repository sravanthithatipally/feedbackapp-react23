import './index.css'

const FeedbackItem = props => {
  const {emojiDetails, clickImage} = props
  const {id, name, imageUrl} = emojiDetails

  const imageClicked = () => {
    clickImage(id)
  }

  return (
    <li className="list-style">
      <button type="button" className="emoji-button">
        <img
          src={imageUrl}
          className="emoji-image"
          alt={name}
          onClick={imageClicked}
        />
        <p className="emoji-name">{name}</p>
      </button>
    </li>
  )
}
export default FeedbackItem
