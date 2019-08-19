import React, { Component } from 'react'

import { Thumbnail, ListItem, Tabs, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body } from "native-base";

export default Item = ({name, hour, image}) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={ image } />
    </Left>              
    <Body>
      <Text>{ name } </Text>
      <Text note>{ hour } </Text>
    </Body>
    <Right />
  </ListItem>
)