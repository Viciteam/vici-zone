import { applyProps } from "@react-three/fiber";
import React, { useState, createContext, useEffect } from "react";

export const JoinContext = createContext();

export class JoinProvider extends React.Component {
    state = {
        isJoined: false
    }

    joinedUser = () => {
        this.setState({ isJoined: true });
    }

    render () {
        const { isJoined } = this.state;
        const { joinedUser } = this;

        return (
            <JoinContext.Provider value={{ isJoined, joinedUser }}>
                {this.props.children}
            </JoinContext.Provider>
        )
    }
}



    
