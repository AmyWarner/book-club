import firebase from 'firebase'

const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');


const login= ()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log("User Sign In");
          }).catch(function(error) {
           console.error(error);
          });
    }

export default login