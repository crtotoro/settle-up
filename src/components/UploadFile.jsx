import React, { useRef, useState } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap';
import moment from 'moment';
import { useApp } from '../state/context/Context';
import useFileParser from '../hooks/useFileParser';

export default function UploadFile() {
  const { participants, setParticipants, isLoading, setIsLoading } = useApp();
  const [inputFiles, setInputFiles] = useState(null);
  const { setFileToParse }  = useFileParser();
  const fileInputRef = useRef(null);
  
  const getOrDefaultParticipant = () => {
    return Object.keys(participants) // for key in participants (p1 and p2) 
      .reduce((acc, key) => 
        participants[key]  // if the value is isn't empty
        ? { ...acc, [key]: participants[key] }  // keep the value
        : { ...acc, [key]: `Participant ${key[1]}` }, {}) // else assign default value of Participant 1 or 2
  }

  const handleUpload = () => {
    if(inputFiles && inputFiles.length) {
      setIsLoading(true);
      setParticipants(getOrDefaultParticipant());
      setFileToParse(inputFiles[0]);
      setInputFiles(null);
      fileInputRef.current.value = "";
    }
  } 

  return (
    <Form.Group controlId='statement-csv' className='py-3'>
      <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
      <InputGroup >
        <Form.Control 
          ref={fileInputRef} 
          type='file' 
          accept='.csv, text/csv' 
          onChange={(e) => setInputFiles(e.target.files)} 
        />
        {!isLoading && inputFiles && inputFiles.length 
          ? <Button variant='primary' onClick={handleUpload}>Upload</Button> 
          : (isLoading 
            ? <Button variant='outline-secondary' disabled>Processing...</Button>
            : <Button variant='outline-secondary' disabled>Upload</Button>)}
      </InputGroup>
    </Form.Group>
  )
}
