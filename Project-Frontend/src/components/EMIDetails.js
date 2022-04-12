import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';



class EMIDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      EMIDetail:[]
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentDidMount(){
  axios.get('/EMIDetailsByCustomer/'+localStorage.id)
       .then(res => {
          if(res.data.length>0)
            {
                this.setState({
                  EMIDetail:res.data
                })
            }
           else
           {
              this.setState({
                EMIDetail:[]
              })
           } 
       })
       .catch(err=>{
           toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
         })

}
    render(){
      const tabledata = this.state.EMIDetail.map((ld,count)=>{
        var EMIAmt =parseFloat(ld.loanDetails.amount/ld.loanDetails.tennureInMonth).toFixed(2)
        var interestAmt = parseFloat(((ld.loanDetails.amount*ld.intrest)/100)/12).toFixed(2)
        var totalAmt = parseFloat(EMIAmt)  + parseFloat(interestAmt)
        return <tr key={ld.id} className="borderBottomTable">
       <td style={{width:"15%"}}>{ld.loanDetails.loanType}</td>   
       <td style={{width:"10%"}}>{ld.loanDetails.tennureInMonth}</td>
       <td style={{width:"10%"}}>{ld.emiLeft}</td>
       <td style={{width:"15%"}}>{EMIAmt}</td>
       <td style={{width:"20%"}}>{interestAmt}</td>
       <td style={{width:"20%"}}>{totalAmt}</td>
       <td style={{width:"10"}}>{ld.nextDate}</td>
     </tr>
      })
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>EMI Details</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"15%"}}>Loan Type</th>
                  <th style={{width:"10%"}}>Total Tenure</th>
                  <th style={{width:"10%"}}>EMI Left</th>
                  <th style={{width:"15%"}}>EMI Amt</th>
                  <th style={{width:"20%"}}>Interest Amt</th>
                  <th style={{width:"20%"}}>Total Amt</th>
                  <th style={{width:"10%"}}>Due Date</th>
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
export default EMIDetails;