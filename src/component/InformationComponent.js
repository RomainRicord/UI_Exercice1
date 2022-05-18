import {View,Text} from 'react-native'

const InformationComponent = (props) => {

    const {name,subtitle} = props

    return(<View style={{display:'flex'}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>{name}</Text>
    <Text style={{fontSize:20}}>{subtitle}</Text>
    </View>)
}

export default InformationComponent