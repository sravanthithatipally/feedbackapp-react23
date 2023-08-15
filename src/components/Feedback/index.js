// Write your React code here.
import {Component} from 'react'

import './index.css'

import FeedbackItem from '../FeedbackItem'

class Feedback extends Component {
  state = {click: true}

  // eslint-disable-next-line
  clickImage = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {click} = this.state

    return (
      <div className="bg-container">
        {click ? (
          <div className="inner-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>

            <ul className="ul-list">
              {emojis.map(each => (
                <FeedbackItem
                  emojiDetails={each}
                  key={each.id}
                  clickImage={this.clickImage}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="msg-container">
            <img src={loveEmojiUrl} className="heart-image" alt="love emoji" />
            <h1 className="name">Thank you!</h1>
            <p className="about">
              We will use your information to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
