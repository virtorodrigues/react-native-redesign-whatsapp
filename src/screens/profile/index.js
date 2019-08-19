import React, { Component } from 'react'

import { Tabs, ListItem, Thumbnail, List, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body, Button } from "native-base";

import styles from '../../style'

const persons = [
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
  { name: 'Angela', image: require('./foto1.jpeg'), hour: '10:35' },
]

export default class Profile extends Component {
  
  render() {
    const { navigation } = this.props

    return (
      <Container style={ styles.container }>
        <Header style={ styles.header }>          
          <Left>
            <Icon  onPress={ ()=>  navigation.navigate('Home') } name='arrowleft' type='AntDesign' style={[ styles.textHeader, { paddingRight: 10 } ]} />
          </Left>
          <Body>
            <Text style={{ fontSize: 20, color: '#fff' }}>Configurações</Text>
          </Body>
          <Right style={{ alignItems: 'center' }}>
            <Icon name='search' type='EvilIcons' style={[ styles.textHeader, { paddingRight: 10 } ]} />
            <Icon name='more-vert' type='MaterialIcons' style={ styles.textHeader } />
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem noIndent avatar style={{ paddingBottom: 20, borderBottomColor: '#d5d5d5', borderBottomWidth: 0.5 }} >
              <Left>
                <Thumbnail source={ require('./foto1.jpeg') } />
              </Left>              
              <Body style={{ borderBottomColor: '#fff' }}>
                <Text>Vitor Rodrigues</Text>
                <Text note>Disponível...</Text>
              </Body>
            </ListItem>
            <ListItem style={{ flex: 1, borderBottomColor: '#fff' }}>
              <Left style={{ flex: 1 }}>
                <Icon name='key' type='Entypo' style={{ color:'#128c7e', flex: 1, textAlign: 'center' }} />
              </Left>              
              <Body style={{ flex: 9}}>
                <Text>Conta</Text>
                <Text note>Privacidade, segurança, mudar número</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem style={{ flex: 1, borderBottomColor: '#fff' }}>
              <Left style={{ flex: 1 }}>
                <Icon name='comment-text' type='MaterialCommunityIcons' style={{ color:'#128c7e', flex: 1, textAlign: 'center' }} />
              </Left>              
              <Body style={{ flex: 9}}>
                <Text>Conversas</Text>
                <Text note>Backup, histórico, papel de parede</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem style={{ flex: 1, borderBottomColor: '#fff' }}>
              <Left style={{ flex: 1 }}>
                <Icon name='ios-notifications' type='Ionicons' style={{ color:'#128c7e', flex: 1, fontSize: 25, textAlign: 'center' }} />
              </Left>              
              <Body style={{ flex: 9}}>
                <Text>Notificações</Text>
                <Text note>Mensagem, toques de grupo e chamada</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem style={{ flex: 1, borderBottomColor: '#fff' }}>
              <Left style={{ flex: 1 }}>
                <Icon name='sync' type='AntDesign' style={{ flex: 1, color:'#128c7e', flex: 1, textAlign: 'center' }} />
              </Left>              
              <Body style={{ flex: 9}}>
                <Text>Uso de dados e armazenamento</Text>
                <Text note>Uso de rede, download automático</Text>
              </Body>
            </ListItem>
            <ListItem style={{ paddingBottom: 20, flex: 1, borderBottomColor: '#d5d5d5', borderBottomWidth: 0.5}}>
              <Left style={{ flex: 1 }}>
                <Icon name='ios-help-circle-outline' type='Ionicons' style={{ color:'#128c7e', flex: 1, fontSize: 25, textAlign: 'center'  }} />
              </Left>              
              <Body style={{ flex: 9 }}>
                <Text>Ajuda</Text>
                <Text note>FAQ, fale conosco, política de privacidade</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem last style={{ flex: 1 }}>
              <Left style={{ flex: 1 }}>
                <Icon name='people' type='MaterialIcons' style={{ color:'#128c7e', flex: 1, fontSize: 25, textAlign: 'center' }} />
              </Left>              
              <Body style={{ flex: 9}}>
                <Text>Convidar um amigo</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </Content>        
      </Container>
    )
  }
}