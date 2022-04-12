import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {shopfetch} from '../actions/authactions';
import {shopAgentFetch} from '../actions/shopactions';
import {Link} from 'react-router-dom';
import panni from '../assets/img/brand/panni.png'
import wiselap from '../assets/img/shop.png'
import Compmenu from './Compmenu'
import {Col,Card, CardHeader,Button, CardBody, FormGroup} from 'reactstrap';
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
  }
  }
  // move = (e)=>{
  //   this.props.history.push('/ProfileSetup');
  // }
  show = (data) =>{
  /*setting the present shopAgentId and accountingProfileId to redux for future access*/
    this.props.shopAgentFetch(data);
    if(data.shopProfile==="Owner" && data.adminApproval>0)
    {
      this.props.history.push(`/Compmenu`);
    }
    else if(data.shopProfile==="Delivery Boy")
    {
      alert("Please Use Our Mobile Application")
    }
    else
    {
      alert(
    "Thank You For Choosing Wisebill Your request is send to Wiselap Support with in 24hrs Wiselap Support will contact you to activate your account")
    }
  }
  //fetching the shop details for the used application user id and login id
  componentDidMount(){
   // this.props.shopfetch({uniqueIdentityField:this.props.auth.uniqueIdentityField});
    console.log("selectpage",this.props.auth.shop);
  }
  //rendering the details of all shop 
  render() {
    return (
       <Card>
         <CardHeader>
         {/* <Button type="button" className="ButtonProductList" style={{float:"right",width:"10%", backgroundColor:"#007bff"}} onClick={this.move}>Add</Button> */}
         </CardHeader>
         <CardBody>
           <FormGroup row>
             {this.props.auth.shop.map((data,index)=>
               <Col md="3" key={data.shopAgentId}>
                  <Card onClick={()=>{this.show(data)}} style={{marginLeft:"2%"}}>
                    <CardHeader style={{textAlign:"center"}}>
                       <b style={{color:"black"}}>{data.shopName}</b>
                    </CardHeader>
                    <CardBody>
                    {data.shopProfile}
                    </CardBody>
                  </Card>
               </Col>
             
             )}
           </FormGroup>
         {/* <div style={{display:"flex"}}>
             {this.props.auth.shop.map((data,index)=>
               <div className="ui card" key={data.shopAgentId} style={{width:"15%",marginLeft:"2%"}}>
                 <div className="content" onClick={()=>{this.show(data)}}>
                   <div className="center aligned header" style={{textTransform:"capitalize"}}>{data.shopName}</div>
                   <div className="center aligned description" style={{textAlign:"center",width:"50%",float:"right"}}>
                     <p>{data.shopProfile}</p>
                   </div>
                   {data.applicationTypeName==="WISEBILL_WATERSUPPLIER"?
                   (<div className="extra content" style={{width:"50%"}}>
                   <div className="center aligned author">
                     <img style={{width:"60px",height:"50px"}} src={panni}/>
                   </div>
                 </div>):
                   (<div className="extra content" style={{width:"50%"}}>
                   <div className="center aligned author">
                     <img className="ui avatar image" style={{width:"60px",height:"50px"}} src={wiselap}/>
                   </div>
                 </div>)
                   }
                 </div>
               </div>)
          }
           </div>    */}
         </CardBody>
       </Card>
    );
  }
}
const mapStateToProps = (state)=>({
  auth:state.auth,
})
export default connect(mapStateToProps,{shopfetch,shopAgentFetch})(Select);
