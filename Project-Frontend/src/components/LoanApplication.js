import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';


class LoanApplication extends React.Component{
  constructor(props){
    super(props)
    this.state={
      LoanDetail:[]
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentDidMount(){
     axios.get('/loanDetailsByCustomer/'+0)
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
handleApproved = (value) =>{
    const obj = {
        "id":value,
        "status": "Approved"
       }
       axios.put('/loanDetails', obj)
       .then(res => {
         if (res.status === 200) {
           toast.success("Successfully Approved",{position:toast.POSITION.TOP_CENTER})
           this.componentDidMount()
         } else {
           toast.error(res.data.msg,{position:toast.POSITION.TOP_CENTER})
         }
       })
       .catch(err => {
        toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
      }) 
}
handlePreApproved = (value) =>{
  const obj = {
      "id":value,
      "status": "PreApproved"
     }
     axios.put('/loanDetails', obj)
     .then(res => {
       if (res.status === 200) {
         toast.success("Successfully Approved",{position:toast.POSITION.TOP_CENTER})
         this.componentDidMount()
       } else {
         toast.error(res.data.msg,{position:toast.POSITION.TOP_CENTER})
       }
     })
     .catch(err => {
      toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
    }) 
}

handleReject = (value) =>{
    const obj = {
        "id":value,
        "status": "Reject"
       }
       axios.put('/loanDetails', obj)
       .then(res => {
         if (res.status === 200) {
           toast.success("Successfully Rejected",{position:toast.POSITION.TOP_CENTER})
           this.componentDidMount()
         } else {
           toast.error(res.data.msg,{position:toast.POSITION.TOP_CENTER})
         }
       })
       .catch(err => {
        toast.error(err.response.data.msg, { position: toast.POSITION.TOP_CENTER })
      }) 
}
    render(){
      const tabledata = this.state.LoanDetail.map((ld,count)=>{
        return <tr key={ld.id} className="borderBottomTable" hidden={ld.status==="Approved" ||ld.status==="Reject" ||ld.status==="Paid"?true:false}>
       <td style={{width:"10%"}}>{ld.id}</td>   
       <td style={{width:"20%"}}>{ld.customer.userName}</td>
       <td style={{width:"15%"}}>{ld.loanType}</td>
       <td style={{width:"15%"}}>{ld.amount}</td>
       <td style={{width:"10%"}}>{ld.tennureInMonth}</td>
       <td style={{width:"15%"}}>{ld.updateDate}</td>
       <td style={{width:"20%"}}>
       <Button size="sm" color="primary" onClick={(e)=>this.handlePreApproved(ld.id)} hidden={localStorage.role==="clerk"?false:true}>PreApprove</Button>
          <Button size="sm" color="primary" onClick={(e)=>this.handleApproved(ld.id)} hidden={localStorage.role==="clerk"?true:false}>Approve</Button>
         <Button size="sm" color="danger" style={{marginLeft:"2%"}} onClick={(e)=>this.handleReject(ld.id)} hidden={localStorage.role==="clerk"?true:false}>Reject</Button>
       </td>
     </tr>
      })
    return(
      <Card className="textCapatalization">
        <CardHeader className="headerBold">  <b>Loan Details</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"10%"}}>Id</th>
                  <th style={{width:"20%"}}>Customer Name</th>
                  <th style={{width:"15%"}}>Loan Type</th>
                  <th style={{width:"15%"}}>Amount</th>
                  <th style={{width:"10%"}}>Tenure</th>
                  <th style={{width:"15%"}}>Apply Date</th>
                  <th style={{width:"20%"}}>Status</th>
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
export default LoanApplication;