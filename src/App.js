import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board:Array(9).fill(null),
      player:"X",
      winner:null,
    }
  }
  checkWin()
  {
    let WinLines=
    [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]
    for(let index=0;index<WinLines.length;index++)
    {
      const [a,b,c] = WinLines[index];
      if(this.state.board[a] && this.state.board[a]===this.state.board[b]&&this.state.board[b]===this.state.board[c])
    {
      
      this.setState({
        winner:this.state.player
      })
      alert("You won");
    }
    }
    
  }
  handleClick(index)
  {
    let newBoard = this.state.board;
    let newPlayer = this.state.player === "X"? "O":"X";
    if(this.state.board[index]===null && !this.state.winner)
    {
      newBoard[index]=this.state.player;
      this.setState({
        board:newBoard,
        player:newPlayer
      })
      this.checkWin();
    }
    
    
  }
  render() {
    const Box = this.state.board.map((box,index) => <div className="box" key={index} onClick={()=>this.handleClick(index)}>{box}</div>)
    return ( 
      <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
      {Box}
      
      </div>
      </div>
    );
  }
}

export default App;
