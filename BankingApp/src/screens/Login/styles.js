import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16
    },
    text_header: {
        marginTop: 50,
        fontSize: 32,
        color: Colors.black_text,
        fontWeight: "600"
    },
    login_special: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },
    button_special: {
        width: (width - 32 - 12) / 2,
        alignItems:'center', 
        borderWidth:1,
        borderRadius:6,
        paddingVertical:12,
        borderColor: Colors.border
    },
    formik:{
        marginTop:30
    },
    input_title:{
        fontSize:13,
        color: Colors.gray_text
    },
    row_input:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        paddingBottom:8
    },
    text_input:{
        height:20,
        width: width -62
    },
    bottom_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    left_bottom:{
        flexDirection:'row',
        alignItems:'center'
    },
    text_radio:{
        fontSize:13,
        color:Colors.gray_text
    },
    radio_button:{
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:1,
        borderColor: Colors.gray_text,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    dot:{
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor: Colors.gray_text
    },
    forgot:{
        fontSize:13,
        color: Colors.blue,
        fontWeight:'600'
    },
    login:{
        marginTop:30,
        backgroundColor:Colors.blue,
        alignItems:'center',
        paddingVertical:14,
        borderRadius:6
    },
    login_text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    },
    question_container:{
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    question:{
        fontSize:16,
        color: Colors.gray_text
    },
    signup:{
        fontSize:16,
        color:Colors.black_text,
        fontWeight:'600',
        marginLeft:10
    }
})