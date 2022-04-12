import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';



class PendingDocuments extends React.Component{
  constructor(props){
    super(props)
    this.state={
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}

    render(){
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>Pending Customer Documents</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"20%"}}>Customer_id</th>
                  <th style={{width:"20%"}}>Customer_Name</th>
                  <th style={{width:"20%"}}>Loan Type</th>
                  <th style={{width:"20%"}}>Documents</th>
                  <th style={{width:"20%"}}>Status</th>
              </thead>
              </Table>
              <div style={{ overflowY: "auto",height:"400px"}}>
            <Table responsive striped >
              <tbody>
                <BallBeat color={'#123abc'} loading={this.state.loading}/>
                <td style={{width:"20%"}}>15</td>
                <td style={{width:"20%"}}>Sam</td>
                <td style={{width:"20%"}}>Car</td>
                <td style={{width:"20%"}}>Salary Slips</td>
                <td style={{width:"20%"}}>Pending</td>
              </tbody>
              <tbody>
                <BallBeat color={'#123abc'} loading={this.state.loading}/>
                <td style={{width:"20%"}}>11</td>
                <td style={{width:"20%"}}>Aniket</td>
                <td style={{width:"20%"}}>Personal</td>
                <td style={{width:"20%"}}>Address Proof, Salary Slip, Bank Statement</td>
                <td style={{width:"20%"}}>Pending</td>
              </tbody>
            </Table>
            </div>
        </CardBody>
      </Card>
    );
   }
}
export default PendingDocuments;