import {useState,useEffect} from 'react'
import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {SearchBar} from '@rneui/base'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './src/component/HeaderComponent';
import MapComponent from './src/component/MapComponent';

const App = () => {

  const [search, setSearch] = useState('');

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }

  const list = require("./assets/data.json")

  useEffect(()=> {
    setFilteredDataSource(list);
    setMasterDataSource(list);
  },[])

  return (
    <SafeAreaProvider>
    <HeaderComponent/>
    <SearchBar  placeholder="ex. John DOE"
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}
      inputContainerStyle={{
        flexDirection:'row-reverse'
      }}
      />
      <ScrollView>
        <MapComponent filteredDataSource={filteredDataSource} />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App