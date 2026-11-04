import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function UserPage(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        console.log(username);

    },[]);

    function exitFunction() {      

        localStorage.clear();

        navigate('/');
        console.log(localStorage.length);

    };
    

    return(
        <div>
            <h3>hello {username}</h3>
            <button onClick={exitFunction}>Log out</button>
            
        </div>
    );
}

export default UserPage;