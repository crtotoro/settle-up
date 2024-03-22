import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [inputFiles, setInputFiles] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null)

  const handleUpload = () => {
    if(inputFiles && inputFiles.length) {
      setFile(inputFiles[0]);
      setInputFiles(null);
      fileInputRef.current.value = "";
    }
    
  }

  useEffect(() => {inputFiles && console.log("File ready for upload:", inputFiles[0].name)}, [inputFiles])
  useEffect(() => {file && console.log("File uploaded:", file.name)}, [file])

  return (
    <div className='m-3'>
      <h1>Settle Up</h1>
      <p>Split finances made easy</p>
      <Stack direction='horizontal' gap={3}>
        <Form.Group >
          <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
          <InputGroup>
            <Form.Control ref={fileInputRef} type='file' onChange={(e) => setInputFiles(e.target.files)} />
            {inputFiles && inputFiles.length ? <Button variant='primary' onClick={handleUpload}>Upload</Button> : <Button variant='outline-secondary' disabled>Upload</Button>}
          </InputGroup>
          <Form.Text className='text-muted'>.csv format only</Form.Text>
        </Form.Group>
        <Form.Group id='date-range'>
          <Form.Label><b>Step 2.</b> Choose start and end date </Form.Label>
          <Stack direction='horizontal' gap={3}>
            <Stack>
              <Form.Control id='start-date' type='date'/>
              <Form.Text className='text-muted p2' >Start Date</Form.Text>
            </Stack>
            <Stack>
              <Form.Control id='end-date' type='date' />
              <Form.Text className='text-muted p2'>End Date</Form.Text>
            </Stack>
          </Stack>
        </Form.Group>

      </Stack>

    </div>
  )
}

export default App
