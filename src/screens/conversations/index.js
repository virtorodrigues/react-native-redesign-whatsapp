import React, { Component } from 'react'

import { Tabs, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body } from "native-base";

import styles from '../../style'

import { ConversationList } from '../../components/lists/conversations'
import { CallList } from '../../components/lists/calls'
import { StatusList } from '../../components/lists/status'

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

export default class Conversations extends Component { 
  render() {
    return (
      <Container style={ styles.container }>
        <Header style={ styles.header }>          
          <Left>
            <Text style={ styles.textHeader }>WhatsApp</Text>
          </Left>
          <Right>
            <Icon name='search' type='EvilIcons' style={[ styles.textHeader, { paddingRight: 10 } ]} />
            <Icon name='more-vert' type='MaterialIcons' style={ styles.textHeader } />
          </Right>
        </Header>
        <Content>
          <Tabs>
            <Tab activeTabStyle={{ flex: 1 }} tabStyle={ { flex: 1 } } heading={ <TabHeading style={ styles.header }><Icon style={{ fontSize: 20, textAlign: 'left' }} name="camera" /></TabHeading>}>
              <Text>Image</Text>
            </Tab>
            <Tab textStyle={{ color: '#fff' }} heading="Conversas" tabStyle={ styles.header } activeTabStyle={ styles.header }>
              <ConversationList persons={persons}/>
            </Tab>
            <Tab textStyle={{ color: '#fff' }} heading="Status" tabStyle={ styles.header } activeTabStyle={ styles.header }>
              <StatusList persons={persons}/>
            </Tab>
            <Tab textStyle={{ color: '#fff' }} heading="Chamadas" tabStyle={ styles.header } activeTabStyle={ styles.header }>
              <CallList persons={persons}/>
            </Tab>
          </Tabs>
        </Content>
          
        
      </Container>
    )
  }
}