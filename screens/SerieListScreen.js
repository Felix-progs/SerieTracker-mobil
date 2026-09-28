import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native'
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const API_URL = "http://10.0.2.2:5172/api/serie";



function SerieListScreen({navigation}) {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setSeries(data)) 
      .catch(error => console.log('Fel:', error)); 
  }, []);

  return (
    <View>
      <Text>SerieListScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SerieDetail',{series})}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
      <FlatList
      data={series}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => 
      <View>
      <Text>{item.title}</Text>
      </View>
    }
    />
    </View>
  );
}





export default SerieListScreen;