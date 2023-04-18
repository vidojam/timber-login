import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import { useState } from "react"

export default function Home () {
  const [isMember, setIsMember] = useState(true);

  return (
    <>
    {
      (isMember)
      ?<Login />
      :<Signup />
    }

    </>
  )
}