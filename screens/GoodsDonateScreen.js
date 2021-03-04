import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from "../components/MyHeader.js";
import db from '../config';
import firebase from 'firebase';

export default class GoodsDonateScreen extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <Text>Goods Donate</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    button : { 
        width : 100, 
        height : 30, 
        justifyContent : 'center', 
        alignItems : 'center', 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8 } },
        subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}, 
})