import React, { useEffect, useRef, useState } from 'react'
import { InputGroup, Button, Form, Stack } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
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


export default function FileProcessor({ setTransactions }) {
  const [ matchers, setMatchers ] = useState({ confirmed: [...initConfirmed], pending: [...initPending], exclude: [] });
  const [ config, setConfig ] = useState({ excludeColumns: [...initExcludeColumns] })
  const [ dates, setDates ] = useState({ start: '', end: '' });
  const [inputFiles, setInputFiles] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);


  const handleDateChange = e => setDates(currentDates => { 
    return { ...currentDates, [e.target.name]: e.target.value }
  });

  const handleUpload = () => {
    if(inputFiles && inputFiles.length) {
      setFile(inputFiles[0]);
      setInputFiles(null);
      fileInputRef.current.value = "";
    }
  }

  useEffect(() => {
    if(file) {
      Papa.parse(file, {
        header: true,
        complete: function(results) {
          setTransactions(results.data);
        },
        error: function(err) {
          console.error("Parse error:", err);
        }
      });
    }
  },[file]);

  /* Tooltips*/
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

 
  /* Temporary Logging */
  useEffect(() => {inputFiles && console.log("File ready for upload:", inputFiles[0].name)}, [inputFiles])
  useEffect(() => {file && console.log("File uploaded:", file.name)},[file]);
  useEffect(() => {dates.start ? console.log("Start date applied:", dates.start) : console.log("Start date removed.")}, [dates.start])
  useEffect(() => {dates.end ? console.log("End date applied:", dates.end) : console.log("End date removed.")}, [dates.end])
  /* Temporary Logging */

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="statementCsv" >
          <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
          <InputGroup>
            <Form.Control ref={fileInputRef} type='file' accept='.csv, text/csv' onChange={(e) => setInputFiles(e.target.files)} />
            {inputFiles && inputFiles.length ? <Button variant='primary' onClick={handleUpload}>Upload</Button> : <Button variant='outline-secondary' disabled>Upload</Button>}
          </InputGroup>
        </Form.Group>
        <Form.Group id="date-range" >
          <Form.Label><b>Step 2.</b> Choose start and end date </Form.Label>
          <Stack direction='horizontal' gap={3}>
            <Form.Control id="start-date" type="date" value={dates.start} name="start" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Start Date"/>
            <Form.Control id="end-date" type="date" value={dates.end} name="end" onChange={handleDateChange} data-bs-toggle="tooltip" data-bs-placement="bottom" title="End Date"/>
          </Stack>
        </Form.Group>
      </Stack>
    </>
  )
}
