import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
const Score = ({ curr, player1, player2, player1Mark, player2Mark, p1score, p2score}) => {
    return (
        <Container className='mt-3 mt-md-3 justify-content-center'>
            <Row>
                <Col className='text-center'>
                    <h5 className={curr === "0" ? 'current-player' : ''}>{player1} </h5>
                </Col>
                <Col className='text-center shadow pt-2'>
                    <h5>{p1score} - {p2score}</h5>
                </Col>
                <Col className='text-center'>
                    <h5 className={curr === "1" ? 'current-player' : ''}>{player2}</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Score
