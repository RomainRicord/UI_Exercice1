import ListItemComponent from './ListItemComponent'

const MapComponent = (props) => {

    const {filteredDataSource} = props

    return(
        filteredDataSource.map((l, i) => {
            return(<ListItemComponent i={i} name={l.name} subtitle={l.subtitle} />)
          })
    )

}

export default MapComponent