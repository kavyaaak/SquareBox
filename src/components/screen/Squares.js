import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeleteOutlined from 'react-native-vector-icons/AntDesign';
export default class Square extends Component {


  constructor(props) {
    super(props);
    this.square = [],
      this.state = {
        refresh: true,
        ColorHolder: '#00BCD4',
      }
  }

  ChangeColor = () => {
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ ColorHolder: ColorCode })
    var x = this.square.push(<View style={{ marginStart: 20, height: 10, width: 10, backgroundColor: this.state.ColorHolder, alignItems: 'flex-start' }} />)
    this.setState({ refresh: !this.state.refresh })
    console.log('ssssss', x)
  }

  DeleteColor = () => {
    var y = this.square.pop()
    this.setState({ refresh: !this.state.refresh })
    console.log('yyyyy', y)
  }

  ListHeaderComponent = () => {
    return (
      <View style={{ flex: 0.1, backgroundColor: '#8f8b8b', alignItems: 'center' }}>
        <Text style={{ alignSelf: 'center', marginTop: 25, fontSize: 18, color: 'brown' }}>RANDOM COLORS</Text></View>
    )
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>{item}</View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#141313' }}>
        <FlatList
          // horizontal={true}
          ListHeaderComponent={this.ListHeaderComponent}
          data={this.square}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={10}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 10 }}>
          <View style={{ width: 60, marginBottom: 40 }}>
            <Icon.Button
              name="plus"
              backgroundColor="#33cc25"
              onPress={this.ChangeColor}>
              ADD
            </Icon.Button>
          </View>
          <View style={{ width: 90, marginBottom: 20, paddingLeft: 10, alignItems: 'center' }}>
            <Icon.Button
              name="trash-o"
              backgroundColor="#cc0e04"
              onPress={this.DeleteColor}>
              DELETE
            </Icon.Button>
          </View>
        </View>
        {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, marginRight: 10 }}>
          <View style={{ width: 50, backgroundColor: '#33cc25' }}>
            {/* <Button title="ADD" onPress={this.ChangeColor}/> */}
            {/* <TouchableOpacity onPress={this.ChangeColor}><Text>ADD</Text></TouchableOpacity>
          </View>
          <View style={{ width: 80, paddingLeft: 20, alignItems: 'center', backgroundColor: '#cc0e04' }}>
            <TouchableOpacity onPress={this.DeleteColor}><Text>DELETE</Text></TouchableOpacity>
            {/* <Button title="DELETE" onPress={this.DeleteColor}/> */}
          {/* </View>
        </View> */} 
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