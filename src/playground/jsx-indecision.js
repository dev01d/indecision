console.log('App.js is running')
// JSX -JS XML

/*
! The correct babel CMD
* babel src/playground/[File] --out-file=public/scripts/app.js --presets=env,react --watch
* babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
! The correct Live Server CMD
* live-server indecision
*/

const app = {
  title: 'North West',
  sub: 'Is the best',
  options: []
}

const onFormSubmit = event => {
  event.preventDefault()
  console.log('form Submitted')
  const option = event.target.elements.option.value

  if (option) {
    app.options.push(option)
    event.target.elements.option.value = ''
    renderTemplate()
  }
}

const removeAll = () => {
  app.options = []
  renderTemplate()
}

const makeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randNum]
  alert(option)
}

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.sub && <p>{app.sub}</p>}
      <p>
        {app.options.length > 0 ? 'Here are your options:' : 'No options yet'}
      </p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
renderTemplate()
