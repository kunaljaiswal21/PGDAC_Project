import React from 'react';
import axios from 'axios';
//import '../../css/wiseDaily.css'
// import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Card,CardBody,CardFooter,CardHeader,Col,FormGroup,Input,Label} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "userName":"",
      "password":"",
      "role":"",
      "email":"",
      "dateOfBirth":"",
      "gender":"",
      "contact":"",
      "address":"",
      "confirmPassword":""
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
  }
  handleChangeFromDate = (startdate) => {
    var dateString = startdate;
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format("YYYY-MM-DD");
    this.setState({
      dateOfBirth: momentString,
    });
  };
  handleCancel =() =>{
    this.props.history.push('/');
  }
  handleSubmit = () =>{
    if(this.state.userName==="" || this.state.password==="" || this.state.email==="" ||this.state.dateOfBirth===""
    || this.state.gender==="" || this.state.contact==="" || this.state.address==="")
    {
      toast.error("Please Enter All Mandatory Field", { position: toast.POSITION.TOP_CENTER })
    }
    else
    {
         const obj = {
          "userName":this.state.userName,
          "password":this.state.password,
          "role":"customer",
          "email":this.state.email,
          "dateOfBirth":this.state.dateOfBirth,
          "gender":this.state.gender,
          "contact":this.state.contact,
          "address":this.state.address
         }
         axios.post('/customer', obj)
         .then(res => {
           if (res.status === 200) {
             toast.success("SuccessFully Register",{position:toast.POSITION.TOP_CENTER})
             this.props.history.push('/');
            toast.success("SuccessFully Register",{position:toast.POSITION.TOP_CENTER})
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
               <b>Sign Up Here</b>
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
                <Input type="text" name="userName" value={this.state.userName} onChange={this.onChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Email:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="email" value={this.state.email} onChange={this.onChange} ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Password<span className="requiredRed">*</span>:</Label>
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
                <Label >Dob<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
              <DatePicker name="fromDate" className="dateAlignment  form-control"  value={this.state.dateOfBirth} onChange={this.handleChangeFromDate}/>
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
            <FormGroup row>
            <Col md="3"></Col>
            <Col md="2">
              <Label style={{color:"black"}}>Gender<span style={{color: "red"}}>*</span>:</Label>
            </Col>
            <Col md="4" style={{textAlign:"center"}}>
            <FormGroup row>
                  <Col md="4" style={{textAlign:"center"}}>
                      <Input type="radio" name="gender" id="Male"  value="Male" onChange={this.onChange}/>
                      <Label style={{color:"black"}}>Male</Label>
                  </Col>
                  <Col md="4" style={{textAlign:"center"}}>
                      <Input type="radio" name="gender" id="Female" value="Female" onChange={this.onChange}/>
                      <Label style={{color:"black"}}>Female</Label>
                  </Col>
            </FormGroup>
            </Col>                  
          </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Address<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="address"  value={this.state.address} onChange={this.onChange} required></Input>
              </Col>
            </FormGroup>
          </CardBody>
          <CardFooter style={{textAlign: "center",padding:"0%"}}>
            <Button type="submit" size="sm" className="DefaultButton" onClick={this.handleCancel} style={{ width: "10%" }}>Cancel</Button>
            <Button type="submit" size="sm" className="DefaultButton"  onClick={this.handleSubmit} style={{ width: "10%",marginLeft:"2%" }}>Register</Button>

          </CardFooter>
      </Card>
    )
  }
}


export default Registration;
