import './../../styles/profiles.css';
import React from 'react';

class BreadCrumbs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active
        }
    }

    render () {
        return (
            <div className="breadcrumbs-main">
                <div className="breadcrumbs-inner">
                    <ul>
                        <li className={(this.props.active == 'home' ? 'isactive' : '')}><a href="/clan">Clan's Home</a></li>
                        <li className={(this.props.active == 'challenges' ? 'isactive' : '')}><a href="/clan/challenge">Challenges</a></li>
                        <li className={(this.props.active == 'chatroom' ? 'isactive' : '')}><a href="#">Chat room</a></li>
                        <li className={(this.props.active == 'members' ? 'isactive' : '')}><a href="/clan/members">Members</a></li>
                        <li className={(this.props.active == 'details' ? 'isactive' : '')}><a href="#">Details</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BreadCrumbs