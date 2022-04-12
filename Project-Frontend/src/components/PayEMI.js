import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';


class PayEMI extends React.Component{
  constructor(props){
    super(props)
    this.state={
      EMIDetail:[],
      LoanId:0,
      CustomerId:0,
      TotalEMIAmt:0
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
handlePay = () =>{
  axios.get('/payEMI/'+this.state.CustomerId + '/' + this.state.LoanId)
  .then(res => {
     if(res.data.id>0)
       {
        toast.success("Paid Successfully", { position: toast.POSITION.TOP_CENTER })
          this.setState({
            LoanId:0,
            CustomerId:0,
            TotalEMIAmt:0
          })
           this.componentDidMount()
           var len = document.getElementsByName("radio1").length
           for(var i=0;i<len;i++)
            {
              document.getElementsByName("radio1")[i].checked = false
            }
       }
  })
  .catch(err=>{
      toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
    })
}
onChecked = (loanid,customerid,totalAmt) =>{
    this.setState({
      LoanId:loanid,
      CustomerId:customerid,
      TotalEMIAmt:totalAmt
    })
   
}

    render(){
      const tabledata = this.state.EMIDetail.map((ld,count)=>{
        var EMIAmt =parseFloat(ld.loanDetails.amount/ld.loanDetails.tennureInMonth).toFixed(2)
        var interestAmt = parseFloat(((ld.loanDetails.amount*ld.intrest)/100)/12).toFixed(2)
        var totalAmt = parseFloat(EMIAmt)  + parseFloat(interestAmt)
        return <tr key={ld.id} className="borderBottomTable">
       <td style={{width:"15%"}}>{ld.loanDetails.loanType}</td>
       <td style={{width:"15%"}}>{EMIAmt}</td>
       <td style={{width:"20%"}}>{interestAmt}</td>
       <td style={{width:"20%"}}>{totalAmt}</td>
       <td style={{width:"15%"}}>{ld.nextDate}</td>
       <td style={{width:"15%",textAlign:"center"}}>
             <Input type="radio" name="radio1" onChange={(e)=>this.onChecked(ld.loanDetails.id,ld.loanDetails.customer.id,totalAmt)}></Input>
       </td>
     </tr>
      })
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>Pay EMI</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
        <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"15%"}}>Loan Type</th>
                  <th style={{width:"15%"}}>EMI Amt</th>
                  <th style={{width:"20%"}}>Interest Amt</th>
                  <th style={{width:"20%"}}>Total Amt</th>
                  <th style={{width:"15%"}}>Due Date</th>
                  <th style={{width:"15%"}}></th>
              </thead>
              </Table>
        <Table responsive striped >
              <tbody>
                 {tabledata}
              </tbody>
            </Table>
               <FormGroup row>
                   <Col md="3"></Col>
                   <Col md="2" style={{textAlign:"center"}}>
                       <Label>Enter Amount</Label>
                   </Col>
                   <Col md="2">
                       <Input type="number" value={this.state.TotalEMIAmt} disabled></Input>
                   </Col>
               </FormGroup>
        </CardBody>
        <CardFooter style={{ textAlign: "center" }}>
            <Button type="button" size="sm" color="primary" onClick={this.handlePay}>Pay</Button>
        </CardFooter>
      </Card>
    );
   }
}
export default PayEMI;