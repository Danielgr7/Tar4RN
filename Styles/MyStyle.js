import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    imgBG: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
    },
    appHeader: {
        color: "black",
        //    backgroundColor:'gray',
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        //marginTop:"60%",
        paddingLeft: '10%',
        paddingRight: '10%',
        //marginBottom:"20%"
    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },
    body: {
        flex: 1,
        padding: 30,
        //marginBottom:"15%",
        //justifyContent: 'center'
    },
    scrollView: {
        marginHorizontal: 20,
    },
    footer: {
        marginTop: "15%",
        //direction: 'rtl',
        padding: 10
    },
    btnAddCategory: {
        width: 10

    },
    camera: {
        flex: 1,
        flexDirection: 'row',
    },
    btnsOpenOrClose: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cameraButtons: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    btnTakePhoto: {
        paddingLeft: 10
    },
    btnFlip: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingRight: 10

    },
    textFlip: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    imageView: {
        marginTop: 10,
        //alignSelf: 'flex-end',
        alignItems: 'center',
    },
    imageInNewNote: {
        flex: 1,
        width: 350,
        height: 350,

    }
});