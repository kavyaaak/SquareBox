import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Square extends Component {

  constructor(props) {
    super(props);
    this.square = [],
      this.state = {
        refresh: true,
        ColorHolder: '#e60742',
      }
  }

  ChangeColor = () => {
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ ColorHolder: ColorCode })
    this.square.push(<View style={{ marginStart: 20, height: 10, width: 10, backgroundColor: this.state.ColorHolder, alignItems: 'flex-start' }} />)
    this.setState({ refresh: !this.state.refresh })
  }

  DeleteColor = () => {
    var y = this.square.pop()
    this.setState({ refresh: !this.state.refresh })
  }

  ListHeaderComponent = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>COLOR SQUARES</Text>
      </View>
    )
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>{item}</View>
    )
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          // horizontal={true}
          ListHeaderComponent={this.ListHeaderComponent}
          data={this.square}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={10}
        />
        <View style={styles.buttonView}>
          <View style={styles.button1}>
            <Icon.Button
              name="plus"
              backgroundColor="#33cc25"
              onPress={this.ChangeColor}>
              ADD
            </Icon.Button>
          </View>
          <View style={styles.button2}>
            <Icon.Button
              name="trash-o"
              backgroundColor="#cc0e04"
              onPress={this.DeleteColor}>
              DELETE
            </Icon.Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer: {
      flex: 1,
      backgroundColor: '#141313'
    },
    headerView:{
      height: 80, 
      backgroundColor: '#4287f5', 
      alignItems: 'center', 
      marginTop: 25, 
      borderRadius: 10
    },
    headerText:{
      paddingTop: 30, 
      fontSize: 18,
       color: 'brown',
        fontWeight: 'bold'
    },
    buttonView:{
      flexDirection: 'row', 
      alignSelf: 'center', 
      paddingRight: 10 
    },
    button1:{
      width: 60, 
      marginBottom: 20
    },
    button2:{
      width: 90, 
      marginBottom: 20, 
      paddingLeft: 10, 
      alignItems: 'center'
    }

  });