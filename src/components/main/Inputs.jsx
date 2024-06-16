import React, { useRef } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UploadFile from './UploadFile'
import Participants from './Participants'
import LaunchSettings from '../settings/LaunchSettings'
import { useApp } from '../../state/context/Context'

export default function () {
  const { transactions } = useApp();
  const exportLinkRef = useRef(null);

  const filterTransactions = (data) => {
    return data.filter(transaction => ['verify', 'include'].includes(transaction['status'])).sort((a,b) => {
      const [monthA, dayA, yearA] = a["Post Date"].split("/").map(Number);
      const [monthB, dayB, yearB] = b["Post Date"].split("/").map(Number);

      if (yearA !== yearB) return yearA - yearB;
      if (monthA !== monthB) return monthA - monthB;
      return dayA - dayB;
    });
  }

  const arrayToCSV = (data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]));
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    exportLinkRef.current.href = url;
    exportLinkRef.current.download = filename;
    exportLinkRef.current.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    const filteredTransactions = filterTransactions(transactions);
    const csv = arrayToCSV(filteredTransactions);
    const filename = `settle-up_${new Date().toISOString().slice(0, 10)}.csv`;
    downloadCSV(csv, filename);
  }

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
      <Row>
        <Col>
          <Button variant='primary' onClick={handleExport}>Export</Button>
          <a ref={exportLinkRef} style={{ display: 'none' }}>Download</a>
        </Col>
      </Row>
    </Container>
  )
}
