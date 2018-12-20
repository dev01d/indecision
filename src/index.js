import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp.js'
import * as Sentry from '@sentry/browser'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://15794c2bda654d07ac2dcf24a49f04e9@sentry.dev01d.com/4',
  })
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
