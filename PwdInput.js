/**
 * Created by 孟庆东 on 2017/3/31.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
} from 'react-native';
import Touchable from 'react-native-touchable';


export default class PwdInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPwd: false,
        };
    }

    static propTypes = {
        //图片资源
        ...TextInput.props,
        containerStyle: View.style,
        closeImg: Image.source,
        openImg: Image.source,
        imageStyle: Image.style,
    }


    render() {
        var props = Object.assign({}, this.props);
        var pwdImg = !this.state.showPwd ? props.closeImg : props.openImg;
        return (
            <View style={props.containerStyle}>
                <TextInput
                    underlineColorAndroid='transparent'
                    secureTextEntry={!this.state.showPwd}
                    {...props}/>

                <Touchable
                    style={{position: 'absolute', top: 0, bottom: 0, right: 0, paddingLeft: 10, paddingRight: 8}}
                    onPress={() => {
                        this.setState({
                            showPwd: !this.state.showPwd,
                        });
                    }}>
                    <Image style={props.imageStyle} source={pwdImg}/>
                </Touchable>
            </View>

        );
    }
}