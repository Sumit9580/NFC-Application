import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView,BackHandler } from 'react-native';
import style from './style';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Snack from '../../utils/snack';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('../../images/nfc.png'),
            name: '',
            password: '',
            email: '',
            address: '',
            card: '',
        }
        this.handleBack=this.handleBack.bind(this);

    }

    componentDidMount = async()=>{
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    opencamera = async () => {
        let option = {
            quality: 1,
            maxWidth: 400,
            maxHeight: 400,
            mediaType: 'photo',
            includeBase64: false,
        };
        console.log('Option', option, response);
        const result = await launchImageLibrary(option, response);
        let response;
        console.log('result', result);
        if (result?.assets) response = result.assets[0];

        if (response) {
            let file = {
                uri: response.uri,
                type: 'image/jpeg',
                name: response.fileName,
            };
            this.setState({ image: { uri: response.uri }, file: file, profile_pic: file, photoType: 'file' });
            console.log('Images========>:', file, this.state.image);
        } else {
            Snack('User Cancelled');
        }
    }

    handleBack(){
        this.props.navigation.replace('Root');
        return true;
    }

    submitdetails() {
        if (this.state.name != '') {
            if (this.state.password != '') {
                if (this.state.email != '') {
                    if (this.state.address != '') {
                        if(this.state.card !=''){
                            console.log('textsssss============>',this.state.name,this.state.password,this.state.email,this.state.address)
                        this.props.navigation.navigate('Home');
                        }else
                        Snack('Please enter the card-no')
                    } else
                        Snack('Please enter the address')
                } else
                    Snack('Please enter the email')
            } else
                Snack('Please enter the password');
        } else
            Snack('Please enter the name');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={()=> this.handleBack()} style={style.arrowview}>
         <Ionicons name='arrow-back' size={30} style={{ color: 'black',}} />
        </TouchableOpacity>
                <View style={{ marginTop: 30 }} >
                    <TouchableOpacity style={style.fullview}>
                        <View style={{}}>
                            <View style={{ borderRadius: 200, overflow: 'hidden', }}>
                                <ImageBackground source={this.state.image} resizeMode={'cover'}
                                    style={{ width: 132, height: 132, borderRadius: 70, }}>
                                </ImageBackground>
                            </View>
                            <TouchableOpacity style={style.opencamera}
                                onPress={() => this.opencamera()}>
                                <Octicons size={30} name='device-camera' style={{ color: '#c4d8ff', }}></Octicons>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView style={{ marginBottom: 200, }}>
                        <TextInput placeholder='Name' placeholderTextColor="#828282"
                            style={style.edit1} value={this.state.name}
                            onChangeText={(txt) => this.setState({ name: txt })} />
                        <TextInput placeholder='Password' placeholderTextColor="#828282"
                            style={style.edit} value={this.state.password}
                            onChangeText={(txt) => this.setState({ password: txt })} />
                        <TextInput placeholder='Email-Id' placeholderTextColor="#828282"
                            style={style.edit} value={this.state.email}
                            onChangeText={(txt) => this.setState({ email: txt })} />
                        <TextInput placeholder='Address' placeholderTextColor="#828282"
                            style={style.edit} value={this.state.address}
                            onChangeText={(txt) => this.setState({ address: txt })} />
                        <TextInput placeholder='Card-No' placeholderTextColor="#828282"
                            style={style.edit} value={this.state.card}
                            onChangeText={(txt) => this.setState({ card: txt })} />



                        <TouchableOpacity onPress={() => this.submitdetails()} style={style.buttonview}>
                            <Text style={style.buttontext}>SUBMIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

export default Profile;