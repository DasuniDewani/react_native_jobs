import {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView }  from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {COLORS,icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome}  from  '../components';

const Home = () => {
// define router
const router = useRouter();
    return (
        <SafeAreaView style = {{flex:1, backgroundColor:COLORS.lightWhite}}>
            {/* <Text>home</Text> */}
            <Stack.Screen
                options=
                {{
                    headerStyle: {backgroundColor:COLORS.gray2},
                    headerShadowVisible:false,
                    headerLeft:()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimention = "60%"/>
                    )
                    ,
                    headerRight:()=>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimention = "100%"/>
                    ),headerTitle:""
                }}                           
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                    <View 
                    style={{
                        flex:1,
                        padding:SIZES.medium
                    }}>
                        <Welcome/>
                        <Popularjobs />
                        <Nearbyjobs/>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;