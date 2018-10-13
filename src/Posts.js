import React, {Component} from 'react'
// import Navigation from './Navigation'
import axios from 'axios';
import {Link} from "react-router-dom"

class Posts extends Component {
   constructor(props){
       super(props)

      
       this.state = {
           posts: []
       }

       console.log(props)
   }

   componentWillMount() {
       axios
       .get('https://jsonplaceholder.typicode.com/posts')
       .then(response => this.setState({posts: response.data}))
   }
   

   
    render() {
        return (
            <div>
               
                <h1>Posts!</h1>
                <ul>
                    {
                        this.state.posts.map(post=> {
                            return(
                                <li>
                                    <Link to={{
                                        pathname: `posts/${post.id}`,
                                        state: {post}
                                    }}>
                                     {post.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Posts