import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updatedSearchInput} = props

  const {suggestion} = suggestionItem

  const onClickSuggestion = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-item">{suggestion}</p>
      <button
        type="button"
        className="suggestion-btn"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
