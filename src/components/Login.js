import React from "react";
import '../App.css'
// import loggedReducer from '../reducers/isLogged'
// import logIn from "../Action";
import { useSelector, useDispatch } from 'react-redux'
import { LOG_IN } from '../actions'
import axios from "axios";
import { Navigate } from 'react-router-dom'

//material UI
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// //bootstrape
import { Form , Button} from 'react-bootstrap'



function Login(){
    const dispatch= useDispatch()
    const logged = useSelector((state) => state.myLogin)
    const [formData, setFormData]= React.useState({
        username: "",
        password:""
    })
    function handleChnage(event){
        const {name, value }= event.target
        setFormData(preFormData => ({
            ...preFormData,
            [name] : value
        }))
        
    } 
       

    const [token, setToken] = React.useState("0")
    const element = ""
    function handleSubmit(event){
        event.preventDefault();
        axios({
            method:'POST',
            url:'https://fakestoreapi.com/auth/login',
            headers: {
                'Content-Type': 'application/json'
              },
              data: {
                username: "mor_2314",
                password: "83r5^_"}
            }).then(dispatch(LOG_IN()))
            const element =  logged ? <Navigate to="/categories"/> : <Navigate to="/"/>
            
    }

    // material UI


    return logged ?<Navigate to="/categories"/> :(
        <div className="form-container">
            <div className="container" style={{width:"32%"}}>

    
              
              <Form onSubmit={handleSubmit} className="form">
              <h1>LOGIN</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                  <Form.Control type="text" placeholder="Enter Your Name" className="name-field"/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                 
                  <Form.Control type="password" placeholder="Enter Your Password" className="pass-field"/>
                </Form.Group>
                <br />
               <Button variant="outline-primary" type="submit"  style={{color:"#fff",fontSize:"20px", borderColor:"white", width:"100%"}}
                >
                  Login
                </Button>{' '}
              </Form>

              
            </div>
            
        </div>
    )
}

export default Login;