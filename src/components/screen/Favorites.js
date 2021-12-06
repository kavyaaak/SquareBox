import React ,{Component} from 'react';
import {View,Text,StyleSheet, FlatList,} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

class Favorites extends Component {
   
   
    
    constructor(props) {
      super(props);
        this.state = {
          list:this.props.getProductDetails.fruitName,
          deleteMsg: false
        }
    }
    
     DeleteColor = (id) => {

       var array= this.state.list
      let filterItem = array.filter((val,i)=>{
           if(val.id !== id){
            //    console.log("valueee",val)
            return val
           }
           })
       console.log("filterr",filterItem)
       this.setState({list:filterItem})
       this.setState({deleteMsg:true})
        setTimeout(() => {
            this.setState({deleteMsg:false})
          }, 1000);
        //   AsyncStorage.setItem('fruitName',JSON.stringify(filterItem));
      }

    renderItems = (data) => {
        // console.log("**itemmm", data.item)
        return (
        <View style={{height:80,flexDirection: 'row',borderBottomWidth: 1,alignItems: "center",backgroundColor:'#141414',flex:1}}>
        <View style={{ flex: 0.8, paddingLeft: 20 }}>
            <Text style={{ color: "white",fontSize:18 }}>{data.item.name}</Text>
        </View>
        <View style={{ flex: 0.2,alignItems:'center' }}>
            {/* {
                console.log("itemmmmmmm", data.item.favorite)
            } */}
            <Icon.Button
              name="trash-o"
             backgroundColor="#cc0e04"
              onPress={()=>this.DeleteColor(data.item.id)}>
            </Icon.Button>
            </View>
            </View>
        )
    }
    render(){
        return(
    <View style={{flex:1}}>

    <FlatList
        data={this.state.list}
        renderItem={this.renderItems}
        keyExtractor={item => item.id}
    />
   {this.state.deleteMsg &&  <View style={{alignItems:'center',
                  backgroundColor: 'black',
                  position: 'absolute',
                  height:50,width:'100%',
                  paddingTop:10,
                  bottom: 1,}}>
                                          <View style={{ marginLeft: '2%' }}>
                                              <Text style={{fontSize:18,color:'#c4b7b7'}}>Fruit is Deleted from Favorites</Text>
                                              {/* <Text style={Styles.TOAST_TEXT_2}>Fund withdrawal request has been cancelled</Text> */}
                                          </View></View>}
</View>
)
    }
}



const mapStateToProps = ({fruitStore}) => {
    console.log('fruitname',fruitStore)
    return {
        getProductDetails:fruitStore,
    }
}


export default connect(mapStateToProps,null)(Favorites);