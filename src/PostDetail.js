import React, {Component} from 'react'
// import Navigation from './Navigation'


class PostDetail extends Component {

    constructor(props){
        super(props)
    
        console.log(props)
        this.state ={
            post: props.location.state.post
        } 


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

export default PostDetail