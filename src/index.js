import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp.js'
import * as Sentry from '@sentry/browser'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://143f631e1bdd4bc78207492053110f88@sentry.dev01d.com/5'
  })
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
