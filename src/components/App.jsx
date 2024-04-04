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
 *    - Handle other matchers (min amount and dates)
 *    - add control to hide categories (toggle isCategorized)
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