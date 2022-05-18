import InformationComponent from "./InformationComponent"
import AvatarComponent from "./AvatarComponent"
import {View} from 'react-native'
import { ListItem } from "react-native-elements"
import Icon from 'react-native-vector-icons/Ionicons'

const ListItemComponent = (props) => {

    const {i,name,subtitle} = props

    return(<ListItem
        key={i}
        title={name}
        subtitle={subtitle}
        bottomDivider
      ><AvatarComponent name={name}/>
        <View style={{display:'flex',flex:1,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
          <InformationComponent name={name} subtitle={subtitle} />
          <Icon name="ios-arrow-forward-circle" size={30} color="#000000"/>
        </View>
        </ListItem>)    
}

export default ListItemComponent