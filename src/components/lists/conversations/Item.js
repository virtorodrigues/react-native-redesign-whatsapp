import React, { Component } from 'react'

import { Thumbnail, ListItem, Tabs, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body } from "native-base";

export default Item = ({name, hour, image, navigation, otherPerson}) => (
  
  <ListItem avatar onPress={() => navigation.navigate('Messages', otherPerson={ otherPerson })}>
    <Left>
      <Thumbnail source={ image } />
    </Left>              
    <Body>
      <Text>{ name } </Text>
      <Text note>{ name } </Text>
    </Body>
    <Right style={{ justifyContent: 'center' }}>
      <Text note>{ hour }</Text>
    </Right>
  </ListItem>
)