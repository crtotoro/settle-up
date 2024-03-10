import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function App() {
  

  return (
    <>
      <h1>Settle Up</h1>
      <p>Split finances made easy</p>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="statementCsv" >
          <Form.Label><b>Step 1.</b> Upload your credit card statement</Form.Label>
          <Form.Control type="file" />
          <Form.Text className='text-muted'>.csv format only</Form.Text>
        </Form.Group>
        <Form.Group controlId="dateRange" >
          <Form.Label><b>Step 2.</b> Choose start and end date </Form.Label>
          <Stack direction='horizontal' gap={3}>
            <Stack>
              <Form.Control controlId="startDate" type="date" />
              <Form.Text className="text-muted p2" >Start Date</Form.Text>
            </Stack>
            <Stack>
              <Form.Control controlId="endDate" type="date" />
              <Form.Text className="text-muted p2">End Date</Form.Text>
            </Stack>
          </Stack>
        </Form.Group>

      </Stack>

    </>
  )
}

export default App
