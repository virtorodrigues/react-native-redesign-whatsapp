import React, { Component } from 'react'

import { 
  Spinner, 
  Button, 
  Body, 
  Form, 
  Item, 
  Input, 
  Container,
  Header,
  Content, 
  Text, 
  Label 
} from 'native-base'

import styles from '../../style'

import firebase from 'react-native-firebase'

export default class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  componentDidMount () {
    const { navigation } = this.props
    firebase.auth()._user && navigation.navigate('Home')
  }

  _login = () => {
    const { email, password } = this.state
    const { navigation } = this.props
    this.setState({ loading: true })

    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {    
      this.setState({ loading: false })      
      navigation.navigate('Home')
    })
    .catch(() => console.log('deu ruim no logar'))
  }

  render() {
    const { navigation } = this.props
    const { loading } = this.state

    return (
      <Container style={ styles.container }>
        <Header androidStatusBarColor='#075E54' style={ styles.header }>          
          <Body style={{ }}>
            <Text style={{ alignSelf: 'center', textAlign: 'center', color: '#fff', fontSize: 20 }}>WhatsApp</Text>
          </Body>
        </Header>
        <Content style={{ padding: 20, alignContent: 'center' }}>
          { loading && (
            <Spinner color='#075E54' />
          ) || (
            <Form style={{ padding: 20, justifyContent: 'center' }}>
              <Item floatingLabel style={{ borderColor: '#075E54' }}>
                <Label>Username</Label>
                <Input defaultValue={ this.state.email } onChangeText={ (email) => this.setState({ email })} />
              </Item>
              <Item floatingLabel style={{ borderColor: '#075E54' }}>
                <Label>Senha</Label>
                <Input defaultValue={ this.state.password } onChangeText={ (password) => this.setState({ password })} />
              </Item>
              <Button onPress={ () => this._login()}  style={{ marginTop: 50, backgroundColor: '#075E54' }} rounded block>
                <Text>Entrar</Text>
              </Button>
              <Button  
                onPress={ () => navigation.navigate('CreateAccount') } 
                style={{ 
                  marginTop: 10,
                  borderColor: '#075E54' 
                }} bordered rounded block>
                <Text style={{ color: '#075E54' }}>Criar uma conta</Text>
              </Button>
            </Form>
          ) }
        </Content>
      </Container>
    )
  }
}
