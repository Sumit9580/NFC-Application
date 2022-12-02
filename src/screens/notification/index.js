import React, { Component } from 'react';
import { View, Text, TouchableOpacity,BackHandler } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleBack=this.handleBack.bind(this);
    }
 
    componentDidMount = async()=>{
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);

    }
  



    handleBack() {
        this.props.navigation.replace('Root');
        return true;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ zIndex: 999 }} onPress={() => this.handleBack()}>
                        <View style={{ width: '100%' }}>
                            <Ionicons name='arrow-back' size={30} style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={style.Textnotification}>Notification</Text>
                </View>
                <View style={{ width: '100%', height: '50%', marginTop: 50 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Ionicons name='notifications' size={120} style={{ color: 'black' }} />
                        <Text style={style.notifyno}>No Notification Here</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.submithome()}>
                        <View style={style.button}>
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Return To Home Page</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Notification;