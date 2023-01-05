import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <header>
        
      <div className="logo">
          <img src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png" alt="logo" />
          <span>Stories</span>
      </div>

      <div className="select">
          <select name="category" id="nav-option">
              <option value="option-1">Explore Categories</option>
              <option value="option-2">Cloud Computing</option>
              <option value="option-3">DevOps</option>
              <option value="option-4">others</option>
          </select>
      </div>
      <div className="right-content">
          <span>EdYoda is free learning and knowledge <br/>
              sharing platform for techies</span>
          <button><a href="">Go to Main Website</a></button>
      </div>

  </header>
    )
  }
}
