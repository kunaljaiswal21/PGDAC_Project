import React,{Component} from 'react'
import {connect} from 'react-redux'
class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<h1 className="ui center aligned header" 
    style={window.innerWidth>1000&&this.props.style.style?{backgroundImage: "linear-gradient(65deg, #1488CC  0px, #2B32B2 100%)",padding:"10px",
    marginBottom:"0px",color:"white",borderRadius:"5px",width:"93%"}:{backgroundImage: "linear-gradient(65deg, #1488CC  0px, #2B32B2 100%)",
    padding:"10px",marginBottom:"0px",color:"white",borderRadius:"5px"}}>{this.props.title}
            </h1>)
  }
}
const mapStateToProps = (state)=>({
  style:state.style
})
export default connect(mapStateToProps,{})(Header);
