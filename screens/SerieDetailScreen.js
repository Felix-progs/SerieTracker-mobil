import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native';


function SerieDetailScreen({route}) {

  const { series } = route.params;
  

 
  return (
  <View style={styles.container}>
    <FlatList
      data={series}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.serieItem}>
          <Text style={styles.serieText}>{item.title}</Text>
          <Text style={styles.serieText}>Säsong {item.season}, avsnitt {item.episode}</Text>
          <Text style={styles.serieText}>{item.seen ? 'Sedd' : 'Ej sedd'}</Text>
        </View>
      )}
    />
  </View>
);


}
const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: '#fff'},
    header: {fontSize: 22, fontWeight: 'bold', marginBottom: 12},
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
  });




export default SerieDetailScreen;