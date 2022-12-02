import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import Fonts from "../../utils/fonts";
export default StyleSheet.create({

 fullview:{   
    width: 138,
    height: 138,
    padding:2,
    borderRadius: 80,
    marginTop:-20,
    backgroundColor: '#c4d8ff',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
 },
 opencamera:{
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -15,
    top: 15
 },
 edit: {
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    color: 'black',
    padding: 8,
    borderColor: '#c4d8ff'
},
edit1:{
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    color: 'black',
    padding: 8,
    borderColor: '#c4d8ff',
    marginTop:50
},
buttontext: {
    padding: 8,
    fontSize: 15,
    marginHorizontal: 120,
    borderRadius: 15,
    color: 'white',
    marginVertical: 20,
    backgroundColor: '#c4d8ff',
    textAlign: 'center',
},
buttonview:{
    // marginVertical:30
},
arrowview:{
    height:50,
    width:'100%',
    justifyContent:'center',
    paddingLeft:20,
  }

})