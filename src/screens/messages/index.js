import React, { Component } from 'react'

import { 
  View, 
  Spinner, 
  Button, 
  Body, 
  Item, 
  Input, 
  Container, 
  Header, 
  Content, 
  Icon, 
  Text, 
  Right, 
  Left, 
  Label 
} from 'native-base'

import styles from '../../style'

import { MessagesList } from '../../components/lists/messages'

import firebase from 'react-native-firebase'

export default class Messages extends Component {

  constructor (props) {
    super(props)
    const { navigation } = this.props
    this.state = {
      messages: null,
      email: '',
      password: '',
      loading: false,
      message: '',
      otherPersonId: navigation.getParam('otherPerson')
    }
  }

  async componentDidMount () {
    await this._getMessages()
  }

  _createMessage = () => {
    const { message, messages, otherPersonId } = this.state

    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes

    if(hours < 10)
      hours='0'+hours
    
    if(min < 10)
      min='0'+min

    firebase.database().ref('messages/'+ firebase.auth()._user.uid+ '/' +otherPersonId).push({
      message,
      myMessage: true,
      date: hours+':'+min
    }).then((data)=>{
      firebase.database().ref('messages/'+ otherPersonId + '/' + firebase.auth()._user.uid).push({
        message,
        myMessage: false,
        date: hours+':'+min
      }).then((data)=>{
        this._getMessages()
      }).catch((error)=>{
      })
    }).catch((error)=>{
    })
  }

  _getMessages = async () => {
    const { otherPersonId } = this.state

    firebase.database().ref('messages/'+ firebase.auth()._user.uid+ '/' +otherPersonId).on('value',  (snapshot) => {
      let messagesAtt = []
      snapshot.forEach(child => {
        messagesAtt.push({
          message: child.val().message,
          myMessage: child.val().myMessage,
          date: child.val().date,
        })
      })
      this.setState({ messages: messagesAtt })
    })
    
  }

  render() {
    const { navigation } = this.props
    const { 
      loading, 
      messages, 
      message 
    } = this.state

    return (
      <Container style={ styles.container }>
         <Header style={ styles.header }>          
          <Left>
            <Icon onPress={ ()=>  navigation.navigate('Home') } name='arrowleft' type='AntDesign' style={[ styles.textHeader, { paddingRight: 10 } ]} />
          </Left>
          <Body>
            <Text style={{ fontSize: 20, color: '#fff' }}>Mensagens</Text>
          </Body>
          <Right style={{ alignItems: 'center' }}>
            <Icon name='search' type='EvilIcons' style={[ styles.textHeader, { paddingRight: 10 } ]} />
            <Icon name='more-vert' type='MaterialIcons' style={ styles.textHeader } />
          </Right>
        </Header>

        <Content style={{ padding: 20, alignContent: 'center', flex: 1 }}>
          { loading && 
            <Spinner color='#075E54' />
            || (
            
            <View style={{ flexDirection: 'column', flex: 1 }}>
              { messages && <MessagesList messages={ messages } /> }
               
              <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', paddingBottom: 40, paddingTop: 40  }}>
                <Item floatingLabel style={{ flex: 8, borderColor: '#075E54' }}>
                  <Label>Mensagem</Label>
                  <Input defaultValue={ message } onChangeText={ (message) => this.setState({ message })} />
                </Item>
                
                <Button  
                  onPress={ () => this._createMessage() } 
                  style={{ 
                    flex: 3,
                    borderColor: '#075E54' 
                  }} bordered rounded block>
                  <Text style={{ color: '#075E54' }}>Enviar</Text>
                </Button>
              </View>
            </View>
          ) }
        </Content>
      </Container>
    )
  }
}
