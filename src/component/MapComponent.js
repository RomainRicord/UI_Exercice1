import {View} from 'react-native'
import { ListItem } from 'react-native-elements'
import AvatarComponent from './AvatarComponent'
import InformationComponent from './InformationComponent'
import Icon from 'react-native-vector-icons/Ionicons'

const MapComponent = (props) => {

    const {filteredDataSource} = props

    return(
        filteredDataSource.map((l, i) => {
            return(<ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            ><AvatarComponent name={l.name}/>
              <View style={{display:'flex',flex:1,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
                <InformationComponent name={l.name} subtitle={l.subtitle} />
                <Icon name="ios-arrow-forward-circle" size={30} color="#000000"/>
              </View>
              </ListItem>)
          })
    )

}

export default MapComponent