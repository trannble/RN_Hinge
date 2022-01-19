import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from './assets/Themes';

const MiddleProfile = () => {
    return (
        <View style={styles.middleView}>
            <View style={styles.profileView}>
                <Image source={require("./assets/Profiles/mtl.jpg")} style={styles.middleImage}/>
                <Text style={styles.nameText}>MTL</Text>
                <Text style={styles.descriptionText}>2 miles away</Text>
            </View>

            <View style={styles.statusView}>
                <Text style={styles.hottestTake}>My hottest take</Text>
                <View style={styles.player}>
                <Image source={require("./assets/Icons/player_light.png")} style={styles.play}></Image>
                <Image source={require("./assets/Icons/audio_waveform_light.png")} style={styles.audio}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
      middleView: {
        alignItems: "center",
        width: '90%',
        margin: '5%',
        fontFamily: 'Sydney',
        height: '50%'
      },
      middleImage: {
        alignItems: "center",
        aspectRatio: 0.8,
        alignSelf: "stretch",
        height: "100%",
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        borderRadius: Themes.light.shadows.shadowRadius + 10,
      },
      nameText: {
        position: "absolute",
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        marginLeft: '5%',
        top: 0,
        fontSize: 32
      },
      descriptionText: {
        position: "absolute",
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        marginLeft: '5%',
        fontSize: 18,
        bottom: 0
      },
      profileView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start'
      },
    statusView: {
        display: "flex",
        flexDirection: "column",
        width: '90%',
        backgroundColor: Themes.light.bgSecondary,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        borderRadius: Themes.light.shadows.shadowRadius + 15,
        height: '20%',
        justifyContent: "center",
        marginTop: '5%'
    },
    hottestTake: {
        fontFamily: "Sydney",
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '5%'
    },
    play: {
        height: '10%',
        width: '10%',
        aspectRatio: 1,
        marginTop: '5%',
        marginBottom: '5%'
    },
    audio: {
        height: '40%',
        width: '60%',
        marginTop: '5%',
        marginBottom: '5%'
    },
    player: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
});

export default MiddleProfile