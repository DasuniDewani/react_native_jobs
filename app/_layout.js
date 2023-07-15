import {Stack} from 'expo-router';
import { useCallback } from 'react';
import {useFonts} from 'expo-font';
//It's worth noting that the useFonts hook is specific to Expo-based projects.
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    /**The useFonts hook returns an array with a boolean value representing 
     * whether the fonts have finished loading (fontsLoaded). 
     * In your example, this value is destructured using array destructuring. */

    const [fontsLoaded] = useFonts({ // pass an object into the code
        DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync(); //this hides the splash screen or loading indicator that is displayed when the app is launched
            // we only want to see the homw page, if the fonts have been loaded
            //The await keyword is used before SplashScreen.hideAsync() to ensure that the hiding of the splash screen is completed before moving forward.

            //The useCallback hook is used to memoize the onLayoutRootView function, which means that it will only be recreated if the fontsLoaded value changes.
            // This optimization can improve performance by preventing unnecessary re-rendering of components that rely on this function.
        }
    },[fontsLoaded])

    if(!fontsLoaded) return null; //This can be useful to prevent rendering the Stack component until the fonts have loaded.

    return <Stack onLayout={onLayoutRootView}/>;

}
export default Layout;

/**
 * Loading fonts asynchronously means that the font loading 
 * process occurs in the background while other parts of your 
 * app can continue to render and function. This is important
 * because font files can be relatively large, and if the loading 
 * process were synchronous (blocking), it could cause delays and 
 * freeze the app's user interface until the fonts are fully loaded.

    By using the useFonts hook, you can initiate the font 
    loading process and continue rendering your app's components 
    and UI elements. Once the fonts are loaded, you can apply them
    to specific components, texts, or styles within your app.
 */