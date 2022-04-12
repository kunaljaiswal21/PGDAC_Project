import React from 'react';
import axios from 'axios';
//import '../../css/wiseDaily.css'
// import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Card,CardBody,CardFooter,CardHeader,Col,FormGroup,Input,Label} from 'reactstrap';

class LoanForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'id':localStorage.id,
      'userName':localStorage.userName,
      'password':localStorage.password,
      'email':localStorage.email,
      'address':localStorage.address,
      'contact':localStorage.contact,
      'dateOfBirth':localStorage.dateOfBirth,
       'gender':localStorage.gender,
       "amount":0,
       "tennureInMonth":0,
       "adharCardNumber": "",
       "employmentType": "",
       "status": "Pending",
       "loanType": "",
       "ImageUrl":""
    }
  }
  onChangeFile = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }
  fileSelectedHandler = event => {
    console.log(event.target.files[0])
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () =>{
    if(this.state.amount===0 || this.state.tennureInMonth===0 || this.state.adharCardNumber===""
    ||this.state.employmentType==="" ||this.state.loanType==="")
    {
        toast.error("Please Enter All Mandatory Field", { position: toast.POSITION.TOP_CENTER })
    }
    else
    {
         const obj = {
          "amount":this.state.amount,
          "customer":{
            "id":localStorage.id
          },
          "tennureInMonth":this.state.tennureInMonth,
          "adharCardNumber":this.state.adharCardNumber,
          "employmentType":this.state.employmentType,
          "status": "Pending",
          "loanType":this.state.loanType,
         }
         axios.post('/loanDetails', obj)
         .then(res => {
           if (res.status === 200) {
             toast.success("Loan Apply Successfully",{position:toast.POSITION.TOP_CENTER})
             this.setState({
              "amount":0,
              "tennureInMonth":0,
              "adharCardNumber": "",
              "employmentType": "",
              "status": "Pending",
              "loanType": "",
             })
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
               <b>Loan Form</b>
          </CardHeader>
          <CardBody>
            {/* <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore}/> */}
            <ToastContainer autoClose={3000} />
            <FormGroup row>
               <Col md="3"></Col> 
              <Col md="2">
                <Label >Name:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="userName" value={this.state.userName} disabled></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Email:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="email" value={this.state.email} disabled></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Dob:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="dateOfBirth" value={this.state.dateOfBirth} disabled></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Mobile No.:</Label>
              </Col>
              <Col md="4">
                <Input type="number" name="shopMobileNo" value={this.state.contact} disabled></Input>
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
                      <Input type="radio" name="gender" id="Male"   value="Male" checked={this.state.gender==="Male"?true:false}/>
                      <Label style={{color:"black"}}>Male</Label>
                  </Col>
                  <Col md="4" style={{textAlign:"center"}}>
                      <Input type="radio" name="gender" id="Female"  value="Female" checked={this.state.gender==="Male"?false:true}/>
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
                <Input type="text" name="address" value={this.state.address} disabled></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Type of Employment<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="select" name="employmentType" value={this.state.employmentType} onChange={this.onChange} >
                    <option value="">Select One Option</option>
                    <option value="Salaried person">Salaried person</option>
                    <option value="Self-employed">Self-employeed</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label>Loan Type<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="select" name="loanType" value={this.state.loanType} onChange={this.onChange}>
                    <option value="">Select One Option</option>
                    <option value="Home">Home</option>
                    <option value="Car">Car</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Gold">Gold</option>
                    <option value="Personal">Personal</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Required Amount<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="number" name="amount"  value={this.state.amount} onChange={this.onChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Tenure in Month<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="number" name="tennureInMonth"  value={this.state.tennureInMonth} onChange={this.onChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
              <Col md="2">
                <Label >Adhar Card no.<span className="requiredRed">*</span>:</Label>
              </Col>
              <Col md="4">
                <Input type="text" name="adharCardNumber" value={this.state.adharCardNumber} onChange={this.onChange} required></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3"></Col>
            <Col md="2">
              <Label>Select Document<span className="requiredRed">*</span>:</Label>
            </Col>
            <Col md="4">
              <Input type="file" name="ImageUrl" onChange={this.onChangeFile}></Input>
            </Col>
          </FormGroup>
          </CardBody>
          <CardFooter style={{textAlign: "center",padding:"0%"}}>
            <Button type="submit" size="sm" className="DefaultButton"  onClick={this.handleSubmit} style={{ width: "10%",marginLeft:"2%" }}>Apply</Button>

          </CardFooter>
      </Card>
    )
  }
}


export default LoanForm;
