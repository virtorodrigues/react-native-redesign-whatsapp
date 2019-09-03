import React from 'react'

import { 
  Thumbnail, 
  ListItem, 
  Icon, 
  Text, 
  Right, 
  Left, 
  Body 
} from 'native-base'

export default Item = ({
  name, 
  hour, 
  image
}) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={ image } />
    </Left>              
    <Body>
      <Text>{ name } </Text>
      <Text note>{ hour } </Text>
    </Body>
    <Right>
      <Icon name='search' type='EvilIcons'  />
    </Right>
  </ListItem> )