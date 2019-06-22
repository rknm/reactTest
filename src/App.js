import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit/Fruit'
import DeleteFruit from './Fruit/DeleteFruit'
import AddFruit from './Fruit/AddFruit'
import Food from './Food/Food'

class App extends Component {
  state = {
    clickedCount:0,
    fruits:[
      {name: 'lemon', cost:2},
      {name: 'mango', cost:3},
      {name: 'banana', cost:4}
    ],
    userText: ' '
  }

  onChangeHandler = (event) => {
    this.setState({ userText: event.target.value});
  }

  deleteHandler = () => {
    const fruitIndex = this.state.fruits.findIndex(el => {
      return el.name === this.state.userText;
    });

    if (fruitIndex >= 0) {
      let newFruits = [...this.state.fruits];
      newFruits.splice(fruitIndex, 1);
      this.setState({ fruits: newFruits});
    } else {
      this.setState({userText: 'Not Found!!!!'});
    }
  }

  addHandler = () => {
    const fruitIndex = this.state.fruits.findIndex(el => {
      return el.name === this.state.userText;
    });

    const userText = this.state.userText;
    if (fruitIndex >= 0) {
      this.setState({userText: userText + ' is already Exists!!!!'});      
    } else {
      let newFruits = [...this.state.fruits];
      newFruits.push({name: userText, cost: 0});
      this.setState({ fruits: newFruits});
    }
  }

  addCost = (name, cost) => {
    const fruitIndex = this.state.fruits.findIndex(el => {
      return el.name === name;
    });
    let newFruits = [...this.state.fruits];
    const addCost = cost + 1;
    newFruits[fruitIndex] = {'name': name, 'cost': addCost};
    this.setState({fruits: newFruits});
  }

  subtractCost = (name, cost) => {
    const fruitIndex = this.state.fruits.findIndex(el => {
      return el.name === name;
    });
    let newFruits = [...this.state.fruits];
    const subtractCost = cost - 1;
    newFruits[fruitIndex] = {'name': name, 'cost': subtractCost};
    this.setState({fruits: newFruits});
  }

  itemClicked = () => {
    const oldCount = this.state.clickedCount;
    const newCount = oldCount + 1;
    this.setState({clickedCount: newCount});
  }

  render() {

    const style = {
      'backgroundColor': 'lightblue',
      textAlign: 'center'
    }

    return (
      // <div>
      //   <button onClick={this.clickHandler}>Click!</button>
      //   <p>{this.state.counter}</p>
      // </div>
      <div>
        {this.state.fruits.map((el, index) => {
          return <Fruit 
            key={index} 
            method={this.itemClicked} 
            name={el.name} 
            cost={el.cost}
            add={this.addCost}
            subtract={this.subtractCost} />
        })}
        <p style={style}>ClikedCount:{this.state.clickedCount}</p>
        <AddFruit addhandler={this.addHandler} changed={this.onChangeHandler} />
        <DeleteFruit deletehandler={this.deleteHandler} changed={this.onChangeHandler} />
        <p>{this.state.userText}</p>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
