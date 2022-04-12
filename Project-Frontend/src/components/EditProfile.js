import React from 'react';
import axios from 'axios';
//import '../../css/wiseDaily.css'
// import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Card,CardBody,CardFooter,CardHeader,Col,FormGroup,Input,Label} from 'reactstrap';

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "id":localStorage.id,
      "userName":localStorage.userName,
      "password":"",
      "role":localStorage.role,
      "email":localStorage.email,
      "dateOfBirth":localStorage.dateOfBirth,
      "gender":localStorage.gender,
      "contact":localStorage.contact,
      "address":localStorage.address,
      "oldPassword":"",
      "confirmPassword":""
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onCheckOldPassword = (e) =>{
    if(localStorage.password!=e.target.value)
    {
      toast.error("Password Does Not Match", { position: toast.POSITION.TOP_CENTER })
      this.setState({
        password:"",
      })
      document.getElementsByName("oldPassword")[0].value=""
    }
    else
    {
        this.setState({
            oldPassword:e.target.value
        })
    }
  }
  onCheckPassWord = (e) =>{
    if(this.state.password!=e.target.value)
    {
      toast.error("Password Does Not Match", { position: toast.POSITION.TOP_CENTER })
      this.setState({
        password:"",
      })
      document.getElementsByName("confirmPassword")[0].value=""
    }
    else
    {
        this.setState({
            confirmPassword:e.target.value
        })
    }
  }
  handleCancel =() =>{
    this.props.history.push('/Compmenu')
  }
  handleSubmit = () =>{
    if(this.state.userName==="" || this.state.password==="" ||this.state.confirmPassword==="" 
    ||this.state.oldPassword===""||  this.state.contact==="")
    {
      toast.error("Please Enter All Mandatory Field", { position: toast.POSITION.TOP_CENTER })
    }
    else
    {
         const obj = {
          "id":localStorage.id,
          "userName":this.state.userName,
          "password":this.state.password,
          "role":localStorage.role,
          "email":this.state.email,
          "dateOfBirth":this.state.dateOfBirth,
          "gender":this.state.gender,
          "contact":this.state.contact,
          "address":this.state.address
         }
         axios.put('/customer', obj)
         .then(res => {
           if (res.status === 200) {
             toast.success("Successfully Updated",{position:toast.POSITION.TOP_CENTER})
             document.getElementsByName("oldPassword")[0].value = ""
             document.getElementsByName("password")[0].value = ""
             document.getElementsByName("confirmPassword")[0].value = ""
           } else {
             toast.error(res.data.msg,{position:toast.POSITION.TOP_CENTER})
           }
         })
         .catch(err => {
          toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
        }) 
    }
  }
  render() {
    return (
      <Card>
         <CardHeader className="headerBold" style={{ backgroundColor: "cornflowerblue",textAlign:"center"}}>
               <b>Edit Profile</b>
          </CardHeader>
          <CardBody>
            {/* <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore}/> */}
            <ToastContainer autoClose={3000} />
            <FormGroup row>
               <Col md="3"></Col> 
              <Col md="2">
                <Label>Name<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="userName" value={this.state.userName} onChange={this.onChange} disabled></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Email:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="email" value={this.state.email} onChange={this.onChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Old Password<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="password" name="oldPassword" defaultValue={this.state.oldPassword} onBlur={this.onCheckOldPassword}> </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>New Password<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="password" name="password" value={this.state.password} onChange={this.onChange}> </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Confirm Password<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="password" name="confirmPassword" defaultValue={this.state.confirmPassword} onBlur={this.onCheckPassWord}> </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Mobile No.<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="number" name="contact" value={this.state.contact} onChange={this.onChange}></Input>
              </Col>
            </FormGroup>
          </CardBody>
          <CardFooter style={{textAlign: "center",padding:"0%"}}>
            <Button type="submit" size="sm" className="DefaultButton" onClick={this.handleCancel} style={{ width: "10%" }}>Cancel</Button>
            <Button type="submit" size="sm" className="DefaultButton"  onClick={this.handleSubmit} style={{ width: "10%",marginLeft:"2%" }}>Update</Button>

          </CardFooter>
      </Card>
    )
  }
}


export default EditProfile;
