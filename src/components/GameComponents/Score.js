import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
const Score = ({ curr, player1, player2, player1Mark, player2Mark, p1score, p2score}) => {
    return (
        <Container className='shadow mt-3 mt-md-3 justify-content-center'>
            <Row>
                <Col className='text-center'>
                    <h5 className={curr === "0" ? 'current-player' : ''}>{player1}: {player1Mark} </h5>
                </Col>
                <Col className='text-center round-corner pt-2'>
                    <h5>{p1score} - {p2score}</h5>
                </Col>
                <Col className='text-center'>
                    <h5 className={curr === "1" ? 'current-player' : ''}>{player2}: {player2Mark}</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Score
