import React, { useState } from 'react'
import XMark from '../../components/Marks/XMark';
import OMark from '../../components/Marks/OMark';
import { Row, Col, Container} from 'react-bootstrap';

const PickSidePage = ({history}) => {

    const [sidePicked, setSidePicked] = useState('0');
    const sides = [
        { name: 'X', value: '0' },
        { name: 'O', value: '1' },
    ];

    const handleClick = () => {
        history.push(`/play/${sidePicked}`);
    }
    
    return (
        <Container 
            data-aos="fade-left"
            data-aos-delay="600"
            className='div-center justify-content-center'>
        
        <Row xs={1} md={1} className='pb-4'>
            <h6 style={{fontWeight: 'bold'}}>
                Pick Your Side
            </h6>
        </Row>
        
        <Row xs={2} md={2}>
            <Col xs={6} md={6}>
                <XMark />
            </Col>
            <Col xs={6} md={6}>
                <OMark />
            </Col>
        </Row>
        <br />
        <Row xs={1} md={1}>
            {
                sides.map((side, idx) => (
                    <Col xs={6} md={6}>
                    <input className='radio-custom' 
                            key={idx}
                            type='radio'
                            value={side.value}
                            checked={sidePicked === side.value}
                            onChange={(e) => setSidePicked(e.currentTarget.value)}>       
                    </input>
                    </Col>
                ))
            }  
        </Row>
        
        <br />
        <div className='py-3 py-md-2 justify-content-center align-items-center'>
                <button onClick={handleClick} className='mode-btn'>
                    Continue
                </button>
        </div>
    </Container>
    )
}

export default PickSidePage
