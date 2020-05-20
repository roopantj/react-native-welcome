import React from 'react';
import {Text,View} from 'react-native';
const PresentationalComp=({updateState, myState })=>{
  return(
    <View>
      <Text onPress={()=>updateState('This is tj')}>
        {myState}
      </Text>
    </View>
  )
}
export default PresentationalComp