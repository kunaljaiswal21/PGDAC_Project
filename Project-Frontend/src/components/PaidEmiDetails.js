import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';


class PaidEmiDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      PaidEMIDetail:[]
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentDidMount(){
  var id = 0 
  if(localStorage.role==="clerk" || localStorage.role==="manager")
  {
     id =0
  }
  else
  {
     id = localStorage.id
  }
  axios.get('/payEMI/'+id)
       .then(res => {
          if(res.data.length>0)
            {
                this.setState({
                  PaidEMIDetail:res.data
                })
            }
           else
           {
              this.setState({
                PaidEMIDetail:[]
              })
           } 
       })
       .catch(err=>{
           toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
         })

}
    render(){
      const tabledata = this.state.PaidEMIDetail.map((ld,count)=>{
        return <tr key={ld.id} className="borderBottomTable">
       <td hidden={localStorage.role==="customer"?true:false} style={{width:"20%"}}>{ld.loanDetails.customer.userName}</td>      
       <td style={{width:"20%"}}>{ld.loanDetails.loanType}</td>   
       <td style={{width:"20%"}}>{ld.sceduledDate}</td>
       <td style={{width:"10%"}}>{ld.amount}</td>
       <td style={{width:"20%"}}>{ld.paymentDate}</td>
       <td style={{width:"10%"}}>{ld.amount}</td>
     </tr>
      })
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>Paid EMI Details</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th hidden={localStorage.role==="customer"?true:false} style={{width:"20%"}}>Customer Name</th>
                  <th style={{width:"20%"}}>Loan Type</th>
                  <th style={{width:"20%"}}>EMI Date</th>
                  <th style={{width:"20%"}}>EMI Amount</th>
                  <th style={{width:"20%"}}>Paid Date</th>
                  <th style={{width:"20%"}}>Total Amount</th>
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
export default PaidEmiDetails;