import React ,{Component} from 'react';
import { View , Text,TouchableOpacity, StatusBar,TextInput,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';
import Colors from '../../utils/colors';
import Snack from '../../utils/snack';
import Icon from 'react-native-vector-icons/FontAwesome';



class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true,
            iseye: '',
            email: '',
            password: '',

        }
    }


    
    continue() {
        // if (this.state.email !== '') {
        //     if (this.state.password !== '') {
                this.props.navigation.replace('Root');
        //     }
        //     else {
        //         Snack('Please enter the password')
        //     }
        // } else {
        //     Snack('Please enter email id')
        // }
    }

    handleeye() {
        let { iseye, visible } = this.state
        this.setState({ iseye: !iseye })
        this.setState({ visible: !visible })

    }

    render(){
        let { iseye, visible, iseyeone, visibleone } = this.state
        return(
            <LinearGradient colors={['#c4d8ff','#ecf2ff']} style={{flex:1}}>
               <StatusBar  backgroundColor={'black'}/>
               <View style={{ flex: 1, justifyContent: 'center', }}>
                        <View style={style.flexpass} onPress>
                            <TextInput placeholder='Enter Email ID' placeholderTextColor={'#c4d8ff'}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}
                                onChangeText={(email) => this.setState({ email: email })}
                            />
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Password' placeholderTextColor={'#c4d8ff'}
                                secureTextEntry={visible}
                                onChangeText={(password) => this.setState({ password: password })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}
                            />
                            <TouchableOpacity onPress={() => this.handleeye()} style={style.iconset}>
                                <Feather name={iseye ? 'eye' : 'eye-off'} size={22} style={{ color: Colors.colordarkgrey }} />
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity onPress={() => this.continue()} activeOpacity={0.7} style={style.buttonview}>
                        <Text style={style.button}>Continue</Text>
                    </TouchableOpacity>
                    <View style={{ }}>
                            <TouchableOpacity onPress={() => this.GoogleSignin()} style={style.google}>
                                <Image source={require('../../images/google.jpg')} resizeMode='contain' style={{ width: 23, height: 23, marginHorizontal: 10, }} />
                                <Text style={style.Text1}>Continue with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={style.facebook}>
                                    <Icon name="facebook-f" size={20} style={{ justifyContent: 'center', alignItems: 'center', color: 'white', marginHorizontal: 10 }} />
                                    <Text style={style.Text}>Continue with Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>
            </LinearGradient>
        )
    }
}
export default Auth;