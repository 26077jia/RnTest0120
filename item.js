'use strict';
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

var Item = React.createClass({
    render: function() {
        var outStyle = {
            width:parseInt(this.props.width),
            height:parseInt(this.props.height),
            backgroundColor:this.props.color,
        };
        var img = this.props.img;
        var text = this.props.text;
        return (
              <View style={[styles.item,outStyle]}>
                <Image style={styles.image} source={{uri:img}}/>
                <Text style={styles.text}>{text}</Text>
              </View>
        );
    }
});
var styles = StyleSheet.create({
  item:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:10,
    paddingLeft:30,
    paddingRight:2;
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5,
  },
  image:{
    width:48,
    height:48,
  },
  text:{
    color:'#ffffff',
    alignItems:'center'
  }
});
//将组件导出
module.exports = Item;