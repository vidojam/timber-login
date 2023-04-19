import { useState } from "react";
import { Button } from "react-bootstrap";
import SignupForm from "./SignupForm.jsx";
import Login from "./Login.jsx";


export default function Home () {
  const [isMember, setIsMember] = useState(true);

  return (
    <>
    {
      (isMember)
      ?<Login />
      :<SignupForm />
    }
    <Button onClick={ () => setIsMember(!isMember) }>Switch Form</Button>

    </>
  )
}