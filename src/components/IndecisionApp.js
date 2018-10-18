import React from 'react'
import AddOption from './AddOption.js'
import Header from './Header.js'
import Options from './Options.js'
import Action from './Action.js'
import OptionModal from './OptionModal.js'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleModalClose = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists'
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Does nothing if err. It falls back to normal operations.
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {}
  render() {
    const subtitle = ''
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleModalClose={this.handleModalClose}
          />
        </div>
      </div>
    )
  }
}

export default IndecisionApp
