// import React from 'react'
// import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

// export default class screen extends React.Component {

//      state = {
//         showMessage: false,
//         arrat:[]
//        };
//       onButtonClickHandler = () => {
//           this.setState({ showMessage:false });
//           var arr= ['hi','hii','hiii','hiiii','hiiii']
//           var newArr=[]
//           for(i=arr[0];i<=arr[5];i++){
//               newArr.push(arr[i])
//           }
//           alert(newArr);
//         //  <View style={{width: 100,height: 100,backgroundColor:'red',flexDirection:'row'}}>
//         //                           <Text style={{color:'black'}}>hello</Text>
//         //  </View>
//       };

//     render() {
//         return(
//             <View >
//                   {this.state.showMessage &&  
//                   <View style={{width: 10,height: 10,backgroundColor:'red',marginTop:10,marginLeft:10}}>
//                      {/* <Text style={{color:'black'}}>hello</Text> */}
//                      </View>} 
//                 <View style={{backgroundColor:'blue',position:'absolute',top:750,alignSelf:'center'}}>
//                  <TouchableOpacity onPress={this.onButtonClickHandler}>
//                     <Text style={{width:50,textAlign:'center'}}> Add</Text>
//                      </TouchableOpacity> 
//                 {/* <Text onPress={this.onButtonClickHandler}>Add</Text> */}
//                 </View>
//             </View>
//         )

//     }

// }
// const Styles = StyleSheet.create({
//     CONTAINER:
//     {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     DUMMY_TEXT:
//     {
//         fontFamily: FONT_FAMILY.ALS_65,
//         fontSize: 16,
//         color: COLORS.SILVER
//     }
// })








// import React, { Component } from 'react';
 
// import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';
 
// var SampleArray = ["ONE", "TWO"] ;
 
// export default class screen extends Component {
 
//   constructor(props) {
    
//        super(props)
    
//        this.state = {
    
//          Holder: '',
//          Array:[]
//        }
    
//      }
 
//   AddItemsToArray=()=>{
 
//       //Adding Items To Array.
//       SampleArray.push( this.state.Holder.toString() );
//       <View style={{flex:1,backgroundColor:'red'}}>
//           <Text style={{color:'black'}}>{SampleArray.toString}</Text>
//       </View>
//       // Showing the complete Array on Screen Using Alert.
//     //   Alert.alert(SampleArray.toString());
//     this.setState({Array:SampleArray})
 
//   }
 
//  render() {
 
//    return (
 
//       <View style={styles.MainContainer}>
 
//           <TextInput
              
//               placeholder="Enter Value here"
    
//               onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
    
//               style={{textAlign: 'center', marginBottom: 6, height: 45}}
          
//           />
 
//           <Button title="Add" onPress={this.AddItemsToArray} />
//           <View style={{flex:1,backgroundColor:'red'}}>
//           <Text style={{color:'black'}}>{Array}</Text>
//       </View>
 
//       </View>
 
        
//    );
//  }
// }
 
// const styles = StyleSheet.create({
 
//   MainContainer :{
 
//     flex:1,
//     justifyContent: 'center',
//     margin: 15
 
//   }
 
// });





// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';



// export default function App() {

//   const [textValue, setTextValue] = useState('');

//   const words = [{
//     text: 'hi',
//     key: 1
//   },
//   {
//     text: 'hii',
//     key: 2
//   },
//   {
//     text: 'hiii',
//     key: 3
//   },
//   {
//     text: 'hiiii',
//     key: 4
//   }
// ]; 

//   const changeTextValue = () => {
//     const len = words.length;
//     setTextValue(words[Math.floor(Math.random() * len)].text)
//   }

//   return (
    
//     <View style={{flex: 1,
//         backgroundColor: 'lightblue',
//         alignItems: 'center',
//         justifyContent: 'center',}}>
//       <Text style={{alignItems:'flex-start'}}>{textValue}</Text>
//       <Button onPress={changeTextValue} title='Add'/>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   )
// }






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
var  count = '0'
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
this.setState({
 
  ColorHolder : ColorCode,
  count:count+1
})
if(count< 5){
  <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/>
}
}
 
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#141313'}}>
            <View style={{flex:0.1,backgroundColor:'#8f8b8b',alignItems:'center'}}>
                <Text style={{alignSelf:'center',marginTop:25,fontSize:18,color:'brown'}}>RANDOM COLORS</Text></View>
         <View style={{flexDirection:'row'}}>
         {/* <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/>
         <View style={{ backgroundColor: this.state.ColorHolder,width:50,height:50,marginLeft:20,marginTop:20}}/> */}
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