import React from 'react'
import './index.css'

const App = () => {
  return (
    <>
      <form className = "new-item-form">
        <div className = "form-row">
          <label htmlFor="item" /> Enter Task
          <input type = "text" id="item" />
        </div>
        <button className="btn"> Add </button>
      </form>
      <h1 className='header'>To-Do List</h1>
      <ul className = 'list'>
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className='btn btn-danger'> Danger </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item 2
          </label>
          <button className='btn btn-danger'> Danger </button>
        </li>
      </ul>
    </>
  )
}

export default App;