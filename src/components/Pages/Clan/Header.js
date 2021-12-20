import './../../styles/profiles.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

class ClanHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            openMessages: false,
            openSearchDropdown: false,
            search: '',
        }
        this.handleOpenMessages = this.handleOpenMessages.bind(this);
        //this.handleCloseMessages = this.handleCloseMessages.bind(this);
    }

    handleKeyPress = (event) => {
        this.setState({search: event.target.value});
    }

    handleOpenMessages () {
        if(this.state.openMessages){
            this.setState({ openMessages: false });
        }else{
            this.setState({ openMessages: true });
        }
    }

    render () {

        const messages = [
            {
                image: '/img/dummy/1.png',
                sender: 'John Green',
                message: 'That’s too hard to do :(',
                time: '30m',
            },
            {
                image: '/img/dummy/2.png',
                sender: 'John White',
                message: 'Yeah, the other challenge is hard..',
                time: '4h',
            },
            {
                image: '/img/dummy/3.png',
                sender: 'John Red',
                message: 'Yeah, the other challenge is hard..',
                time: '3m',
            }
        ]

        const people = [
            {
                img: '/img/dummy/1.png',
                name: 'Jennifer Lorem Ipsum',
                subtitle: 'Friend',
            },
            {
                img: '/img/dummy/2.png',
                name: 'Cathy White',
                subtitle: 'Friend',
            },
            {
                img: '/img/dummy/3.png',
                name: 'Jen Gold',
                subtitle: 'Followed',
            },
        ]

        const challenges = [
            {
                img: '/img/dummy/Avatar User 13.png',
                title: 'Just Dance Challenge',
            },
            {
                img: '/img/dummy/Avatar User 132.png',
                title: 'Jello eating contest',
            }
        ]

        return (
            <div className="clan-header-main">
                <div className="clan-header-inner">
                    <div className="dlogo">
                        <img src="/img/vici.png"/>
                    </div>
                    <div className="ditems">
                        <div className="dmenu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Learn</a></li>
                            </ul>
                        </div>
                        <div className="dsearch relative">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <input onKeyPress={this.handleKeyPress.bind(this)} type="text" name="" id="" />
                            {
                                this.state.search.length > 0 &&
                                <div className="absolute w-96 bg-white_color shadow-lg z-50 rounded-b-3xl">
                                    <div className="py-3 shadow-border_shadow px-5 text-left">
                                        Results for: {this.state.search}
                                    </div>
                                    <div className="py-3 px-5 text-left">
                                        <div className="font-bold text-vici_secondary_text">People</div>
                                        {
                                            people.map((item, i) => (
                                                <div className="px-3 py-2 flex">
                                                    <div>
                                                        <img src={ item.img } className="rounded-full" />
                                                    </div>
                                                    <div className="pl-3">
                                                        <div className="font-bold">{ item.name }</div>
                                                        <div className="">{ item.subtitle}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="font-bold text-vici_secondary_text">Challenges</div>
                                        {
                                            challenges.map((item, i) => (
                                                <div className="px-3 py-2 flex">
                                                    <div>
                                                        <img src={ item.img } className="rounded-lg" width="54" />
                                                    </div>
                                                    <div className="pl-3 pt-2">
                                                        <div className="font-bold">{ item.title }</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="font-bold text-vici_secondary_text">Clans</div>
                                        <div className="flex justify-center p-3">
                                            <div>0 results for “{this.state.search}” in clans</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center pb-3">
                                        <button className="text-vici_secondary font-bold"><a href="/search-results">See more results</a></button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="dnotif">
                            <div className="relative">
                                <div onClick={this.handleOpenMessages} className="dmessage cursor-pointer"><FontAwesomeIcon icon={faComment} /><span className="notifone">&nbsp;</span></div>
                                {
                                    this.state.openMessages &&
                                <div className="absolute bg-white_color right-0 shadow-vici rounded-b-2xl z-10" style={{width: '432px'}}>
                                    <div className="text-xl text-vici_black font-bold">
                                        <div className="flex justify-between border-b border-light_gray p-5 w-full">
                                            <div>Message</div>
                                            <div className="flex pr-3">
                                                <button className="p-1 mr-3 border rounded border-light_gray">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                                <div className="text-lg text-vici_secondary pt-1">New Message</div>
                                            </div>
                                        </div>
                                        <div className="p-5 border-b border-medium_gray">
                                            <div className="flex w-full border border-light_gray rounded-2xl">
                                                <div className="p-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2ZM8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0Z" fill="#596366"/>
                                                        <path d="M19.1722 15.1692L16.0382 12.0352C15.7292 12.6482 15.3592 13.2252 14.9252 13.7492L17.7582 16.5832C18.0812 16.9072 18.0812 17.4342 17.7582 17.7582C17.5462 17.9702 17.2992 18.0012 17.1712 18.0012C17.0422 18.0012 16.7952 17.9702 16.5832 17.7582L13.7492 14.9252C13.2262 15.3602 12.6482 15.7302 12.0352 16.0382L15.1692 19.1722C15.7222 19.7252 16.4462 20.0012 17.1702 20.0012C17.8952 20.0012 18.6192 19.7252 19.1722 19.1722C20.2772 18.0662 20.2772 16.2742 19.1722 15.1692Z" fill="#596366"/>
                                                    </svg>
                                                </div>
                                                <div className="w-full">
                                                    <input type="search"  className="w-full focus:outline-none pl-1 py-1 rounded-2xl pr-3"/>
                                                </div>
                                            </div>
                                            <div className="flex cursor-pointer justify-between pt-5">
                                                <div className="flex">
                                                    <div>
                                                        <img src="/img/dummy/message.png" width="54"/>
                                                    </div>
                                                    <div className="px-3">
                                                        <div className="text-lg">Message Requests</div>
                                                        <div className="text-sm text-medium_gray font-normal">2 new message requests</div>
                                                    </div>
                                                </div>
                                                <div className="pt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {
                                                messages.map((item, i) => (
                                                    <div className="flex cursor-pointer justify-between pt-5">
                                                        <div className="flex">
                                                            <div>
                                                                <img className="rounded-full" src={item.image} width="54"/>
                                                            </div>
                                                            <div className="px-3 text-left">
                                                                <div className="text-lg font-normal">{ item.sender }</div>
                                                                <div className="text-sm text-medium_gray font-normal">{ item.message }</div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-2 text-sm">
                                                            {item.time}
                                                        </div>
                                                    </div>
                                                ))
                                             }
                                        </div>
                                        <div className="flex justify-center p-5">
                                             <div className="text-lg font-bold text-vici_secondary cursor-pointer">See all messages</div>
                                        </div>
                                    </div>
                                </div>
                                }

                            </div>
                            <div className="dalarm"><FontAwesomeIcon icon={faBell} /><span className="notifone">&nbsp;</span></div>
                        </div>
                        <div className="dproficon">
                            <img src="/img/user_main.jpg"/>
                        </div>
                        <div className="dcoin">
                            <div className="dcoin-inner"><img src="/img/coil.png"/> <span>250</span></div>
                        </div>
                        <div className="dmedals">
                            <div className="dmedal-inner"><img src="/img/medal.png"/> <span>10</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClanHeader