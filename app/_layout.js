import { Stack } from "expo-router";
import { useCallback } from "react"; 
import { useFonts } from "expo-font"; //to use custom fonts
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    //loading font into a hook
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    //async callback function is used, we only show homepage when our fonts are loaded 
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]) //dependancy array

    //no fonts loaded we return null
    if(!fontsLoaded) return null;

    //ensured that the font bee loaded
    return <Stack onLayout = {onLayoutRootView} />;
}

export default Layout;