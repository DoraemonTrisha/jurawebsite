
import React, {useState} from "react";
import "./ContactStyle.css";
export default function Contact(){
    const [user, setUser] = useState({goodName:"", email:"",password:""});
    const [error, setError] = useState({});

    const validation=() =>{
        let error = {};
        if (!user.goodName){
            error.goodName = "Please enter your good name";
        }
        if(!user.email){
            error.email = "Please enter a valid email address";
        }
        if(!user.password){
            error.password = "Please enter the correct password";
        }
        return error;
    };

    let name, value;
   
    const postUserData = (e) => {
        name= e.target.name;
        value= e.target.value;
        if (name === "goodName"){
            if (value.length === 0){
                setUser({...user, goodName: ""});
                setError({...error, goodName: "Please enter your good name"});
            }else{
                setUser({...user, goodName: value});
                setError({...error, goodName: ""});
            }
        }
        if (name === "email"){
            if (value.length === 0){
                setUser({...user, email: ""});
                setError({...error, email: "Please enter a valid email address"});
            }else{
                setUser({...user, email:value});
                setError({...error, email: ""});
            }
        }

        if (name === "password"){
            if (value.length === 0){
                setUser({...user, password: ""});
                setError({...error, password: "Please enter the correct password"});
            }else{
                setUser({...user, password:value});
                setError({...error, password: ""});
            }
        }
    }

    const Submit=(e) =>{
        e.preventDefault();
        setError(validation);
        console.log(user);
    }
    return(
    <React.Fragment>
        <div className="container">
            <h2 className="text-center text-capitalize">Contact Form</h2>
                <form>
                    <div className="form-group">
                        <label for="goodName">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" name="goodName" value={user.goodName} onChange={(e) => postUserData(e)} />
                       
                        <span style={{color: "red", margin: "auto", fontWeight: "bold"}}>
                            {error?.goodName}
                        </span>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={user.email} onChange={(e) => postUserData(e)} />
                       
                        <span style={{color: "red", margin: "auto", fontWeight: "bold"}}>
                            {error?.email}
                        </span>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" name="password" value={user.password} onChange={(e) => postUserData(e)} />
                        <span style={{color: "red", margin: "auto", fontWeight: "bold"}}>
                            {error?.password}
                        </span>
                    </div>
                    <div className="form-check form-group">
                       
                        <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="remember" />{" "}Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary my-4 px-4" onClick={Submit}>Submit</button>
                 </form>
        </div>
    </React.Fragment>
      
    )
}