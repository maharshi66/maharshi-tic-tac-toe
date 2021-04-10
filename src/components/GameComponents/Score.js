import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
const Score = ({ curr, player1, player2, p1score, p2score}) => {
    return (
        <Container className='mt-5 mt-md-5 justify-content-center'>
            <Row>
                <Col className='text-center'>
                    <h7 className={curr === "0" ? 'current-player' : ''}>{player1}</h7>
                </Col>
                <Col className='text-center round-corner'>
                    <h7>{p1score} - {p2score}</h7>
                </Col>
                <Col className='text-center'>
                    <h7 className={curr === "1" ? 'current-player' : ''}>{player2}</h7>
                </Col>
            </Row>
        </Container>
    )
}

export default Score
