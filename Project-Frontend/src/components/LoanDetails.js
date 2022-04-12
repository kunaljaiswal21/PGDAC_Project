import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';


class loanDetails extends React.Component{
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
     axios.get('/loanDetailsByCustomer/'+localStorage.id)
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
       <td style={{width:"10%"}}>{ld.id}</td>   
       <td style={{width:"20%"}}>{ld.loanType}</td>
       <td style={{width:"15%"}}>{ld.amount}</td>
       <td style={{width:"15%"}}></td>
       <td style={{width:"20%"}}>{ld.status}</td>
       <td style={{width:"20%"}}>{ld.dateOfApproval===null?"":ld.dateOfApproval}</td>
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
                  <th style={{width:"20%"}}>Loan Type</th>
                  <th style={{width:"15%"}}>Loan Amount</th>
                  <th style={{width:"15%"}}>Due Amount</th>
                  <th style={{width:"20%"}}>Status</th>
                  <th style={{width:"20%"}}>Date Of Approval</th>
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
export default loanDetails;