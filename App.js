import {useState} from 'react'
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

const App = () => {

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Appli Mobile P1'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Appli Mobile P2'
    },
    {
      name: 'Michael Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Appli Web P1'
    },
  ]

  const getavatarcharacter = (name) => {
    return name.charAt(0) + name.split(' ')[1].charAt(0)
  }

  return (
    <SafeAreaProvider>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Apprenants de La Manu', style: { color: '#fff' } }}
    />
    <SearchBar  placeholder="ex. John DOE"
      onChangeText={updateSearch}
      value={search}/>
      {
        list.map((l, i) => {
          return(<ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          ><View style={{width:60,height:60,backgroundColor:'black',borderRadius:60,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:20}}>{getavatarcharacter(l.name)}</Text>
            </View>
            <View style={{display:'flex',flex:1,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
              <View style={{display:'flex'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{l.name}</Text>
              <Text style={{fontSize:20}}>{l.subtitle}</Text>
              </View>
              <Text>></Text>
            </View>
            </ListItem>)
        })
      }
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