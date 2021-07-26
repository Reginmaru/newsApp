import React, {Component} from 'react'
import $ from 'jquery'

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            new: []
        }
    }
    componentDidMount = () =>{

        $.get("https://content.guardianapis.com/search?show-fields=thumbnail&show-elements=image&api-key=42f103de-03d3-43f5-9648-8ca105686ef3", (data) => {
          this.setState({new:data.response.results});
        })
      }

    render(){
        return(
            <div>
            <h1 id ='Heading'>25/07/2021</h1>
                <ul>
                    {this.state.new.map((N, index) =>
                        <body>
                            <h4 id = { 'body-' + index}>{this.state.new[index].webTitle}</h4>
                            <p id = {'type-' + index}>{  this.state.new[index].pillarName + " " + this.state.new[index].type }</p>
                            <div id = {'image-' + index}><img src={this.state.new[index].fields.thumbnail}></img></div>
                        </body>
                    )}
            
                </ul>
            </div>
        )
    }
}

export default News