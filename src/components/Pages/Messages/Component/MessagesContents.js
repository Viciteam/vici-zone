import React from 'react';
import { Message } from './Message'
import '../../../styles/messages.css'
import ReactScrollableFeed from 'react-scrollable-feed';
class MessagesContents extends React.Component {

    state = { input_value: "" };

    //mesRef = React.createRef();

    send = () => {
        if (this.state.input_value && this.state.input_value !== "") {
          this.props.onSendMessage(this.props.channel.id, this.state.input_value);
          this.setState({ input_value: "" });
        }
    };
    
    /* componentDidMount() {   
		this.scrollToBottom();
	}

    scrollToBottom = () => {
        console.log('scrollTop--1', this.mesRef.current.scrollTop)
        console.log('scrollHeight--1', this.mesRef.current.scrollHeight)
		this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
        //this.mesRef.current?.scrollIntoView({ behavior: "smooth" })
        console.log('scrollTop--', this.mesRef.current.scrollTop)
        console.log('scrollHeight--', this.mesRef.current.scrollHeight)
        
	}; */

    handleInput = (e) => {
        this.setState({ input_value: e.target.value });
    };

    /* onScroll = () => {
        if (this.mesRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = this.mesRef.current;
          console.log('scrollTop', scrollTop)
          console.log('clientHeight', clientHeight)
          console.log('scrollHeight', scrollHeight)

          if (scrollTop + clientHeight === scrollHeight) {
            // TO SOMETHING HERE
            console.log('scrollTop', scrollTop)
            console.log('clientHeight', clientHeight)
            console.log('scrollHeight', scrollHeight)
            console.log('Reached bottom')
          }
        }
      } */

    keyPress = (e) => {
        if(this.props.channel){
            if(e.keyCode === 13){
                this.send();
                this.setState({ input_value: '' });
                //this.scrollToBottom();
            }
        }else{
            if(e.keyCode === 13){
                this.setState({ input_value: 'Please select channel' });
            }
        }
     }

     render () {
        let list = (
            <div className="no-content-message">There is no messages to show</div>
          );

        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map((m) => (
                <Message
                    key={m.id}
                    id={m.id}
                    senderName={m.senderName}
                    userId={this.props.userId}
                    text={m.text}
                />
            ));
        }

        /* return (
            <div className="messages-panel">
              ‍<div className="meesages-list">{list}</div>‍
              <div className="messages-input">
                <input
                  type="text"
                  onChange={this.handleInput}
                  value={this.state.input_value}
                />
                ‍<button onClick={this.send}>Send</button>‍
              </div>
            </div>
          ); */

         return (
             <div className="shadow-border_shadow_right"> 
                <div className="px-5 py-3 flex shadow-border_shadow">
                    <div>
                        <img src="/img/dummy/4.png" className="rounded-full" width="40"/>
                    </div>
                    <div className="pl-5">
                        <div className="font-bold">{this.props.channel ? this.props.channel.name : 'Please select channel'}</div>
                        <div className="text-sm text-medium_gray">Active now</div>
                    </div>
                </div>
                <div className="h-screen-auto flex relative bg-white_color shadow-border_shadow_right">
                    <div className="absolute bottom-0 text-medium_gray w-full">
                        <div  className="shadow-border_shadow">
                        ‍<ReactScrollableFeed>
                            <div className="messages-list px-3">{list}</div>
                        </ReactScrollableFeed>‍
                            {/* <div className="flex p-5 w-full">
                                <div className="w-1/2 flex">
                                    <div className="pt-5">
                                        <img src="/img/dummy/1.png" width="32" className="rounded-full" />
                                    </div>
                                    <div className="pl-3">
                                        <div>
                                            <p className="text-sm px-5 text-vici_black py-2 bg-vici_light_gray rounded-full">
                                                hahaha no way
                                            </p>
                                            <div className="text-xs py-2 pl-3">5:00 pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end p-5 w-full">
                                <div className="w-1/2 pl-3 flex justify-end">
                                    <div>
                                        <p className="text-right text-sm px-5 py-2 bg-vici_button_txt text-white_color rounded-full">
                                            Yeah im doing that challenge.
                                        </p>
                                        <div className="text-xs py-2 pl-3 text-right">5:00 pm</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end p-5 w-full">
                                <div className="w-1/2 pl-3 flex justify-end">
                                    <div>
                                        <p className="text-sm px-5 py-2 bg-vici_button_txt text-white_color rounded-full">
                                        Lorem ipsum dolor sit amet, te has iisque pertinacia. Sea ei tollit inermis?
                                        </p>
                                        <div className="text-xs py-2 pl-3 text-right">5:00 pm</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex p-5 w-full">
                                <div className="w-1/2 flex">
                                    <div className="pt-5">
                                        <img src="/img/dummy/1.png" width="32" className="rounded-full" />
                                    </div>
                                    <div className="pl-3">
                                        <div>
                                            <p className="text-sm px-5 text-vici_black py-2 bg-vici_light_gray rounded-full">
                                                Per ex hinc wisi liberavisse, pro nostro atomorum torquatos no
                                            </p>
                                            <p className="text-sm px-5 text-vici_black py-2 mt-2 bg-vici_light_gray rounded-full">
                                                Tamquam conceptam?
                                            </p>
                                            <div className="text-xs py-2 pl-3">5:00 pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
 */}


                        </div>
                       <div className="flex p-5 w-full">
                            <div className="flex w-full">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                                <div className="w-full pl-3">
                                    <input onChange={this.handleInput} onKeyUp={this.keyPress} value={this.state.input_value} placeholder="Type your message.." type="text" className="w-full py-2 px-5 rounded-full border border-medium_gray" />
                                </div>
                            </div>
                            <div className="flex">
                                <button className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </button>
                                <button className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </button>
                                <button className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>
                       </div>
                    </div>
                </div>
             </div>
         )
     }
}

export default MessagesContents