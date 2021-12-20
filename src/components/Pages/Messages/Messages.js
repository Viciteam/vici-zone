import React from 'react';
import MessagesLeftSidebar from './Component/MessagesLeftSidebar';
import MessagesContents from './Component/MessagesContents';
import MessagesRightSidebar from './Component/MessagesRightSidebar';

class Messages extends React.Component {
    render () {
        return (
            <div className="container mx-auto mt-5">
                <div className="flex w-full">
                    <div className="w-1/4 shadow-border_shadow_right">
                        <MessagesLeftSidebar />
                    </div>
                    <div className="w-1/2">
                        <MessagesContents />
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