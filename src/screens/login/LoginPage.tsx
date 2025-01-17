import { useState } from "react"
import LoginForm from "./components/LoginForm"
import RegisterUser from "./components/RegisterForm"

const LoginPage = () => {
    const [loginToggle,setLoginToggle] = useState<"login" | "register">("login")
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        {loginToggle === "login" ? <LoginForm setLoginToggle={setLoginToggle}/> : <RegisterUser setLoginToggle={setLoginToggle}/>}
        
    </div>
  )
}

export default LoginPage