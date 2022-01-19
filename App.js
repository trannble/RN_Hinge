import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Platform, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require("./assets/Icons/menu_light.png")} style={styles.topIcon, styles.topImage}/>
        <Text style={styles.topIcon}>ensom</Text>
        <Image source={require("./assets/Icons/sun.png")} style={styles.topIcon, styles.topImage}/>
      </View>

      <View style={styles.middleView}>
        <View style={styles.profileView}>
          <Image source={require("./assets/Profiles/mtl.jpg")} style={styles.middleImage}/>
          <Text style={styles.nameText}>MTL</Text>
          <Text style={styles.descriptionText}>2 miles away</Text>
        </View>
      </View>

      <View style={styles.statusView}>
        <Text style={styles.hottestTake}>My hottest take</Text>
        <View style={styles.player}>
          <Image source={require("./assets/Icons/player_light.png")} style={styles.play}></Image>
          <Image source={require("./assets/Icons/audio_waveform_light.png")} style={styles.audio}></Image>
        </View>
      </View>

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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    flexDirection: "column",
    alignItems: 'center'
  },
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
  middleView: {
    alignItems: "center",
    width: '90%',
    margin: '5%',
    fontFamily: 'Sydney',
    height: '50%'
  },
  middleImage: {
    alignItems: "center",
    aspectRatio: 0.9,
    alignSelf: "stretch",
    height: "95%",
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
    justifyContent: 'flex-start',
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
    justifyContent: "center"
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
  }
});
