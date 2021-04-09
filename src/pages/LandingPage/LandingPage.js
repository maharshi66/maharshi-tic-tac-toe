import React, { useState } from 'react'
import { Button, ButtonGroup, ToggleButton, Row, Col, Container, Image} from 'react-bootstrap';
import './LandingPage.css';
import xMark from '../../assets/x-mark.svg';
import oMark from '../../assets/o-mark.svg';

const LandingPage = () => {
    const [playMode, setPlayMode] = useState('1');
    const playingModes = [
        { name: 'With AI', value: '1' },
        { name: 'With A Friend', value: '2' },
    ];

    return (
        <Container className='landing-page justify-content-center'>
            <Row className='pb-3' xs={12} md={12}>
                <Col>
                    <Image fluid src={xMark} alt='xmark' />
                </Col>
                <Col>
                    <Image fluid src={oMark} alt='omark' />
                </Col>
            </Row>
            <Row xs={1} md={1}>
                <h7>
                    Choose Playing Mode
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
            <Row xs={1} md={1}>
                    <Button rounded variant='success'>
                        Continue
                    </Button>                    
            </Row>
        </Container>
    )
}

export default LandingPage