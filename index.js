  import './index.css'
  import React, { Component } from 'react'
  import LeftyAutomobile from 'react-icons/lib/lefty/automobile'
  import LeftyBed from 'react-icons/lib/lefty/bed'
  import LeftyPlane from 'react-icons/lib/lefty/plane'
  import LeftySpaceShuttle from 'react-icons/lib/lefty/space-shuttle'
  import * as text from './text'

  class Tabs extends Component {

    state = {
      activeIndex: 0
    }
      
    selectTabIndex(activeIndex) {
      this.setState({ activeIndex })
    }
    
    renderTabs() {
      const { data } = this.props
      return data.map((tab, index) => {
        const isActive = this.state.activeIndex === index
        return (
        <div
          key={index}
          className={isActive ? 'tab active' : 'tab'}
          onClick={() => this.selcetTabIndex(index)}
        >{tab.label}</div>
      )
    })
  }

      renderPanel() {
      const { data } = this.props
      const { activeIndex } = this.state
      return <div>{data[activeIndex].content}</div>
    }

      render() {
      return (
      <div className="Tabs">
        <div className="tabs">
          {this.renderTabs()}
        </div>
        <div className="panels">
          {this.renderPanel()}
        </div>
      </div>
    )
   }
 }

 class App extends Component {

    render() {
      const tabData = [
        { label: <LeftyAutomobile/>,
          content: text.cars
        }
        { label: <LeftyBed/>
        content: text.hotels
        
