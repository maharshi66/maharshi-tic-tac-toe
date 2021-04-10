import React, { useState } from 'react'
import XMark from '../../components/Marks/XMark';
import OMark from '../../components/Marks/OMark';
import { ButtonGroup, ToggleButton, Button, Row, Col, Container} from 'react-bootstrap';
import './PickSidePage.css';

const PickSidePage = ({history}) => {

    const [sidePicked, setSidePicked] = useState('1');
    const sides = [
        { name: 'X', value: '1' },
        { name: 'O', value: '2' },
    ];

    const handleClick = () => {
        console.log('Side Picked');
        history.push('/play');
    }
    
    return (
        <Container className='div-center justify-content-center'>
        
        <Row xs={1} md={1} className='pb-4'>
            <h7>
                Pick Your Side
            </h7>
        </Row>
        
        <Row className='pb-3' xs={12} md={12}>
            <Col>
                <XMark />
            </Col>
            <Col>
                <OMark />
            </Col>
        </Row>
        
        <Row xs={1} md={1}>
                <ButtonGroup toggle>
                {
                    sides.map((side, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            className='btn-lg'
                            variant="outline-primary"
                            name="radio"
                            value={side.value}
                            checked={sidePicked === side.value}
                            onChange={(e) => setSidePicked(e.currentTarget.value)}
                        >
                        </ToggleButton>
                    ))
                }
                </ButtonGroup>
        </Row>
        
        <br />
        <br />
        
        <Row xs={1} md={1}>
        <Button className='rounded-pill' onClick={handleClick} variant='outline-success'>
                    Let's Play!
                </Button>                    
        </Row>
    </Container>
    )
}

export default PickSidePage
