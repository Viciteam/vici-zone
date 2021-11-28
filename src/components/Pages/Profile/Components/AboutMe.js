import React from 'react';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="bg-vici_light_gray rounded-2xl p-2">
                <div className="py-3 px-6 font-bold">About Me</div>
                <div className="bg-white_color p-3 rounded-lg">
                    <div className="shadow-border_shadow pb-3">
                        <p>
                            I am a streamer and influencer follow me on youtube to know more about my brand!
                        </p>
                    </div>
                    <div className="py-3">
                        <div>
                            <div className="font-bold">Mission:</div>
                            <p>
                                To live healthy life in a fun way with friends!
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Preferred pronouns:</div>
                            <p>
                                She/Her
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Birthdate:</div>
                            <p>
                                1/03/99
                            </p>
                        </div>
                        <div className="pt-3">
                            <div className="font-bold">Country:</div>
                            <p>
                                Philippines
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe