import {useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import {useRouter} from 'expo-router';
import styles from './welcome.style';
import {icons, SIZES} from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {

  const router =  useRouter();
  const [activeJobType, setActivityJobType] = useState('full-time')
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList  //use flate list when you have more data to render
          data={jobTypes}
                //destructuring items
          renderItem={({ item }) => (  // this is acall back function which represent the items, how it looks like?
            <TouchableOpacity
              style = {styles.tab(activeJobType,item)}
              onPress={()=>{
                setActivityJobType(item);
                router.push('/search/${item}')
              }}
            >
              <Text style = {styles.tabText(activeJobType,item)}>{item}</Text> 
              {/* show the selected text and others are blurd */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome