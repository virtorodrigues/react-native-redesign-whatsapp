
import Home from '../screens/home'
import Profile from '../screens/profile'
import Login from '../screens/login'
import CreateAccount from '../screens/createAccount'
import Messages from '../screens/messages'

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const Routes = createSwitchNavigator({
    Login: Login,
    CreateAccount: CreateAccount,
    Home: Home,
    Profile: Profile,
    Messages: Messages,
});
export default createAppContainer(Routes)