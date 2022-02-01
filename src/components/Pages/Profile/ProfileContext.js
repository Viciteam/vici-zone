import React, { createContext} from "react";

export const ProfileContext = createContext(null);

export class ProfileProvider extends React.Component {
    state = {
        banner: '/img/default-banner.png',
        profile: '/img/prof_icon.png'
    }

    userBanner = (val) => {
        this.setState({ banner: val});
    }

    userProfile = (val) => {
        this.setState({ profile: val});
    }

    render () {
        const { banner } = this.state;
        const { userBanner } = this;
        const { profile } = this.state;
        const { userProfile } = this;

        return (
            <ProfileContext.Provider value={{ banner: [banner, userBanner], profile: [profile, userProfile] }}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}