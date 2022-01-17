import React from 'react';

import auth from '../../../../services/auth';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="bg-vici_light_gray rounded-2xl p-2">
                <div className="py-3 px-6 font-bold">About Me</div>
                <div className="bg-white_color p-3 rounded-lg">
                    <div className="shadow-border_shadow pb-3">
                        <p>
                            {
                                auth.userProfile() ? auth.userProfile().bio : ''
                            }
                        </p>
                    </div>
                    <div className="py-3">
                        <div>
                            <div className="font-bold">Mission:</div>
                            <p>
                                {
                                    auth.userProfile() ? auth.userProfile().mission : ''
                                }  
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Preferred pronouns:</div>
                            <p>
                                {
                                    auth.userProfile() ? auth.userProfile().pref_pronoun : ''
                                }  
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Birthdate:</div>
                            <p>
                                {
                                    auth.userProfile() ? auth.userProfile().bday : ''
                                }
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Country:</div>
                            <p>
                                {
                                    auth.userProfile() ? auth.userProfile().country : ''
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe