import { useState } from 'react';

export const LoginContainer = ({handleLogin}) => {
    const [ values, setValues] = useState({
        userName: '',
        password: '',
        isError: '',
    });
    const handleClick = () => {
        if(values.userName=== 'dilip' && values.password === 'dilip@123') {
            handleLogin();
        } else {
            setValues({ ...values, isError: "Invalid user name and password"})
        }
    }
    const handleChange =(e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <h1>Login in</h1>
            <br/> 
            <input type="text" className="form-control" placeholder="enter the user name" name="userName" value={values.userName} onChange={handleChange} />
            <br/>
            <input type="password" className="form-control" placeholder="enter the password" name="password" value={values.password} onChange={handleChange}/>
            <br/>
            <button className="btn btn-primary float-right btn-lg"onClick={handleClick}>Login</button>
            <br/>
            <br/>
            <br/>
            {values.isError ? <div className="alert alert-danger" role="alert">
                {values.isError}</div> : null}
        </div>
    )
}