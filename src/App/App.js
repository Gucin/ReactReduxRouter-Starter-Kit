import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { setCount } from './actions'

class App extends Component {

  componentWillMount() {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <div className="count-container">
          <button onClick={(e) => { this.props.setCount(this.props.count + 1) }}>+</button>&nbsp;&nbsp;
          <button onClick={(e) => { this.props.setCount(this.props.count - 1) }}>-</button><br />
          <p><i>Count:</i>&nbsp;&nbsp;{this.props.count}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    count: state.app.count
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setCount: function (count) {
      dispatch(setCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
