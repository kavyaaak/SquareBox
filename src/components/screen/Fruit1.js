import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Button,
    Modal,
    BackHandler,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { storeFruitItems } from '../../redux/action/FruitAction';
import { Icon } from 'react-native-elements';
import fruits from '../constants/fruitName';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation'

// function HomeScreen(props) {
//     const [listData, setListData] = useState("");
//     // const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         const backAction = () => {
//             Alert.alert("Hold on!", "Are you sure you want to exit app?", [
//                 {
//                     text: "Cancel",
//                     onPress: () => null,
//                     style: "cancel"
//                 },
//                 { text: "Exit", onPress: () => BackHandler.exitApp() }
//             ]);
//             return true;
//         };

//         const backHandler = BackHandler.addEventListener(
//             "hardwareBackPress",
//             backAction
//         );

//         return () => backHandler.remove();
//     }, []);

 class Fruits extends Component {

        constructor(props) {
          super(props);
            this.state = {
            listData:[],
            popupMsg:false
            }
        }


      
    // console.log("propsssDetails", props.getProductDetails)

// useEffect(()=>{
    // componentDidMount() {
    // AsyncStorage.getItem('favoriteList1').then(
    //     (value) => {
    //         if (value == 'true') {
    //             console.log('favoritessss', value)
    //             AsyncStorage.getItem('fruitName').then(
    //                 (value) => {
    //                     let data = JSON.parse(value)
    //                     this.setState({listData:data})
    //                 })
    //             }
    //         else {
    //             this.setState({listData:fruits})
    //             // setListData(fruits)
    //         }
    //     }
    // );
    // }

    onDidFocus=()=>{
        AsyncStorage.getItem('favoriteList1').then(
            (value) => {
                if (value == 'true') {
                    console.log('favoritessss', value)
                    AsyncStorage.getItem('fruitName').then(
                        (value) => {
                            let data = JSON.parse(value)
                            this.setState({listData:data})
                        })
                    }
                else {
                    this.setState({listData:fruits})
                    // setListData(fruits)
                }
            }
        );
        // AsyncStorage.getItem('fruitName',JSON.stringify(filterItem));
    }

// }, []);
gotoDetails = () => {
    let newList = [];
    let listItem = this.state.listData.filter((item) => {
        // console.log("listt", item)
        return item.favorite == true

    })
    newList.push(listItem);
    console.log("%%listitem", listItem)
   //  AsyncStorage.setItem('fruitName',JSON.stringify(listItem));
    if (listItem.length == 0) {
        alert("Please add items");
    }
    else {
       this.props.storeFruitItems(listItem);
    }
   this.props.navigation.navigate('Favorites')
}
 changeItem = (index) => {
        let list =this.state.listData;
        list[index].favorite = !list[index].favorite;
        console.log("dataaaa", list)
        this.setState({listData:list})
        this.setState({popupMsg:true})
        setTimeout(() => {
            this.setState({popupMsg:false})
          }, 1000);
        
        // setListData(list);
        AsyncStorage.setItem('fruitName',JSON.stringify(list));
        AsyncStorage.setItem('favoriteList1','true')
    }
  
  

renderList = (data) => {
        //console.log("**itemmm", data)
        return (
                <View style={styles.listMainView}>
                    <View style={{ flex: 0.8, paddingLeft: 20 }}>
                        <Text style={{ color: "#baafaf",fontSize:20,fontFamily:'' }}>{data.item.name}</Text>
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center' }}>
                        {
                            console.log("itemmmmmmm", data.item.favorite)
                        }

                        {
                            !data.item.favorite ?
                                <TouchableOpacity
                                    onPress={() => {this.changeItem(data.index) }}>
                                    <Icon

                                        style={styles.iconStyle}
                                        name='heart'
                                        type='font-awesome'
                                        color='silver'
                                        size={22}
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => {this.changeItem(data.index) }}>
                                    <Icon

                                        style={styles.iconStyle}
                                        name='heart'
                                        type='font-awesome'
                                        color='red'
                                        size={22}
                                    />
                                </TouchableOpacity>
                        }

                    </View>
                  
                </View>
            // </Swipeable>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
    return (
        <View style={styles.mainView}>
             <NavigationEvents
        //   onDidBlur={this.onBlurChange}
          onDidFocus={this.onDidFocus}
        />
                    <View style={{flexDirection:'row',alignSelf:'flex-end',paddingRight:25}}>
                    <Text style={styles.productText}>Favorites</Text>
                        <TouchableOpacity style={styles.productText}
                            onPress={this.gotoDetails}>
                             {/* <Text style={styles.productText}>Favorites</Text> */}
                            <Icon
                                style={styles.favoriteIcon}
                                name='heart'
                                type='font-awesome'
                                color='red'
                                size={22}
                            />
                        </TouchableOpacity>
                         </View>
                    {/* </View> */}
                {/* </View>  */}
            {/* </View> */}
            <View style={{ flex: 0.9,backgroundColor:'#111112' }}>
                <FlatList style={{ marginTop: 20 }}
                    data={this.state.listData}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()}

                />
            </View>
              {this.state.popupMsg &&  <View style={{alignItems:'center',
                  backgroundColor: 'white',
                  position: 'absolute',
                  height:50,width:'100%',
                  paddingTop:10,
                  bottom: 1,}}>
                                          <View style={{ marginLeft: '2%' }}>
                                              <Text style={{fontSize:18,color:'#111112'}}>Fruit is Selected/UnSelected</Text>
                                          </View></View>}
                                        
        </View>
    );
        }
    }

 const mapStateToProps = ({fruitStore}) => {
     console.log('fruitname',fruitStore)
     return {
         getProductDetails:fruitStore,
     }
 }

const mapDispatchToProps = (dispatch) => {
     return {
        storeFruitItems: (fruitName) => { dispatch(storeFruitItems(fruitName)) },
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Fruits);




const styles = StyleSheet.create({
    listMainView: {
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: "center"
    },


    modalView: {
        flex: 0.8,
        position: 'absolute',
        bottom: 0,
        // backgroundColor: "#fff",
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '100%'
    },
    header: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        // paddingTop: 10,
        backgroundColor: "#acb5c2",
        paddingLeft: 20,
        flexDirection:'row'
    },
    mainView: {
        backgroundColor: '#111112',
        flex: 1
    },
    iconStyle: {
        alignItems: 'flex-end'
    },
    modalItemView: {
        flex: 0.6,
        paddingLeft: 10,
        paddingBottom: 6
    },
    modalText:
    {
        color: '#ab8209',
        paddingTop: 2
    },
    usernameStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    productView: {
        flex: 0.8
    },
    productTextView: {
        flexDirection: 'row'
    },
    productText: {
        color: '#6b9ded',
        paddingLeft:5,
        paddingTop: 20,
        fontSize: 18
    },
    favoriteView: {
        // flex: 0.3,
        alignItems:'flex-end',
        backgroundColor:'green'
    },
    favoriteButton: {
        backgroundColor: '#fcba03',
        width: "80%",
        height: 40,
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row'
    },
    favoriteText: {
        textAlign: 'center',
        color: '#fff',
        alignSelf: 'center'
    },
    favoriteIcon:
    {
        paddingHorizontal: 6,
        marginTop: 5
    },
    leftAction: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
    },
    actionText: {
        color: 'black',
        fontSize: 16,
    },
    rectButton: {
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
    }

}
)
