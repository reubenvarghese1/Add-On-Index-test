import {Component} from "react";
import {Link} from "react-router";

export default class App extends Component {

    render() {
        return (
                
                	<div className="container">
                	<header classname="clearfix">
                	<h1 className="col-sm-5">
                	<a href="#/">
          				<img className="logo logo1" src="http://ec2-54-212-211-126.us-west-2.compute.amazonaws.com/omrs.png" alt="OpenMRS Logo"/>
         
        			</a>
        			</h1>
        			
        			<Link className="btn btn-lg btn-primary col-md-1 col-sm-12 col-xs-12 buttonfix" to="/">Home</Link>
                    <Link className="btn btn-lg col-md-1 col-sm-12 col-xs-12 buttonfix" to="/about">About</Link>
                    </header>
                    {this.props.children}
                   
                     </div>
                    
                
                
        )
    }

}