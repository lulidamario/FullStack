import React, {Component} from 'react'
import Navigation from './Navigation'
import axios from 'axios'

class PostDetailAxios extends Component {

    constructor(props){
        super(props)
     
        this.state = {
            post: {}
        }


    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                id: this.props.match.params.id
            }
        }).then( response => this.setState({post: response.data[0]}))
    }

    render() {
        return (
            <div>
                <h3>Post: { this.state.post.id }</h3>
                <h1>Titulo{ this.state.post.title }</h1>
                <p>{ this.state.post.body }</p>
            </div>
        )
    }
}

export default PostDetailAxios