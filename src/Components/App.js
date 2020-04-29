import React from 'react'
import Search from '../Components/SearchBar'
import unsplash from '../api/unsplash'
import ImageList from '../Components/ImageList'
class App extends React.Component{

    state = {
        images : []
    }

    onSubmitChange = async (term) => {
         const response = await unsplash.get('/search/photos',{
             params: {
                 query: term
             }
         })
         
         this.setState({ images: response.data.results })
         
    }
    render(){
        return (
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <Search onSubmit = {this.onSubmitChange} />
                <br />
                <ImageList images = { this.state.images }/>        
            </div>
        )
    }
}

export default App;
