import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        height: 0.35 * height,
        width: width,
        borderBottomRightRadius: 32
    },
    content: {
        marginHorizontal: 16,
        marginTop: -height * 0.3
    },
    info_container: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    profile: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    name_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black_text,
        marginRight: 10
    },
    email: {
        marginTop: 10,
        fontSize: 13,
        color: Colors.gray_text,
        alignSelf: "center"
    },
    medal_container: {
        flexDirection: "row",
        padding: 16,
        justifyContent: 'space-between',
        backgroundColor: Colors.transparent,
        borderRadius: 12,
        marginTop: 30
    },
    medal: {
        height: 48,
        width: 48,
    },
    title: {
        marginTop: 30,
        marginBottom: 8
    },
    block: {
        backgroundColor: Colors.white,
        padding: 12,
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:10
    },
    block_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    block_content:{
        marginLeft:10
    },
    block_title:{
        fontSize:16,
        fontWeight:'600',
        color: Colors.black_text
    },
    block_description:{
        fontSize:13,
        color: Colors.gray_text,
        marginTop:3
    }
})