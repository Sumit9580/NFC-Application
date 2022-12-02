import React, { component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {
        setTimeout(() => {
            this.props.navigation.navigate('Auth')
        },1000);
    }


    render() {
        return (
            <LinearGradient colors={['#c4d8ff','#ecf2ff']} style={{flex:1,alignItems: 'center', justifyContent: 'center', }}>
                <StatusBar backgroundColor={'black'} />
                <View>
                    <Image source={require('../../images/nfc.png')} resizeMode='contain' style={{ width: 500, height: 500, }} />
                </View>
            </LinearGradient>

        )
    }
}

export default Splash;