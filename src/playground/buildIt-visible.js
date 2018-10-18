//* VisibiltyToggle -> render, constructor, handleToggleVisibility
//* visibility -> false

class VisibiltyToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
    console.log(this.state)
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: (prevState.visibility = !prevState.visibility)
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Thse are some details.</p>
          </div>
        )}
        <button />
      </div>
    )
  }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'))
