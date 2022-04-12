import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import {connect} from 'react-redux'
class TwoSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <Header title={this.props.title}/>               {  /*      depending on the window size appropriate styling is considered         */  }
            <div className="ui placeholder segment" style={window.innerWidth>1000&&this.props.style.style?{marginTop:"0px",borderRadius:"5px",width:"93%",backgroundColor:"#f7f7f7"}:{marginTop:"0px",borderRadius:"5px",backgroundColor:"#f7f7f7"}}>
                <div className="ui two column stackable aligned grid" >
                   <div className="ui vertical divider" style={{position:"absolute",left:"56%"}}></div>
                    <div className="row">
                        <div className="nine wide column">
                            {this.props.list}
                        </div>
                        <div className="seven wide column" style={{}}>
                            {this.props.add}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
  style:state.style
})
export default connect(mapStateToProps,{})(TwoSection);
