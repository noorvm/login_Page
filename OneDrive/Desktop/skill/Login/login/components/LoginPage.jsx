import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./LoginPage.css"


function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function check(e, username, password){
        e.preventDefault()

        try {
            const response =await fetch("http://127.0.0.1:8000/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const result = await response.json();

            if(!response.ok){
                const errorMessage = result.detail || `Login failed (${response.status})`;
                throw new Error(errorMessage);
            }
            
            alert(result.message);
            localStorage.setItem('username', result.data);
            window.location.href = "/UserPage"


        } catch (error) {
            console.log("login Failed ",error);
            console.error("Login Error",error)
            alert(error.message);
        }

    }

    return(
        <div className="div1">
            <form onSubmit={(e)=>check(e, username, password)}>
                <input 
                    placeholder="user name"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br />
                <input 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Login</button><br />
                <p>New user? <Link to="/SignUp">click here to register</Link> </p>
            </form>
        </div>
    );

}

export default LoginPage;