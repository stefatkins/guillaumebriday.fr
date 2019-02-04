import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connectAutoComplete } from 'react-instantsearch-dom'
import AutoSuggest from 'react-autosuggest'

class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.currentRefinement,
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value)
  }

  onSuggestionsClearRequested = () => {
    this.props.refine()
  }

  getSuggestionValue(hit) {
    return hit.path
  }

  renderSuggestion(hit) {
    console.log(hit)
    return <Link to={hit.fields.slug}>{hit.frontmatter.title}</Link>
  }

  renderSectionTitle(section) {
    return section.index
  }

  getSectionSuggestions(section) {
    return section.hits
  }

  render() {
    const { hits, onSuggestionSelected } = this.props
    const { value } = this.state

    const inputProps = {
      placeholder: 'Search for a product...',
      onChange: this.onChange,
      value,
    }

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />
    )
  }
}

export default connectAutoComplete(AutoComplete)
