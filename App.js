import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComp from './PresentationalComp';
import ComponentTwo from './ComponentTwo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={myState:'Everyone hi', myStateTwo: 'Who is this', data:''}
  }

  a=(data)=>{this.setState({myState:'Hi everyone', data:data})}
  updateStateTwo=(data)=>this.setState({myStateTwo: data})

  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.data}</Text>
        <PresentationalComp myState={this.state.myState} updateState={this.a} />

        <PresentationalComp myState={this.state.myStateTwo} updateState={this.updateStateTwo} />
        <ComponentTwo number={10}  />
        <ComponentTwo number={11}  />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;


