import { Platform, StyleSheet } from "react-native";
export const colors = {
    darkGray: '#2D2D2D',
    lightGray:'#9B9B9B',
    orange: '#FF9427',

    textPrimary:'white',
    textSecondary: '#666666',
    background:'#000000',


}
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    calculatorContainer : {
        flex :1,
        padding : 20,
        justifyContent : 'flex-end',
       
        // justifyContent: 'center',  
        // alignItems:'center',
        // flexDirection: 'row'
    },
    mainResult:{
        color : colors.textPrimary,
        fontSize: 90,
        textAlign: 'right'

    },
    subResult:{
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight:'300',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    
    },
    button:{
        height : 90,
        width : 90,
        backgroundColor : colors.darkGray,
        borderRadius : 100,
        justifyContent: 'center',
        marginHorizontal : 8,
    },
    buttonText:{
        textAlign: 'center',
        paddingVertical : 10,
        fontSize: 35,
        color: 'white',
        fontWeight: '500'   
    }
})
