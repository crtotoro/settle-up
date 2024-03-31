import { AppProvider } from '../state/context/Context';
import Transactions from './Transactions';
import Inputs from './Inputs';
import Header from './Header';
import { Container } from 'react-bootstrap';

function App() {  
  return (
    <AppProvider>
      <Container className='m-3'>
        <Header />
        <Inputs />
        <Transactions />
      </Container>
    </AppProvider>
  )
}

export default App

/*
 * TODO:
 *    - Render transaction list for each category: Verify, Included, Excluded 
 *    - Manual transaction entry
 *    - Transaction controls:
 *      - Mass modify category
 *      - Mass modify payor
 *      - Mass modify split
 *      - Sorting
 *    - Input label text 1&2 drop to newline from 992-1200px 
 *    - Move init matchers into config file
 * STRETCH:
 *    - Transaction drag and drop for re-order and re-categorize
 *      - Add manual order state to make changes persistent across sorts/filters
 *
 * NOTES:
 *    
 */