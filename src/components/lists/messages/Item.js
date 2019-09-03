import React, { Component } from 'react'

import { Text, View } from 'native-base'

export default Item = ({ message }) => (
  <View>
    <Text>{ message.message } </Text>
  </View>
)