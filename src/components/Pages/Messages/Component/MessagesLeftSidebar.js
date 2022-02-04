import React from 'react';
import { Channel } from './Channel'

class MessagesLeftSidebar extends React.Component {
    handleClick = id => {
        this.props.onSelectChannel(id);
    }

     render () {
        let list = `There is no channels to show`;
        // const messages = [
        //     {
        //         image: '/img/dummy/1.png',
        //         sender: 'John Green',
        //         message: 'That’s too hard to do :(',
        //         time: '30m',
        //         isActive: false,
        //     },
        //     {
        //         image: '/img/dummy/2.png',
        //         sender: 'John White',
        //         message: 'Yeah, the other challenge is hard..',
        //         time: '4h',
        //         isActive: false,
        //     },
        //     {
        //         image: '/img/dummy/3.png',
        //         sender: 'John Red',
        //         message: 'Yeah, the other challenge is hard..',
        //         time: '3m',
        //         isActive: true,
        //     },
        //     {
        //         image: '/img/dummy/4.png',
        //         sender: 'John Brown',
        //         message: 'Yeah, the other challenge is hard..',
        //         time: '3m',
        //         isActive: false,
        //     }
        // ]

        if (this.props.channels) {
            list = this.props.channels.map((c) => (
                <Channel
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    participants={c.participants}
                    onClick={this.handleClick}
                />
            ));
        }
       /*  return <div className="channel-list">{list}</div>; */
         return (
             <div className="shadow-border_shadow_right">
                 <div className="p-5 flex justify-between shadow-border_shadow">
                    <div>
                        <span className="font-bold">Messages</span>
                        <span className="ml-3 bg-primary_color py-1 text-10 font-bold rounded-full px-2">4</span>
                    </div>
                    <div className="mr-5">
                        <button className="p-1 bg-light_gray rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                                <path d="M8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2ZM8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0Z" fill="#596366"/>
                                <path d="M19.1722 15.1692L16.0382 12.0352C15.7292 12.6482 15.3592 13.2252 14.9252 13.7492L17.7582 16.5832C18.0812 16.9072 18.0812 17.4342 17.7582 17.7582C17.5462 17.9702 17.2992 18.0012 17.1712 18.0012C17.0422 18.0012 16.7952 17.9702 16.5832 17.7582L13.7492 14.9252C13.2262 15.3602 12.6482 15.7302 12.0352 16.0382L15.1692 19.1722C15.7222 19.7252 16.4462 20.0012 17.1702 20.0012C17.8952 20.0012 18.6192 19.7252 19.1722 19.1722C20.2772 18.0662 20.2772 16.2742 19.1722 15.1692Z" fill="#596366"/>
                            </svg>
                        </button>
                    </div>
                 </div>
                 <div className="px-5 py-3 text-xs shadow-border_shadow flex bg-white_color">
                    <button className="font-bold bg-vici_bgcolor py-1 px-2 rounded-full">
                        All Conversations
                    </button>
                    <button className="py-1 px-2 ml-2">
                        Archived
                    </button>
                    <button className="py-1 px-2 ml-2">
                        Requested
                    </button>
                 </div>
                 <div className="px-5 font-bold py-3 text-xs shadow-border_shadow bg-white_color">
                    Channels
                 </div>
                 <div className="px-1">
                    <div className="channel-list">{list}</div>
                 </div>
                 {/* <div className="px-1">
                    {
                    messages.map((item, i) => (
                        <div className={`${ item.isActive ? 'active' : ''} hover:bg-light_gray flex cursor-pointer justify-between py-2 px-3 rounded-xl bg-white_color`}>
                            <div className="flex">
                                <div>
                                    <img className="rounded-full" src={item.image} width="40"/>
                                </div>
                                <div className="px-3 text-left">
                                    <div className="">{ item.sender }</div>
                                    <div className="text-sm text-medium_gray font-normal truncate">{ item.message }</div>
                                </div>
                            </div>
                            <div className="pt-2 text-sm">
                                {item.time}
                            </div>
                        </div>
                    ))
                    }
                 </div> */}
             </div>
         )
     }
}

export default MessagesLeftSidebar