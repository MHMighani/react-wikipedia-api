import React,{Component} from 'react'

class SearchField extends Component{
  constructor(props){
    super(props)

    this.initialState = {
      word:""
    }
    this.state = this.initialState
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({word:value})
  }

  submitForm = () => {
    this.props.search(this.state.word)
    // this.setState(this.initialState)
  }

  render(){
    return(
      <form>
        <input id="searchbar" autoFocus type="text" name="word" placeholder="type your word" onChange={this.handleChange}></input>
        <input id="button" type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default SearchField
