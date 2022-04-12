 import React from 'react';
import DefaultLayout from './DefaultLayout'
import './DefaultAside'
import background_img from '../assets/img/banner-bg.png'
//import { Card } from 'antd';
import {Card,Input,Button,FormGroup,Label,Col} from 'reactstrap';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userName:"",
      password:""
    }
  }
  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
 }
 
handleRegistraton=()=>{
  this.props.history.push('/Registration')
}
handleSubmit=()=>{
  if(this.state.userName==="")
  {
    toast.error("Please Enter User Name", { position: toast.POSITION.TOP_CENTER })
  }
  else if(this.state.password==="")
    {
      toast.error("Please Enter Password", { position: toast.POSITION.TOP_CENTER })
    }
  else
  {
            const obj ={
              "userName":this.state.userName,
              "password":this.state.password,
              "role": "customer"
            }
            axios.post("/validate",obj)
                    .then(res => {
                      if(res.status===200)
                      {
                        console.log(res)
                        localStorage.setItem('id',res.data.id);
                        localStorage.setItem('userName',res.data.userName);
                        localStorage.setItem('password',res.data.password);
                        localStorage.setItem('email',res.data.email);
                        localStorage.setItem('address',res.data.address);
                        localStorage.setItem('contact',res.data.contact);
                        localStorage.setItem('dateOfBirth',res.data.dateOfBirth);
                        localStorage.setItem('gender',res.data.gender);
                        localStorage.setItem('role',res.data.role);
                        this.props.history.push('/Compmenu')
                      }
                    })
                    .catch(err => {
                      toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
                      this.setState({
                        userName:"",
                        password:""
                      })
                    })  
  }  
}
  render() {
    return (
      <Card style={{backgroundImage:`url(${background_img})`,width:"100%",height:"100%",margin:"0"}}>
        <div className="container p-3" style={{margin:"auto",marginTop:"200px", border:"1px solid black", backgroundColor:"white"}}>
           <div className="fadeIn zero col-md-12 mb-3">
         <p className="text-center"
              style={{color: "brown", fontSize: "3rem"}}>
              <b>ROYAL BANK</b>
          </p>
      </div>
      <ToastContainer autoClose={3000}/>
      <FormGroup row>
         <Col md="4">
           <Label>User Name:</Label>
         </Col>
         <Col md="8">
             <Input type="email" name="userName" placeholder="Please Enter UserName" value={this.state.userName} onChange={this.onChange}></Input>
         </Col>
      </FormGroup>
      <FormGroup row>
         <Col md="4">
           <Label>Password:</Label>
         </Col>
         <Col md="8">
             <Input type="password" name="password" placeholder="Please Enter Password" value={this.state.password} onChange={this.onChange}></Input>
         </Col>
      </FormGroup>
      <FormGroup style={{textAlign:"center"}}>
           <Button type="submit" size="sm"  style={{marginTop:"5%",backgroundColor:"green"}} onClick={(e)=>this.handleSubmit(this.state.email)}>Login</Button>
           <Button type="submit" size="sm"  style={{marginTop:"5%",marginLeft:"15%",backgroundColor:"red"}}   onClick={(e)=>this.handleRegistraton()}>Registration</Button>
       </FormGroup>


      <div className=" text-center fadeIn second" style={{margin:"auto"}}>
          <a className="navbar-brand" href="#">
              <br/> <span className="mr-4"
              style={{color: "#493085", fontSize:"medium"}}> <b>Online Bank Loan Management System</b>
          </span>
          </a>
      </div>
  </div>
  </Card>
    );
  }
}
export default Login;