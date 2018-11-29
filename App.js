import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyDuEbh-mu7VKc4bSs4_uGnxvlD0uLXUl6I",
  authDomain: "react-firebase-8b955.firebaseapp.com",
  databaseURL: "https://react-firebase-8b955.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';


export default class App extends React.Component 
{
constructor(props) {
super(props)

this.state = ({
email:'',
password:''
})
}

signUpUser = (email, password) => 
{

  try{
    if(this.state.password.length < 6)
    {
      alert("Please enter atleast 6 character")
      return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  catch(error) {

    console.log(error.toString())
  }

}

loginUser = (email, password) => {
try{ 
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user)
{
  console.log(user)

})
}
catch(error) {

console.log(error.toString ())

}
}

render()
 {
    return (
      <Container>
      <Form>
      <Item>
      <Label> Email </Label>
      <Input
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={(email) => this.setState({email})}
      />
      </Item>

      <Item>
      <Label> Password </Label>
      <Input
      secureTextEntry={true}
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={(password) => this.setState({password})}
      
      />
       </Item>

      <Button style = {{marginTop: 10}}
      full
      rounded
      success
      onPress={()=> this.loginUser(this.state.email,this.state.password)}

      >
      <Text style = {{ color: 'white'}}>Login</Text>
      </Button>

      <Button style = {{marginTop: 10}}
      full
      rounded
      primary
      onPress={()=> this.signUpUser(this.state.email,this.state.password)}
      >
      <Text style = {{ color: 'white'}}>Sign up</Text>
      </Button>
      </Form>
      </Container>
    
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
