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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SerieDetail', { series })}
      >
        <Text style={styles.buttonText}>Gå till detaljer</Text>
      </TouchableOpacity>
      <FlatList
      data={series}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
       <View style={styles.serieItem}>
      <Text style={styles.serieText}>{item.title}</Text>
      </View>
  )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: '#fff'},
    serieItem: {
    padding: 12,
    margin: 8,
    backgroundColor: '#064874',
    borderRadius: 8,
    },
    serieText:{
    fontSize: 16,
    color: '#fff'
    },
    button: { padding: 8, backgroundColor: '#064874', borderRadius: 8, alignSelf: 'center', marginBottom: 15 },
    buttonText: { color: '#fff' },
  });
  

export default SerieListScreen;