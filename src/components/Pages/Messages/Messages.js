import React from 'react';
import MessagesLeftSidebar from './Component/MessagesLeftSidebar';
import MessagesContents from './Component/MessagesContents';
import MessagesRightSidebar from './Component/MessagesRightSidebar';
import socketClient from "socket.io-client";
import auth from '../../../services/auth';

const SERVER = "http://44.241.49.47:8080";

class Messages extends React.Component {

    state = {
        channels: null,
        socket: null,
        channel: null
    }

    socket;

    componentDidMount() {
        this.loadChannels();
        this.configureSocket();
    }

    configureSocket = () => {
        var socket = socketClient(SERVER);
        socket.on('connection', () => {
            if (this.state.channel) {
                this.handleChannelSelect(this.state.channel.id);
            }
        });
        socket.on('channel', channel => {

            let channels = this.state.channels;
            channels.forEach(c => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            this.setState({ channels });
        });
        socket.on('message', message => {

            let channels = this.state.channels
            channels.forEach(c => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            this.setState({ channels });
        });
        this.socket = socket;
    }

    loadChannels = async () => {
        fetch(`${SERVER}/getChannels`).then(async response => {
            let data = await response.json();
            this.setState({ channels: data.channels });
        })
    }

    handleChannelSelect = id => {
        let channel = this.state.channels.find(c => {
            return c.id === id;
        });
        this.setState({ channel });
        this.socket.emit('channel-join', id, ack => {
        });
    }

    handleSendMessage = (channel_id, text) => {
        this.socket.emit('send-message', { channel_id, text, senderName: auth.userProfile().name, id: Date.now() });
    }

    render () {
        return (
            <div className="container mx-auto mt-5">
                <div className="flex w-full">
                    <div className="w-1/4 shadow-border_shadow_right">
                        <MessagesLeftSidebar channels={this.state.channels} onSelectChannel={this.handleChannelSelect} />
                    </div>
                    <div className="w-1/2">
                        <MessagesContents onSendMessage={this.handleSendMessage} channel={this.state.channel} userId={this.socket?.id} />
                    </div>
                    <div className="w-1/4">
                        <MessagesRightSidebar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages