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
        console.log('Continue clicked');
        history.push('/pick-side');
    }

    return (
        <Container className='div-center justify-content-center'>
            <Row className='pb-3' xs={12} md={12}>
                <Col>
                    <XMark />
                </Col>
                <Col>
                    <OMark />
                </Col>
            </Row>
            <br />
            <Row xs={1} md={1} className='pb-3'>
                <h7>
                    Choose Your Playing Mode
                </h7>
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
            <br />

            <Row xs={1} md={1}>
                    <Button className='rounded-pill' onClick={handleClick} variant='outline-success'>
                        Continue
                    </Button>                    
            </Row>
        </Container>
    )
}

export default LandingPage