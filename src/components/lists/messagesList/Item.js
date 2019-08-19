import React, { Component } from 'react'

import { Thumbnail, ListItem, Tabs, TabHeading, Tab, Container, Header, Content, Icon, Accordion, Text, View, Right, Left, Body } from "native-base";

export default Item = ({ message }) => (
  <View>
    <Text>{ message.message } </Text>
  </View>
)