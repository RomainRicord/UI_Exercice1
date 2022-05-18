import ListItemComponent from './ListItemComponent'

const MapComponent = (props) => {

    const {filteredDataSource} = props

    return(
        filteredDataSource.map((e,k) => {
            return(<ListItemComponent k={k} name={e.name} subtitle={e.subtitle} />)
          })
    )

}

export default MapComponent