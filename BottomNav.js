import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { Themes } from './assets/Themes';

const BottomNav = () => {
    return (
        <View style={styles.bottomnav}>
            <View style={styles.bottomgroup}>
                <Image source={require("./assets/Icons/discover_light.png")} style={styles.topIcon, styles.topImage}/>
                <Text style={styles.bottomtext}>Discover</Text>
            </View>
            <View style={styles.bottomgroup}>
                <Image source={require("./assets/Icons/heart_light.png")} style={styles.topIcon, styles.topImage}/>
                <Text style={styles.bottomtext}>Matches</Text>
            </View>
            <View style={styles.bottomgroup}>
                <Image source={require("./assets/Icons/messages_light.png")} style={styles.topIcon, styles.topImage}/>
                <Text style={styles.bottomtext}>DMs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomnav: {
        backgroundColor: Themes.light.navigation,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: Platform.OS === 'ios' ? 80 : 90,
        padding: 10,
        width: '100%',
        position: "absolute",
        bottom: 0,
        alignItems: "center"
    },
    bottomgroup: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomtext: {
        fontFamily: "Sydney",
        fontSize: 15,
        marginBottom: '5%',
        marginTop: '5%',
        color: Themes.light.textSecondary
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

export default BottomNav