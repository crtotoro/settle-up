import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UploadFile from './UploadFile'
import Participants from './Participants'
import LaunchSettings from '../settings/LaunchSettings'

export default function () {
  return (
    <Container fluid className='inputs-container'>
      <Row>
        <Col lg={4}>
          <UploadFile />
        </Col>
        <Col lg={5}>
          <Participants />
        </Col>
        <Col lg={3}>
          <LaunchSettings />
        </Col>
      </Row>
    </Container>
  )
}
