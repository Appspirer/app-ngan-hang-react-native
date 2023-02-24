import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    top_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: Colors.black_text,
        fontWeight: '600',
        marginRight: 8
    },
    for: {
        fontSize: 13,
        color: Colors.gray_text
    },
    platinum: {
        fontWeight: '600',
        color: Colors.black_text
    },
    card_container: {
        marginTop: 30,
        paddingLeft: 16
    },
    amount_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 16
    },
    bar_red: {
        height: 5,
        backgroundColor: Colors.green,
        marginHorizontal: 16,
        marginTop: 10,
        borderTopLeftRadius: 2.5,
        borderBottomLeftRadius: 2.5
    },
    bar_green: {
        position: 'absolute',
        height: 5,
        backgroundColor: Colors.red,
        alignSelf: 'flex-end',
        width: (width - 32) * 0.38,
        borderTopRightRadius: 2.5,
        borderBottomRightRadius: 2.5
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 30
    },
    status_block: {
        flexDirection: 'row',
        alignItems: 'center',
        width: (width - 32) / 2
    },
    block: {
        height: 48,
        width: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right_block: {
        marginLeft: 10,
    },
    text_block: {
        fontSize: 13,
        color: Colors.gray_text,
        fontWeight: "600"
    },
    price_block: {
        fontSize: 16,
        color: Colors.black_text,
        fontWeight: "600",
        marginTop: 5
    },
    person_container:{
        height:110, 
        width:90,
        borderRadius:10,
        alignItems:'center',
        backgroundColor:Colors.white,
        paddingTop:30,
        marginLeft:16
    },
    person_text:{
        fontSize:13,
        color: Colors.gray_text,
        textAlign:'center',
        position:'absolute',
        bottom:10,
        width:'70%'
    },
    avatar:{
        borderRadius:8
    },
    time_item:{
        paddingHorizontal:24,
        paddingVertical:6,
        borderRadius:6,
        marginLeft:16
    },
    bottom_price_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:16,
        marginTop:20,
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:10
    },
    left_bottom_price:{
        flexDirection:'row',
        alignItems:'center'
    },
    img_bill:{
        height:40,
        width:40,
        marginRight:10
    },
    bill_name:{
        fontSize:16,
        color:Colors.black_text,
        fontWeight: "600"
    },
    bill_time:{
        fontSize:13,
        color:Colors.gray_text,
        marginTop:3
    },
    price:{
        fontSize:16,
        fontWeight:'600',
        color:Colors.red_ograne
    }
})