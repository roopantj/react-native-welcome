import React from 'react';
import {Text,View} from 'react-native';
const ComponentTwo=({number })=>{
const findOddEven=(numb)=>(numb%2==0) ? 'it is even' :'it is odd';
  return(

    <View>
      <Text >
        {number}
        {(number%2==0) ? 'it is even' :'it is odd'}
      </Text>
    </View>
  )
}
export default ComponentTwo