import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator, Colors, Provider as PaperProvider } from 'react-native-paper';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { COLOR_PALETTE } from '../../themes';
import { scale } from '../../utils/Scale';

const Home = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
  console.log(name)
      // Fetch age
      const ageResponse = await axios.get(`https://api.agify.io?name=${name}`);
      const age = ageResponse.data.age;
  
      // Fetch gender
      const genderResponse = await axios.get(`https://api.genderize.io?name=${name}`);
      const gender = genderResponse.data.gender;
  
      // Fetch country
      const countryResponse = await axios.get(`https://api.nationalize.io?name=${name}`);
      let country = 'Unknown';
      if (countryResponse.data.country && countryResponse.data.country.length > 0) {
        // Assuming the country with highest probability is the guessed country
        country = countryResponse.data.country[0].country_id;
      }
  
      setUserData( [{value:age,label:'Age'}, {value:gender,label:"Gender"}, {value:country,label:"Country"} ]);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({item}) => {
    console.log('renderItem', item);
    return(
        <View style={{backgroundColor:COLOR_PALETTE.accentgray,marginHorizontal:scale(10),marginVertical:scale(10),minHeight:scale(70),width:scale(150),justifyContent:'center',borderRadius:10,}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

            <Text style={{color:'#eee',fontSize:14,fontWeight:'800',fontStyle:'normal'}}>{`${item?.label} : `}</Text>
            <Text style={{color:"#eee",fontSize:14,fontWeight:'800'}}>{item?.value}</Text>
            </View>
            <View style={{position:'absolute',left:70,bottom:0}}>
            <LottieView
          source={require('../../assets/lottie/man.json')}
          autoPlay
          loop
          style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 20 }}
        />
            </View>

        </View>
    )
  }
  
if(loading){
    return(
        <View style={styles.containerLoading}>
            <LottieView
          source={require('../../assets/lottie/loading.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
        />
        </View>
    )
}
 else{
    return (
        <PaperProvider>
         
          <View style={styles.container}>
          <View>

<LottieView
  source={require('../../assets/lottie/profiler.json')}
  autoPlay
  loop
  style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
/>
</View>
<View style={{marginVertical:scale(40)}}>
{userData ? <FlatList 
          data={userData}
          renderItem={renderItem}
          horizontal={true}
          />:null}
</View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: 'white' }}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Enter name"
              placeholderTextColor="#999"
            />
            <Button title="Search Information" onPress={fetchData} color="#6200ee" />
            
          
            {/* {userData ?  <View>
                <Text style={{ color: 'white', marginTop: 20 }}>Guessed Age: {userData?.age}</Text>
                <Text style={{ color: 'white' }}>Guessed Gender: {userData?.gender}</Text>
                <Text style={{ color: 'white' }}>Guessed Country: {userData.country}</Text>
              </View> :null} */}
       
    
          </View>
        </PaperProvider>
      );
 }
};

export default Home;
const styles = StyleSheet.create({
    container:{ flex: 1, 
        backgroundColor: '#121212',
         padding: 20,
         },
    containerLoading:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000'
    }
})