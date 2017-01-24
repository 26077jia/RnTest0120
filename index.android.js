import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
//import MyScene from './MyScene'
var Item = require('./item');
class RnTest0120 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello,React bsedgwick world</Text>
         <Item style={styles.item1} color='#aaa' width='100' height='100'
            text='Icon' img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_bike.png'></Item>
            <Text style={{width:100,fontColor:'yello',}}/>
        <Navigator
            initialRout ={{title: 'My Initial Scene',index:0}}
            renderScene = {(route,navigator) =>{
                return <Item style={styles.item1} color='#aaa' width='100' height='100'
                text="jk" img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_bike.png'/>

            }
            }
        />
      </View>
    )

  }
}
var styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
      },

  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
   item1:{
      marginLeft:100,
    },
});
//引号名为App名，后面的名组件名
AppRegistry.registerComponent('RnTest0120', () => RnTest0120);