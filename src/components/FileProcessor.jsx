import React, { useEffect, useRef, useState } from 'react'
import { InputGroup, Button, Form, Stack } from 'react-bootstrap';
import Papa from 'papaparse';
import moment from 'moment';
import { isAfterGivenDate, isMatch } from '../utils/helpers';
import { signal } from '@preact/signals-react';


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

export const file = signal(null);

export default function FileProcessor() {
  const [ matchers, setMatchers ] = useState({ confirmed: [...initConfirmed], pending: [...initPending], exclude: [] });
  const [ config, setConfig ] = useState({ excludeColumns: [...initExcludeColumns] })
  const [ dates, setDates ] = useState({ start: '', end: '' });
  const [inputFiles, setInputFiles] = useState(null);
  const fileInputRef = useRef(null)


  const handleDateChange = e => setDates(currentDates => { 
    return { ...currentDates, [e.target.name]: e.target.value }
  });

  const handleUpload = () => {
    if(inputFiles && inputFiles.length) {
      file.value = inputFiles[0];
      setInputFiles(null);
      fileInputRef.current.value = "";
    }
  }
 
  /* Temporary Logging */
  useEffect(() => {inputFiles && console.log("File ready for upload:", inputFiles[0].name)}, [inputFiles])
  file.value && console.log("File uploaded:", file.value.name);
  useEffect(() => {dates.start ? console.log("Start date applied:", dates.start) : console.log("Start date removed.")}, [dates.start])
  useEffect(() => {dates.end ? console.log("End date applied:", dates.end) : console.log("End date removed.")}, [dates.end])
  /* Temporary Logging */

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="statementCsv" >
          <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
          <InputGroup>
            <Form.Control ref={fileInputRef} type='file' onChange={(e) => setInputFiles(e.target.files)} />
            {inputFiles && inputFiles.length ? <Button variant='primary' onClick={handleUpload}>Upload</Button> : <Button variant='outline-secondary' disabled>Upload</Button>}
          </InputGroup>
          <Form.Text className='text-muted'>.csv format only</Form.Text>
        </Form.Group>
        <Form.Group id="date-range" >
          <Form.Label><b>Step 2.</b> Choose start and end date </Form.Label>
          <Stack direction='horizontal' gap={3}>
            <Stack>
              <Form.Control id="start-date" type="date" value={dates.start} name="start" onChange={handleDateChange} />
              <Form.Text className="text-muted p2" >Start Date</Form.Text>
            </Stack>
            <Stack>
              <Form.Control id="end-date" type="date" values={dates.end} name="end" onChange={handleDateChange} />
              <Form.Text className="text-muted p2">End Date</Form.Text>
            </Stack>
          </Stack>
        </Form.Group>
      </Stack>
    </>
  )
}
