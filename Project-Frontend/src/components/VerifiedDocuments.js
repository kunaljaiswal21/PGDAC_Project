import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';



class VerifiedDocument extends React.Component{
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
        <CardHeader className="headerBold">  <b>Verified Customer Documents</b>
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
                <td style={{width:"20%"}}>1</td>
                <td style={{width:"20%"}}>Neha</td>
                <td style={{width:"20%"}}>Home</td>
                <td style={{width:"20%"}}>Register sale deed, Property tax receipt</td>
                <td style={{width:"20%"}}>Verified</td>
              </tbody>
              <tbody>
                <BallBeat color={'#123abc'} loading={this.state.loading}/>
                <td style={{width:"20%"}}>7</td>
                <td style={{width:"20%"}}>Sayali</td>
                <td style={{width:"20%"}}>Agriculture</td>
                <td style={{width:"20%"}}>7/12 Extract</td>
                <td style={{width:"20%"}}>Verified</td>
              </tbody>
              <tbody>
                <BallBeat color={'#123abc'} loading={this.state.loading}/>
                <td style={{width:"20%"}}>1</td>
                <td style={{width:"20%"}}>Neha</td>
                <td style={{width:"20%"}}>Gold</td>
                <td style={{width:"20%"}}>Pan Card, Address Proof </td>
                <td style={{width:"20%"}}>Verified</td>
              </tbody>
            </Table>
            </div>
        </CardBody>
      </Card>
    );
   }
}
export default VerifiedDocument;