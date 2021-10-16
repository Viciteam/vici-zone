import React from 'react';

class NewChallenge extends React.Component {
    render () {
        return (
            <div>
                <div className="text-sm font-bold">New Challenge</div>
                <div className="flex mt-3 justify-between bg-white_color pb-2">
                    <div className="flex w-3/4 justify-between">
                        <div className="flex">
                            <div>
                                <img className="rounded-md" src="/img/dummy/Rectangle1.png" />
                            </div>
                            <div className="py-4 px-6">
                                <div className="text-sm font-bold text-medium_gray">Day 20</div>
                                <div className="text-lg font-bold py-2 text-purple">What a Bookworm!</div>
                                <div className="text-sm w-5/6">Exercise your brain, here's a challenge for you!</div>
                            </div>
                        </div>
                        <div className="p-4 relative">
                            <button className="absolute bottom-6 right-6 py-2 px-5 bg-vici_button_txt text-white_color rounded-lg">Join</button>
                        </div>
                    </div>
                    <div className="w-1/4 p-3 bg-light_gray rounded-md relative">
                        <div className="text-lg font-bold">Leaderboard</div>
                        <div className="text-xs">Current rank:</div>
                        <div>-</div>
                        <div className="absolute bottom-0 right-0">
                            <div className="flex p-5">
                                <div className="text-xs pt-1">People Joined.</div>
                                <div className="text-xs pl-3">
                                    <img src="/img/dummy/Group.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewChallenge;