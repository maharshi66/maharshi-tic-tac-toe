// import React, { useState } from 'react'
import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = ({history}) => {
    // const [playMode, setPlayMode] = useState('1');
    // const playingModes = [
    //     { name: 'With AI', value: '1' },
    //     { name: 'With A Friend', value: '2' },
    // ];

    const handleClick = () => {
        history.push('/pick-side');
    }

    return (

        <Container
        data-aos="fade-left"
        data-aos-delay="500"
        className='div-center justify-content-center'>
            <Row>
                <Col xs={12} md={12}>
                    <h1 >
                        <span className='gradient-text-x'>X</span>
                        <span className='gradient-text-y'>O</span>
                    </h1>
                </Col>
            </Row>
            <br />
            <Row xs={1} md={1}  className='pb-1'>
                <h6 style={{fontWeight: 'bold'}}>
                    Choose your play mode
                </h6>
            </Row>
            {/* <Row xs={1} md={1}>
                /* <ButtonGroup toggle>
                {
                    playingModes.map((mode, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="outline-primary"
                            name="radio"
                            value={mode.value}
                            checked={playMode === mode.value}
                            onChange={(e) => setPlayMode(e.currentTarget.value)}
                        >
                            {mode.name}
                        </ToggleButton>
                    ))
                }
                </ButtonGroup> 
            </Row> */}
            <div className='py-3 py-md-2'>
                <button onClick={handleClick} className='mode-btn'>
                    <h6 className='mode-text' style={{color: 'black'}}>With AI</h6>
                </button>
            </div>
            <div className='py-3 py-md-2 justify-content-center'>
                <button onClick={handleClick} className='mode-btn'>
                    <h6 className='mode-text' style={{color: 'black'}}>With A Friend</h6>
                </button>
            </div>
            <br />
            <div className='py-3 py-md-2'>
                <button className='settings-btn'>
                    <span style={{color: 'blue'}}>
                        <i className='fas fa-cog' />
                    </span>
                </button>
            </div>
        </Container>
    )
}

export default LandingPage