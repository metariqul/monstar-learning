import { Component } from "react";

class SearchBox extends Component{
    render(){
        return  <input type="search" className={this.props.className} placeholder= {this.props.pleaceholder} onChange={this.props.onChangeHandler} />
    }
}

export default SearchBox;