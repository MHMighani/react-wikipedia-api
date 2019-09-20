import React,{Component} from 'react'
import SearchField from './forms/SearchField'

class Api extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[],
      word:' '
    }
  }

  search = word => {
    if(word===""){
      return
    }
    const url =
    'https://en.wikipedia.org/w/api.php?action=opensearch&search='+word+'&format=json&origin=*'

    fetch(url)
      .then(result=>result.json())
      .then(result=>{
        this.setState({
          data:result
        })
      })
  }

  render(){
    let { data } = this.state
    const word = this.props.searchWord
    let header = <li id="header">{data[0]}</li>
    let footer = ""
    let allResults = ""
    if(data.length!=0){
      allResults = data[1]
      footer = data[data.length-1]
      footer = footer.map((entry,index)=>{
        return(<li key={index}><a href={entry} target="_black">{allResults[index]}</a></li>)
      })
    }
    data = data.slice(2,data.length-1)
    let result = data.map((entry,index)=>{
      return(<li key={index}>{entry}</li>)
    })

    return(
      <div>
          <SearchField search={this.search}/>
          {header}
          <ul className="def">
            {result}
          </ul>
          <ul className="footer">
            {footer}
          </ul>
      </div>
      )
  }
}


export default Api
