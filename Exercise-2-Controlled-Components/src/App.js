import React from 'react'
import logo from './logo.svg'
import './App.css'
import CreateNewItem from './CreateNewItem'
import DeleteLastItem from './DeleteLastItem'
import ItemList from './ItemList'

class App extends React.Component {
  state = {
    items: [],
  }

  handleAddItem = (item) => {    
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }))
  }

  handleDeleteLastItem = () => {
    this.setState(() => ({ items: this.state.items.slice(0, -1) }))
  }

  noItemsFound = () => {
    return this.state.items.length === 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem handleAddItem={this.handleAddItem} />
        <DeleteLastItem
          handleDeleteLastItem={this.handleDeleteLastItem}
          noItemsFound={this.noItemsFound()}
        />
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default App