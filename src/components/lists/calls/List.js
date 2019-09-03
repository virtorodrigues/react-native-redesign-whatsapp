import React, { Component } from 'react'

import { List } from 'native-base'

import Item from './Item'

export default CallList = ({persons}) => {
  return(
    <List>
      { persons.map((person) => 
          <Item 
            name={ person.data().name } 
            image={ person.data().image } 
            hour={ person.data().hour } /> )}
    </List>
  )
}