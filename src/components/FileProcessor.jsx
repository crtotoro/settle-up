import React, { useEffect, useRef, useState } from 'react'
import { InputGroup, Button, Form, Stack, Col } from 'react-bootstrap';
import Papa from 'papaparse';
import moment from 'moment';
import { isAfterGivenDate, isMatch } from '../utils/helpers';
import { useApp } from '../state/context/Context';



const initExcludeColumns = ["Post Date", "Category", "Type", "Memo"];


export default function FileProcessor() {
  const { setTransactions } = useApp();

  const [inputFiles, setInputFiles] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

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

  /* Temporary Logging */
  useEffect(() => {inputFiles && console.log("File ready for upload:", inputFiles[0].name)}, [inputFiles])
  useEffect(() => {file && console.log("File uploaded:", file.name)},[file]);

  return (
    <Form.Group controlId='statement-csv' className='py-3'>
      <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
      <InputGroup >
        <Form.Control ref={fileInputRef} type='file' accept='.csv, text/csv' onChange={(e) => setInputFiles(e.target.files)} />
        {inputFiles && inputFiles.length ? <Button variant='primary' onClick={handleUpload}>Upload</Button> : <Button variant='outline-secondary' disabled>Upload</Button>}
      </InputGroup>
    </Form.Group>
  )
}
