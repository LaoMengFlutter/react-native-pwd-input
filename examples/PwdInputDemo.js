/**
 * Created by 孟庆东 on 2017/7/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import PwdInput from './PwdInput'

export default class PwdInputDemo extends Component {
    render() {
        return (
            <View style={{flex: 1,paddingLeft:20,paddingRight:20}}>
                <PwdInput
                    containerStyle={{marginTop:23}}
                    style={{paddingLeft:12,backgroundColor:'white',height:50}}
                    placeholder='请输入密码'
                    closeImg={require('./eye_close.png')}
                    openImg={require('./eye_open.png')}
                    imageStyle={{width:25,height:25}}
                    onChangeText={(txt)=>{

                    }}/>
            </View>
        );
    }
}