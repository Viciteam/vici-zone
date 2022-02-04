import './../../../styles/challenge.css';
import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

class OtherChallenges extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isactive: this.props.isactive,
            otherPeople: [
                {
                    id: 1,
                    name: 'HEALTHY SPIRITS!',
                    description: 'For me to discipline myself to drink water more often.',
                    tag: ['Competition', 'Progress'],
                    duration: 'Daily',
                    owner: 'John S. White',
                    participants: 10,
                    featured_image: '/img/prev-header.png'
                },
                {
                    id: 2,
                    name: 'Chess Champion',
                    description: 'Take part in a contest full of chess masters!',
                    tag: ['Competition', 'Progress'],
                    duration: '10/7/21-10/15/21',
                    owner: 'John S. White',
                    participants: 10,
                    featured_image: '/img/prev-header1.png'
                },
                {
                    id: 3,
                    name: 'Another Challenge',
                    description: 'this challenge rocks, a lot of people are doing it! You can too.',
                    tag: ['Competition', 'Progress'],
                    duration: '10/7/21-10/15/21',
                    owner: 'John S. White',
                    participants: 10,
                    featured_image: '/img/prev-header2.png'
                },
                {
                    id: 4,
                    name: 'Another Challenge',
                    description: 'For me to discipline myself to drink water more often.',
                    tag: ['Competition', 'Progress'],
                    duration: '10/7/21-10/15/21',
                    owner: 'John S. White',
                    participants: 10,   
                    featured_image: '/img/prev-header3.png'
                }
            ]
        }
    }

    render () {
        const challenge = this.state.otherPeople;
        const otherChallenges = challenge.map(item =>
            <div className="dotheritem" key={item.id}>
                <div className="dotherinner">
                    <div className="dotherimage">
                        <img src={item.featured_image} alt="" />
                    </div>
                    <div className="dotherdate">{item.duration}</div>
                    <h3>{item.name}</h3>
                    <div className="dotherdesc">{item.description}</div>
                    <div className="dothertags">
                        {item.tag.map((tagitem) => 
                            <span key={tagitem}>{tagitem}</span>
                        )}
                    </div>
                    <div className="dotherstats">
                        <div className="dotherowner">{item.owner}</div>
                        <div className="dotherjoined">{item.participants} Joined</div>
                    </div>
                    <div className="dotherinstructions">
                        <button>Instructions</button>
                    </div>
                </div>
            </div>
        ); 
        return (
            <div className="goal-menu-inner">
                {otherChallenges}
            </div>
        )
    }
}

export default OtherChallenges
