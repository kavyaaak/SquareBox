
import React, { Component } from 'react';
 
import { StyleSheet, View, Button,Text } from 'react-native';
 
export default class MyProject extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      ColorHolder : '#00BCD4',
     
 
    }
  }
 
ChangeColor=()=>
{
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
this.setState({
 
  ColorHolder : ColorCode,
})
// if(count< 5){
//   <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/>
// }
}
 
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#141313'}}>
            <View style={{flex:0.1,backgroundColor:'#8f8b8b',alignItems:'center'}}>
                <Text style={{alignSelf:'center',marginTop:25,fontSize:18,color:'brown'}}>RANDOM COLORS</Text></View>
         <View style={{flexDirection:'row'}}>
         {/* {/* <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/> */}
         <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/> 
     </View>
      <View style={{position:'absolute',top:600,alignSelf:'center',width:80}} >
      {/* <View style={{ backgroundColor: this.state.ColorHolder,width:25,height:25,marginLeft:10}}></View> */}
       <Button  title="ADD" onPress={this.ChangeColor}/>
        
      </View>
 </View>
    );
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
 
});