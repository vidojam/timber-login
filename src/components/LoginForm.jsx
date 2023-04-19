import { useState } from "react";
import {initializeApp} from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form  from "react-bootstrap/Form"
import Button  from "react-bootstrap/Button"

const firebaseConfig = {
  apiKey: "AIzaSyAGRnov-HYpriShVR_kn65ib8ZOQ5Al70U",
  authDomain: "timber-login-jt.firebaseapp.com",
  projectId: "timber-login-jt",
  storageBucket: "timber-login-jt.appspot.com",
  messagingSenderId: "664189379342",
  appId: "1:664189379342:web:0f9c79b81d1e969361ad5f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LoginForm() {

  const[email, setEmail]= useState('');
  const[password, setPassword] = useState('');
  const[user, setUser]= useState()

const handleLogin = async (e) => {
  e.preventDefault()
  const response = await signInWithEmailAndPassword(auth, email, password)
    .catch (err => alert(err))
    setUser(response.user);
}
  
if(user) {
  return <h2>Welcome User!</h2>
}

  return (
    
    <>
    <Form onSubmit={handleLogin}>
      <Form.Group>
        <Form.Label>Email.Address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter Email"
          value={email} onChange={ e => setEmail(e.target.value) }/>
          <Form.Text>We'll never share your email with anyone else</Form.Text> 
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter Password" 
        value={password} onChange={ e => setPassword(e.target.value) }/>
      </Form.Group>

      <Form.Group>
        <Button 
        variant="success" 
        type="submit"
        size="lg">Login</Button>
      </Form.Group>
    </Form>
    </>
  )
}