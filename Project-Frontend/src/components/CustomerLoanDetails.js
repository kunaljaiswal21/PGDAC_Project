import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';


class CustomerLoanDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:0,
      LoanDetail:[]
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentDidMount(){
  axios.get('/loanDetailsByCustomer/0')
        .then(res => {
          if(res.data.length>0)
            {
                this.setState({
                  LoanDetail:res.data
                })
            }
            else
            {
              this.setState({
                LoanDetail:[]
              })
            } 
            console.log(res)
        })
        .catch(err=>{
            toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
          }) 

}
handleSubmit = () =>{
        axios.get('/loanDetailsByCustomer/'+parseInt(this.state.id) )
        .then(res => {
          if(res.data.length>0)
            {
                this.setState({
                  LoanDetail:res.data
                })
            }
            else
            {
              this.setState({
                LoanDetail:[]
              })
            } 
            console.log(res)
        })
        .catch(err=>{
            toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
          })  
}
    render(){
      const tabledata = this.state.LoanDetail.map((ld,count)=>{
        return <tr key={ld.id} className="borderBottomTable">
       <td style={{width:"5%"}}>{ld.customer.id}</td>   
       <td style={{width:"15%"}}>{ld.customer.userName}</td>
       <td style={{width:"15%"}}>{ld.customer.contact}</td>
       <td style={{width:"15%"}}>{ld.customer.address}</td>
       <td style={{width:"15%"}}>{ld.customer.email}</td>
       <td style={{width:"10%"}}>{ld.loanType}</td>
       <td style={{width:"15%"}}>{ld.adharCardNumber}</td>
       <td style={{width:"10%"}}>{ld.status}</td>
     </tr>
      })
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>Customer Loan Details</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
        <FormGroup row>
            <Col md="3"></Col>
            <Col md="2" style={{textAlign:"center"}}>
                <Label>Enter Customer ID</Label>
            </Col>
            <Col md="2">
                <Input type="number" name="id" value={this.state.id} onChange={this.onChange}></Input>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col md="11" style={{textAlign:"center"}}>
            <Button type="button" size="sm" color="primary" onClick={this.handleSubmit}>View</Button>
            </Col>
        </FormGroup>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"5%"}}>Id</th>
                  <th style={{width:"15%"}}>Customer Name</th>
                  <th style={{width:"15%"}}>Mobile No</th>
                  <th style={{width:"15%"}}>Address</th>
                  <th style={{width:"15%"}}>Email id</th>
                  <th style={{width:"10%"}}>Loan Type</th>
                  <th style={{with:"15%"}}>Adhar No.</th>
                  <th style={{width:"10%"}}>Status</th>
              </thead>
              </Table>
            <div style={{ overflowY: "auto",height:"400px"}}>
            <Table responsive striped >
              <tbody>
                {tabledata}
                <BallBeat color={'#123abc'} loading={this.state.loading}/>
              </tbody>
            </Table>
            </div>
        </CardBody>
      </Card>
    );
   }
}
export default CustomerLoanDetails;