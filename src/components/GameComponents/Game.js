import React, { useState, useEffect } from 'react'
import Board from './Board';
import Score from './Score';
import calculateWinner from '../../util';
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

const Game = ({history, match}) => {
    const [playHistory, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);    
    const [currentPlayer, setCurrentPlayer] = useState('0');
    const [yourScore, setYourScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [playerData, setPlayerData] = useState(
      [ 
        {
          name: 'You',
          mark: match.params.id === 0 ? 'X' : 'O',
        }, 
        {
          name: 'AI',
          mark: match.params.id === 0 ? 'O' : 'X',
        }
      ]
    );
    const [gameComplete, setGameComplete] = useState(false);

    const xO = xIsNext ? "X" : "O";
    const winner = calculateWinner(playHistory[stepNumber]);    
    const determineWinner = () => {
      if(winner && currentPlayer === '0'){
        setGameComplete(true);
        return 'AI!'
      }else if(winner && currentPlayer === '1')
      {
        setGameComplete(true);
        return 'You!'
      }else{
        return null;
      }
    }

    let winnerName = winner ? determineWinner(winner) : null; 
    
    const handleClick = (i) => {
      const historyPoint = playHistory.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const blocks = [...current];
      
      // return if won or occupied
      if (winner || blocks[i]){
        return
      }
      
      // select square
      blocks[i] = xO;
      setHistory([...historyPoint, blocks]);
      setStepNumber(historyPoint.length);
      setXisNext(!xIsNext);
      setCurrentPlayer(currentPlayer === '0' ? '1' : '0' );
    };
    
    const handleReset = () => {
      setStepNumber(0);
      setXisNext(true);
      setCurrentPlayer('0');
    }

    const handleQuit = () => {
      history.push("/");
    }

    return (
      <>
      <div className='info-wrapper'>
          <p>{winnerName ? "Winner: " + winnerName : ''}</p>          
          <Score 
            curr={currentPlayer} 
            player1={playerData[0].name} 
            p1score={yourScore} 
            player2={playerData[1].name} 
            p2score={aiScore} />
      </div>
      <div>        
          <Board blocks={playHistory[stepNumber]} onClick={handleClick} />
      </div>
      <div className='info-wrapper mt-5'>
        <Button className='btn-lg mr-4' variant='primary' onClick={handleReset}>
            Reset
        </Button>
        <Button className='btn-lg' variant='outline-danger' onClick={handleQuit}>
          Quit
        </Button>
      </div>
      </>
    );
  };
  
  export default withRouter(Game);