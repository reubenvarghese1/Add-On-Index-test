import {Component} from "react";

export default class About extends Component {

    render() {
        return (
                <div>
                    <h3>About</h3>
                     <Link className="btn btn-lg btn-primary col-md-1 col-sm-12 col-xs-12 buttonfix" to="/indexingStatus">Indexing Status</Link>
                    <a href="https://github.com/djazayeri/openmrs-contrib-addonindex/blob/master/README.md">See here</a>
                </div>
        )
    }

}