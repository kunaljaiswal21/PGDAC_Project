import React,{Component} from 'react'
class Logout extends Component {
  //logout the user from the website
  componentDidMount(){
    this.props.history.push('/');
  }
  render(){
    return(
      <div>Logout successfully</div>
    )
  }
}

export default Logout;
