import {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Header,SearchBar} from '@rneui/base'
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './src/component/HeaderComponent';
import AvatarComponent from './src/component/AvatarComponent';
import InformationComponent from './src/component/InformationComponent';
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

  const list = [
    {
      name: 'Amy Farha',
      subtitle: 'Appli Mobile P1'
    },
    {
      name: 'Chris Jackson',
      subtitle: 'Appli Mobile P2'
    },
    {
      name: 'Michael Jackson',
      subtitle: 'Appli Web P1'
    },
    {
      name: 'Pascal Yop',
      subtitle: 'Appli Android P1'
    },
    {
      name: 'Romain Ricord',
      subtitle: 'Appli Android P1'
    },
    {
      name: 'Michel Jack',
      subtitle: 'Appli Android P1'
    },
    {
      name: 'Prénom nom',
      subtitle: 'Appli Android P1'
    },
    {
      name: 'Prénom nom',
      subtitle: 'Appli Android P1'
    }
  ]

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