
import {SearchBar} from '@rneui/base'

const SearchBarComponent = (props) => {

    const {search,masterDataSource,setFilteredDataSource,setSearch} = props

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

    return(
        <SearchBar  placeholder="ex. John DOE"
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}/>
    )
}

export default SearchBarComponent