import React from 'react'
import Game from '../../components/GameComponents/Game'
import './PlayGamePage.css';

const PlayGamePage = () => {
    return (
        <div className='div-center' data-aos='zoom-in'
            data-aos-delay='600'>
            <Game />
        </div>
    )
}

export default PlayGamePage;
