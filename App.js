import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Platform, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import NavBar from './NavBar';
import MiddleProfile from './MiddleProfile';
import BottomNav from './BottomNav';

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
      <NavBar/>
      <MiddleProfile/>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    flexDirection: "column",
    alignItems: 'center'
  }
});
