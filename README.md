# react-native-pwd-input
可查看密码的密码框

项目中依赖了react-native-touchable（https://github.com/781238222/react-native-touchable）


使用：

1、在终端进入到项目目录：npm i react-native-pwd-input --save

2、实例：

    import PwdInput from 'react-native-pwd-input'
    
    <PwdInput
        containerStyle={{marginTop:23}}
        style={{paddingLeft:12,backgroundColor:'white',height:50}}
        placeholder='请输入密码'
        closeImg={require('./eye_close.png')}
        openImg={require('./eye_open.png')}
        imageStyle={{width:25,height:25}}
        onChangeText={(txt)=>{}}/>


3、

 ...TextInput.props：TextInput的属性
 
 containerStyle：容器的样式
 
 closeImg：显示密文时图片
 
 openImg：显示明文时图片
 
 imageStyle：图片样式，

 
 ![image](https://github.com/781238222/react-native-pwd-input/blob/master/examples/screen/1.jpg)
  ![image](https://github.com/781238222/react-native-pwd-input/blob/master/examples/screen/2.jpg)
