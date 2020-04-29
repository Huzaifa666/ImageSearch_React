import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    
    state = {
        text : ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.text)
    }

    render(){
    return (
        
        <div className = "ui segment">
            <form className = "ui form" onSubmit = {this.onFormSubmit}>
                <div className = "field" >
                    <label htmlFor = "input">Image Search</label>
                    <input type = "text" value = {this.state.text } id = "input" onChange = {(e) => this.setState({ text : e.target.value })} />
                </div>
            </form>
        </div>
        
    )
  }
}

export default SearchBar