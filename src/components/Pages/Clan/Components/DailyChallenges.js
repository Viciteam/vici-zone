import React from 'react';

class DailyChallenges extends React.Component {

    render () {

        let challenges = [
            {
                day: '1',
                title: 'Healthy Spirits',
                img: '/img/dummy/Rectangle2.png',
                desc: 'For me to discipline myself to drink water more often.',
                goal: '8 Glasses',
                acc: '40 Glasses',
                percent: '50'
            },
            {
                day: '15',
                title: 'Run RUn Run!',
                img: '/img/dummy/Rectangle3.png',
                desc: 'For me to discipline myself to drink water more often.',
                goal: '50 Km',
                acc: '40 Km',
                percent: '80'
            }
        ]

        return (
            <div>
                <div className="text-sm font-bold">Daily Challenges</div>
                {
                    challenges.map((challenge, i) => (
                    <div className="flex mt-4 justify-between bg-white_color pb-2" key={i}>
                        <div className="flex w-3/4 justify-between">
                            <div className="flex">
                                <div>
                                    <img className="rounded-md" src={ challenge.img } />
                                </div>
                                <div className="py-4 px-6">
                                    <div className="text-sm font-bold text-medium_gray"> Day { challenge.day }</div>
                                    <div className="text-lg font-bold py-2 text-purple">{ challenge.title }</div>
                                    <div className="text-sm w-5/6">{ challenge.desc }</div>
                                </div>
                            </div>
                            <div className="p-5 mt-3">
                                <div className="text-sm font-bold text-dark_gray">Daily Goal: { challenge.goal }</div>
                            </div>
                        </div>
                        <div className="w-1/4 p-3 bg-light_gray rounded-md relative">
                            <div className="text-lg font-bold">Goal</div>
                            <div className="text-xs">Current milestone:</div>
                            <div className="font-bold text-lg">{ challenge.acc }</div>
                            <div className="mt-1 h-2 bg-vici_bgcolor rounded-lg">
                                <div className="h-2 bg-vici_button_txt w-1/2 rounded-lg"></div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <div className="flex px-5 pb-2 pt-8">
                                    <div className="text-xs pt-1">People Joined.</div>
                                    <div className="text-xs pl-3">
                                        <img src="/img/dummy/Group.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    
    }

}

export default DailyChallenges;