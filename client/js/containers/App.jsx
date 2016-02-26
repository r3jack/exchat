import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/sidebar/Sidebar'
import {fetchChannelsIfNeeded} from '../actions/channels'

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props

    dispatch(fetchChannelsIfNeeded())
  }

  render() {
    const {dispatch, channels, children} = this.props

    return (
      <div className="app-container">
        <div className="navigate-sidebar">
          <Sidebar dispatch={dispatch} channels={channels} />
        </div>
        <div className="main-area">
          { children || 'Loading..' }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  channels: PropTypes.object,
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(
  mapStateToProps
)(App)
