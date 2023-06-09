import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export default function SignupForm() {
  const[email, setEmail]= useState("");
  const[password, setPassword] = useState("");
  const[user, setUser] = useState()

const handleSignup = async (e) => {
  e.preventDefault()
  const results = await createUserWithEmailAndPassword(auth, email, password)
    .catch(alert)
    setUser(results.user)
}

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider() // do grant permission to Google
  const results = await signInWithPopup(auth, provider)
    .catch(results.user)
}

if(user) {
  return <h2>Welcome user {user.email}</h2>
}


  return (
    <>
    <Form onSubmit={handleSignup}>
      <Form.Group classname="mb-3">
        <Form.Label>Email.Address</Form.Label>
        <Form.Control 
          type="email" placeholder="Enter Email"
          value={email}
          onChange={ e => setEmail(e.target.value)}/>
          <Form.Text>We'll never share your email with anyone else</Form.Text> 
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" placeholder="Enter Password" 
        onChange={ e => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Button 
        variant="success" 
        size="lg">Login</Button>
      </Form.Group>
    </Form>
    <Button onClick={signInWithGoogle}variant="dark" size="ls">Sign in with Google</Button>
    </>
  )
}