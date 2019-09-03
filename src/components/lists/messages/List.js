import React, { Component } from 'react'

import { FlatList, Dimensions } from 'react-native'

import { Text, View } from 'native-base'

export default MessagesList = ({ messages }) => {
  const { width } = Dimensions.get('window')
  renderItem = ({ item }) => (
    item.myMessage && 
    ( <View style={{ 
        padding: 20, 
        backgroundColor: '#77dd77', 
        alignSelf: 'flex-end', 
        marginTop: 5, 
        width: width*0.7, 
        flex: 1, 
        flexDirection: 'row', 
        borderRadius: 10 
      }}>
        <Text style={{ flex: 1, textAlign: 'left' }}>{item.message}</Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>{item.date}</Text>
      </View>) ||
    (
      <View style={{ 
        padding: 20,
        backgroundColor: '#fdfd96',
        marginTop: 5,
        width: width*0.7,
        flexDirection: 'row',
        borderRadius: 10
      }}>
        <Text style={{ flex: 1, textAlign: 'left' }}>{item.message}</Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>{item.date}</Text>
      </View>
    )
  )
  return(
    <FlatList
      scrollEnabled
      initialNumToRender={ 3 }
      data={ messages }
      renderItem={this.renderItem}
      keyExtractor={item => item.id}
    />
  )
}