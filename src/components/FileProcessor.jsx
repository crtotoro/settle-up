import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Papa from 'papaparse';
import moment from 'moment';
import { isAfterGivenDate, isMatch } from '../utils/helpers';


const initConfirmed = [
  'netflix', 
'hulu',
'orkin  llc', 
'town of normal', 
'utility', 
'frs decatur', 
'sams scan-n-go', 
'nicor gas', 
'peacock', 
'paramount', 
'prime video', 
'lg cns',
'prairie oak',
'amazon digit',
'chewy'
];
const initPending = [
  'amazon.com', 
  'menards', 
  'home depot', 
  'apple', 
  'american air', 
  'lowes', 
  'amzn mktp',
  'red raccoon'
];
const initExcludeColumns = ["Post Date", "Category", "Type", "Memo"];

export default function FileProcessor() {
  const [ matchers, setMatchers ] = useState({ confirmed: [...initConfirmed], pending: [...initPending], exclude: [] });
  const [ config, setConfig ] = useState({ excludeColumns: [...initExcludeColumns] })
  const [ dates, setDates ] = useState({ start: '', end: '' });
  const [ inputFile, setInputFile ] = useState('');


  const handleDateChange = e => setDates(currentDates => { 
    return { ...currentDates, [e.target.name]: e.target.value }
  });

  const handleFileChange = e => e.target.files && setInputFile(e.target.files[0]);
 

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="statementCsv" >
          <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
          <Form.Text className='text-muted'>.csv format only</Form.Text>
        </Form.Group>
        <Form.Group controlId="dateRange" >
          <Form.Label><b>Step 2.</b> Choose start and end date </Form.Label>
          <Stack direction='horizontal' gap={3}>
            <Stack>
              <Form.Control type="date" value={dates.start} name="start" onChange={handleDateChange} />
              <Form.Text className="text-muted p2" >Start Date</Form.Text>
            </Stack>
            <Stack>
              <Form.Control type="date" values={dates.end} name="end" onChange={handleDateChange} />
              <Form.Text className="text-muted p2">End Date</Form.Text>
            </Stack>
          </Stack>
        </Form.Group>
      </Stack>
    </>
  )
}
