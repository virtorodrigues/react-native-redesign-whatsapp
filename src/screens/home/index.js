import React, { Component } from 'react'

import { Tabs, TabHeading, Tab, Container, Header, Content, Icon, Text, Right, Left } from 'native-base'

import styles from '../../style'

import { ConversationList } from '../../components/lists/conversations'
import { CallList } from '../../components/lists/calls'
import { StatusList } from '../../components/lists/status'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'

import firebase from 'react-native-firebase'

// const persons = [
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
//   { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
// ]



export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: firebase.auth(),
      persons: null
    }
  }

  componentDidMount() {
    this.firestore = firebase.firestore()
      .collection('users')
      // .doc(props.userId)
      // .collection('farms')
      // .where('dasda')
      .get()
      .then((snapshot)=> this.setState({ persons: snapshot.docs }))
      .catch(()=> console.log('foi'))
  }

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  _logout = () => {
  //   firebase.database().ref('Users/').on('value', function (snapshot) {
  //     console.log(snapshot.val())
  // });
  //   firebase.database().ref('Users/').push({
  //     email: 'aaaa',
     
  // }).then((data)=>{
  //     //success callback
  //     console.log('data ' , data)
  // }).catch((error)=>{
  //     //error callback
  //     console.log('error ' , error)
  // })
    const { navigation } = this.props
    console.log('bbbbbbbbbbbbbbbb')
    firebase.auth().signOut()
    .then(() => navigation.navigate('Login'))
    .catch(() => console.log('nao saiu mesmo'))
  }

  render() {
    const { navigation } = this.props
    const { persons } = this.state

    return (
      <Container style={ styles.container }>
        <Header androidStatusBarColor='#075E54' style={ styles.header }>          
          <Left>
            <Text style={ styles.textHeader }>Whatsapp</Text>
          </Left>
          <Right style={{ alignItems: 'center' }}>
            <Icon name='search' type='EvilIcons' style={ styles.textHeader } />
            <Menu
              ref={this.setMenuRef}
              button={ <Icon name='more-vert' onPress={this.showMenu} type='MaterialIcons' style={[{ paddingLeft: 10 }, styles.textHeader ]} /> }>
              <MenuItem onPress={() => navigation.navigate('Profile')}>Configurações</MenuItem>            
              <MenuDivider />
              <MenuItem onPress={() => this._logout()}>Sair</MenuItem>
            </Menu>
          </Right>
        </Header>
        <Content>
          <Tabs>
            <Tab textStyle={{ color: '#fff' }} heading="Conversas" tabStyle={ styles.header } activeTabStyle={ styles.header }>
              { persons && <ConversationList  navigation={ navigation } persons={ persons }/> }
            </Tab>
            <Tab textStyle={{ color: '#fff' }} heading="Status" tabStyle={ styles.header } activeTabStyle={ styles.header }>
            { persons && <StatusList persons={ persons }/> }
            </Tab>
            <Tab textStyle={{ color: '#fff' }} heading="Chamadas" tabStyle={ styles.header } activeTabStyle={ styles.header }>
              { persons && <CallList persons={ persons }/> }
            </Tab>
          </Tabs>
        </Content>        
      </Container>
    )
  }
}