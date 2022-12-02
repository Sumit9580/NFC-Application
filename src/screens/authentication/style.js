import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import Fonts from "../../utils/fonts";
export default StyleSheet.create({


    flexpass:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        borderRadius:10,
        marginTop:20,
        alignSelf:'center',
        borderWidth:0.8,
        borderColor:'#c4d8ff'
     },

     iconset:{
         color:Colors.colorBlack,
         width:'10%',
         alignSelf:'center',
         marginRight:30
     },

     button:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
     },

     buttonview:{
        backgroundColor:'#6098ff',
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        alignSelf:'center',
        borderRadius:10,
        marginTop:25,
        // opacity:0.5
     },
     google: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        , marginHorizontal: 50,
        marginTop: 50,
        borderRadius: 30,
        borderColor: 'white',
        padding: 12
    },
    facebook: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        marginHorizontal: 50,
        marginTop: 20,
        borderRadius: 30,
        borderColor: '#3b5998',
        padding: 12,
    },
    Text:{
         color: 'white',
         fontSize:15,
         fontWeight:'bold' 
    },
    Text1:{
        color: 'black',
        fontSize:15,
        fontWeight:'bold' 
    }
})