import './App.css';
import {
  Box,
} from '@chakra-ui/react';
import NewsLetterPage from './newsletter/NewsLetterPage';
import { MockNewsLetters } from './newsletter/models/MockNewsLetters';


function App() {
  return (
    <Box maxW="960px" mx="auto" paddingTop={4}>
      <NewsLetterPage newsLetters={MockNewsLetters}/>
    </Box>
  );
}

export default App;
