import React, { Component } from 'react'

import { List, ListItem, Tabs, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body } from "native-base";

import Item from './Item'

export default ConversationList = ({persons, navigation}) => {
  return(
    <List>
      { persons.map((person) => <Item otherPerson={ person.id } navigation={ navigation } name={ person.data().name } image={ person.data().image } hour={ person.data().hour } /> ) }
    </List>
  )
}