import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Themes } from './assets/Themes';


const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <Image source={require("./assets/Icons/menu_light.png")} style={styles.topIcon, styles.topImage}/>
            <Text style={styles.topIcon}>ensom</Text>
            <Image source={require("./assets/Icons/sun.png")} style={styles.topIcon, styles.topImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: Platform.OS === 'ios' ? 50 : 60,
        padding: 10,
        marginTop: '7%',
        width: '90%',
        color: Themes.light.navigation,
    },
    topIcon: {
        fontSize: 32,
        fontFamily: 'Sydney-Bold',
        margin: 0
    },
    topImage: { 
        width: Platform.OS === 'ios' ? 41 : 54,
        height: Platform.OS === 'ios' ? 41 : 54,
    },
});

export default NavBar