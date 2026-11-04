import { useState } from "react";



function SignUp(){

    const [user, setUser] = useState({
        name:"",
        age:"",
        phoneNo:"",
        email:"",
        password:""
    })

    function handleChange(e){
        const {name, type, value, checked} = e.target;
        setUser((prev)=> ({
            ...prev,
            [name]:type ==="checkbox" ? checked:value
        }));
    }

    const add = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/user",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            });

            if(!response.ok){
                throw new Error(`server error ${response.status}`);
            }
            const data = await response.json();
            alert(data.message);
            window.location.href = "/"
            
        } catch (error) {
            console.log("Submission Failed",error);
            alert("Failed to regisetr");
        }
    };

    return (
        <div>
            <form onSubmit={add}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}
                /><br />
                <input
                    type="text" 
                    name="age"
                    placeholder="Age"
                    value={user.age}
                    onChange={handleChange}
                /><br /> 
                <input 
                    type="text"
                    name="phoneNo"
                    placeholder="Phone Number"
                    value={user.phoneNo}
                    onChange={handleChange}
                /><br />
                <input 
                    placeholder="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                /><br />
                <input 
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                /><br />
                <button type="submit" > register</button>
            </form>

        </div>
    );

}

export default SignUp;