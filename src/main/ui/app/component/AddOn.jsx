import {Component} from "react";
import {Link} from "react-router";

export default class AddOn extends Component {

    render() {
        const addon = this.props.addon;
        const icon = addon.type === 'OWA' ? 'fa fa-2x fa-globe' : 'fa fa-2x fa-puzzle-piece';
        return (
                <tr>
                	<td className="col-md-2">
                	<Link to={`/show/${addon.uid}`}>
                        
                        <b>{addon.name}</b>
                    </Link>
                    </td>
                    <Link to={`/show/${addon.uid}`}>
                    <td className="col-md-8 descmod">latest: {addon.latestVersion}</td>
                    </Link>
                	<td><i className={icon} aria-hidden="true"></i>{addon.type}</td>
                	
                </tr>
                
          

        )
    }

}