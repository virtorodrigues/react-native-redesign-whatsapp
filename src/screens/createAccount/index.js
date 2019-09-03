import React, { Component } from 'react'

import { 
  Button, 
  Body, 
  Form, 
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

import firebase from 'react-native-firebase'


export default class CreateAccount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
      email: '',
    }
  }

  _createAccount = () => {
      const { name, password, email } = this.state
      const { navigation } = this.props

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        firebase.firestore()
        .collection('users')
        .doc(user.user._user.uid)
        .set({
          name,
          password,
          email
        })
        .then(() => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => navigation.navigate('Home') )
          .catch(() => console.log('deu ruim no logar'))
        })
        .catch(() => console.log('deu ruim adicionar'))
      })
      .catch(() => {
        console.log('deu ruim auth')
      })      
  }

  render() {
    const { navigation } = this.props
    return (
      <Container style={ styles.container }>
        <Header style={ styles.header }>          
          <Left>
            <Icon  onPress={ ()=>  navigation.navigate('Login') } name='arrowleft' type='AntDesign' style={[ styles.textHeader, { paddingRight: 10 } ]} />
          </Left>
          <Body>
            <Text style={{ fontSize: 20, color: '#fff' }}>Criar conta</Text>
          </Body>
          <Right />
        </Header>
        <Content style={{ padding: 20 }}>
          
          <Form style={{ padding: 20, justifyContent: 'center' }}>
            <Item floatingLabel style={{ borderColor: '#075E54' }}>
              <Label>Seu email...</Label>
              <Input defaultValue={ this.state.email } onChangeText={ (email) => this.setState({ email })}/>
            </Item>
            <Item floatingLabel style={{ borderColor: '#075E54' }}>
              <Label>Seu nome...</Label>
              <Input defaultValue={ this.state.name } onChangeText={ (name) => this.setState({ name })}/>
            </Item>
            <Item floatingLabel style={{ borderColor: '#075E54' }}>
              <Label>Uma nova senha...</Label>
              <Input password defaultValue={ this.state.napasswordme } onChangeText={ (password) => this.setState({ password })}/>
            </Item>
            <Button onPress={ () => this._createAccount() } style={{ marginTop: 50, backgroundColor: '#075E54' }} rounded block>
              <Text>Criar</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
