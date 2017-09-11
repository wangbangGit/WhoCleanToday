import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    ActivityIndicator,
    ProgressBarAndroid,
    KeyboardAvoidingView
} from 'react-native';

class InitScreen extends Component {

    _showProgress() {
        this.setState({animating:!this.state.animating});
    }
    constructor(props) {
        super(props);
        this.state={
            animating:false
        }
        this.state = {
            Show: true
        };
        this.state = {
            loginname: ''
        };
        this.state = {
            loginpassword: ''
        };
        this._showProgress = this
            ._showProgress
            .bind(this);
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    static navigationOptions = {
        title: 'Welcom'
    }

    render() {
        return (

            <Image
                source={require('../img/loginbg_new.jpg')}
                style={styles.backgroundImage}>

                <View style={styles.horizontal}>
                    <TextInput
                        autoFocus={true}
                        placeholder="请输入登录账号"
                        placeholderTextColor="red"
                        style={styles.loginInputText}/>
                </View>

                <View style={styles.horizontal}>
                    <TextInput
                        placeholder=" 请输入密码"
                        placeholderTextColor="red"
                        style={styles.loginInputText}/>
                </View>

                <Button title="登录" onPress={this} style={styles.loginButton}/>
                <ActivityIndicator
                
                    animating={this.state.animating}
                    style={[
                    styles.centering, {
                        height: 80
                    }
                ]}size="large"/>
                <View style={styles.gray}></View>
            </Image>

        );
    }

}

const styles = StyleSheet.create({
    loginButton: {
        color: 'blue',
        width: 100,
        height: 50
    },
    loginInputText: {
        flex: 1,
        width: null,
        height: 50,
        marginLeft: 50,
        marginRight: 50
    },

    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: null,
        width: null,
        // 不加这句，就是按照屏幕高度自适应 加上这几，就是按照屏幕自适应 resizeMode:Image.resizeMode.contain,
        // 祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    gray: {
        flex: 5,
        backgroundColor: '#cccccc'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8
    }
});
export default InitScreen;