import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two password didn't match")
            return
        }
        if(password < 6){
            setError("Password mest be 6 characters or longer.");
            return;
        }
        createUserWithEmailAndPassword(email, password);
        // setEmail('')
        // setPassword('')
        // setConfirmPassword('')
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign up" />
            </form>
            <p>
                Already have an account? <Link className='form-link' to='/login'>Login</Link>
            </p>
            </div>
        </div>
    );
};

export default SignUp;