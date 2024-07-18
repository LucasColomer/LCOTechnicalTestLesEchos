import './App.css';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import NewsLetterPage from './newsletter/NewsLetterPage';
import { useDispatch } from 'react-redux';
import { USER_WITHOUT_SUBSCRIPTION, USER_WITH_ONE_SUBSCRIPTION, USER_WITH_TWO_SUBSCRIPTIONS } from './users/MockUsers';
import { User } from './users/User';
import { setUser } from './users/UserSlice';


function App() {
  const dispatch = useDispatch();
 
  const changeUser = (user: User) => {
    dispatch(setUser(user));
  }

  return (
    <Box maxW="960px" mx="auto" paddingBlock={4}>
      <Menu>
        <MenuButton as={Button}>Debug Menu</MenuButton>
        <MenuList>
          <MenuItem onClick={() => changeUser(USER_WITHOUT_SUBSCRIPTION)}>
          User Without Subscription
          </MenuItem>
          <MenuItem onClick={() => changeUser(USER_WITH_ONE_SUBSCRIPTION)}>
          User With One Subscription
          </MenuItem>
          <MenuItem onClick={() => changeUser(USER_WITH_TWO_SUBSCRIPTIONS)}>
          User With Two Subscriptions
          </MenuItem>
        </MenuList>
      </Menu>
      <NewsLetterPage/>
    </Box>
  );
}

export default App;
