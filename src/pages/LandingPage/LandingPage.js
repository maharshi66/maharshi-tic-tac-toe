import React, { useState } from 'react'
import { Button, ButtonGroup, ToggleButton, Row, Col, Container} from 'react-bootstrap';
import './LandingPage.css';
import XMark from '../../components/Marks/XMark';
import OMark from '../../components/Marks/OMark';

const LandingPage = ({history}) => {
    const [playMode, setPlayMode] = useState('1');
    const playingModes = [
        { name: 'With AI', value: '1' },
        { name: 'With A Friend', value: '2' },
    ];

    const handleClick = () => {
        history.push('/pick-side');
    }

    return (

        <Container
        data-aos="fade-left"
        data-aos-delay="500"
        className='div-center justify-content-center'>
            <Row className='pb-2 shadow' xs={12} md={12}>
                <Col>
                    <XMark />
                </Col>
                <Col>
                    <OMark />
                </Col>
            </Row>
            <br />
            <Row xs={1} md={1} className='pb-3'>
                <h6>
                    Choose Playing Mode
                </h6>
            </Row>
            <Row xs={1} md={1}>
                <ButtonGroup toggle>
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
            </Row>
            
            <br />
            <Row xs={1} md={1}>
                    <Button 
                        className='rounded-pill' 
                        onClick={handleClick} 
                        variant='outline-success'>
                        Continue
                    </Button>                    
            </Row>
            <div className='py-3 py-md-2 justify-content-center align-items-center'>
                <button className='settings-btn'>
                    <i className='fas fa-cog' />
                </button>
            </div>
        </Container>
    )
}

export default LandingPage