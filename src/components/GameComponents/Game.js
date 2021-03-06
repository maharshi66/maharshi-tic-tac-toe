import React, { useState, useEffect } from 'react'
import Board from './Board';
import Score from './Score';
import calculateWinner from '../../util';
import { Button, Alert } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

const Game = ({history, match}) => {  
    
    const playerData = [ 
      {
        name: 'You',
        mark: (parseInt(match.params.id) === 0 ? 'X' : 'O'),
      }, 
      {
        name: 'AI',
        mark: (parseInt(match.params.id) === 0 ? 'O' : 'X'),
      }
    ];

    const [playHistory, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(playerData[0].mark === 'X' ? false : true);    
    const [currentPlayer, setCurrentPlayer] = useState('0');
    const [yourScore, setYourScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [winner, setWinner] = useState('');
    const [settingsClicked, setSettingsClicked] = useState(false);

    const mark = xIsNext === false ? 'X' : 'O';
    const winNoticed = calculateWinner(playHistory[stepNumber]);    
    
    function determineWinner() {
      if(winNoticed){
        if(currentPlayer === '0'){
          setWinner('AI')
          setAiScore(aiScore + 1)
        }else{
          setWinner('You')
          setYourScore(yourScore + 1)
        }
      }else{
        return '';
      }
    }

    useEffect(() => {
      determineWinner();
    }, [winNoticed, currentPlayer]);

    const handleClick = (i) => {
      const historyPoint = playHistory.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const blocks = [...current];
      
      // return if won or occupied
      if (winner || blocks[i]) {
        return;
      }
      
      // select block
      blocks[i] = mark;
      setHistory([...historyPoint, blocks]);
      setStepNumber(historyPoint.length);
      setXisNext(!xIsNext);
      setCurrentPlayer(currentPlayer === '0' ? '1' : '0' );
    };
    
    const handleReset = () => {
      setStepNumber(0);
      setCurrentPlayer('0');
      setXisNext(parseInt(match.params.id) === 0 ? false : true)
      setWinner('');
      setSettingsClicked(false);
    }

    const handleQuit = () => {
      setYourScore(0);
      setAiScore(0);
      handleReset();
      history.push("/");
    }

    const handleSettingsClicked = ( ) => {
      setSettingsClicked(!settingsClicked);
    }

    return (
      <>
      <div>
          {winner ? <Alert
            data-autoSave='fade-in' 
            className='winner-alert mt-3 mt-md-2 mx-4 mx-md-5 text-center'
            variant='success'>{ winner + " won!"}
            </Alert> 
          : null}                  
      </div>
      <div className='info-wrapper my-3'>
          <Score 
            curr={currentPlayer} 
            player1={playerData[0].name}
            player1Mark={playerData[0].mark} 
            player2={playerData[1].name} 
            player2Mark={playerData[1].mark}
            p1score={yourScore} 
            p2score={aiScore}
             />
      </div>
      <div className='rounded-corner'>
          <Board blocks={playHistory[stepNumber]} onClick={handleClick} />
      </div>
      <div className='info-wrapper mt-3'>
        {
          settingsClicked ? 
         <>
          <Button className='btn-sm mr-4' variant='primary' onClick={handleReset}>
            <i className='fas fa-sync-alt'></i> Reset
          </Button>
          <Button className='btn-sm' variant='outline-danger' onClick={handleQuit}>
            <i className='fas fa-times'></i> Quit
          </Button>
        </>
        : null
        }
      </div>
      <div className='settings-center'>
          <button onClick={handleSettingsClicked} className='settings-btn'>
              <span style={{color: 'blue'}}>
                  <i className='fas fa-cog' />
              </span>
          </button>
      </div>
      </>
    );
  };
  
  export default withRouter(Game);