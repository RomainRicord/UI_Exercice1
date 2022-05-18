import {View,Text} from 'react-native'

const AvatarComponent = (props) => {

    const getavatarcharacter = (name) => {
        console.log(name)
    
        if(name == null){
          return "OO"
        }
    
        if (typeof(name) === 'undefined'){
          return "OO"
        }
    
        
        return name.charAt(0) + name.split(' ')[1].charAt(0)
        
      }

    const {name} = props

    return(<View style={{width:60,height:60,backgroundColor:'black',borderRadius:60,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:20}}>{getavatarcharacter(name)}</Text>
        </View>)
}

export default AvatarComponent