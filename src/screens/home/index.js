import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image, StatusBar} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    opendrawer() {
        this.props.navigation.toggleDrawer();
    }

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'#c4d8ff'}/>
                   <View style={{ flexDirection: 'row', marginTop: 15, }}>
                    <View style={{ backgroundColor: '#c4d8ff', borderRadius: 25, width: 50, height: 50, marginLeft: 20,justifyContent:'center'
                    ,alignItems:'center'
                 }}>
                        <Image source={require('../../images/nfc.png')} resizeMode='contain' style={{ height: 40, width: 45,flex:1 }} />
                    </View>
                    <TouchableOpacity onPress={() => this.opendrawer()} style={{ position: 'absolute', right: 30, paddingTop: 10, }}>
                        <Octicons size={30} name='three-bars' style={{ color: 'black', }}></Octicons>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Home;