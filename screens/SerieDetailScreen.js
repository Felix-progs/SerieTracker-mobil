import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native';


function SerieDetailScreen({route}) {

  const { series } = route.params;
  

 
  return (
    <View>
      <FlatList
      data={series}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>Säsong {item.season}, avsnitt {item.episode}</Text>
          <Text>{item.seen ? 'Sedd' : 'Ej sedd'}</Text>
        </View>
      )}
    />
    </View>
  );
}


export default SerieDetailScreen;