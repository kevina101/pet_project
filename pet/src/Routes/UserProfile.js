import React, {Component} from 'react';
import Home from './Home';

class userProfile extends Component {
    constructor(props){
        super(props);

        this.setState({
            UserImage:""
        
        })
    }
 
    render(){
        return(
            <div>
                Hi I'm a user and I favorite dogs I'm thinking of getting. 
    

                </div>
        )
    }
}

export default userProfile;