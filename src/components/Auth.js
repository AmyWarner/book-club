import React from 'react';
import firebase from 'firebase';
import Login from './Login';
class Auth extends React.Component {
    state = {user:null}
    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({user})
          });
    } 
    render(){
        return this.state.user ? this.props.children : <Login /> 
    }
}
export default Auth