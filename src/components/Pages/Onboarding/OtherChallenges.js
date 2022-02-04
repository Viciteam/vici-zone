import React from 'react';
// import Challenge from '../Clan/Challenge';

class OtherChallenges extends React.Component {
    render () {
        let challenges = [
            {
                title: 'You’re a Challenge Creator!',
                subtitle: 'Create your very first challenge in Vici!',
                tag: 'Vici Starter',
                joined: '',
            },
            {
                title: 'You’re a Challenger!',
                subtitle: 'Join your very first challenge created by another user.',
                tag: 'Vici Starter',
                joined: '',
            },
            {
                title: 'Champion of Challenges',
                subtitle: 'Compete with other challengers to have the most challenges joined in Vici',
                tag: 'Vici Leaderboard',
                joined: '',
            },
            {
                title: 'Vici’s social butterfly',
                subtitle: 'Post, follow, invite and do more social actions in Vici.',
                tag: 'Vici Milestones',
                joined: '',
            },
        ]
        return (
            <div className="my-6">
                <div className="text-28 font-bold text-other_challenges mb-3">
                    Other Challenges
                </div>
                <div className="grid grid-rows-1 grid-cols-4 grid-flow-col gap-6">
                    {
                        challenges.map((challenge, i) => (
                            <div className="rounded-xl">
                                <img alt="" src="/img/dummy/Frame 1794.png" className="w-full" />
                                <div className="p-3 bg-primary_color h-64">
                                    <div className="text-center uppercase text-10 pt-2 font-bold tracking-widest">
                                        Vici Challenge
                                    </div>
                                    <div className="text-center text-xl font-bold py-3">{challenge.title}</div>
                                    <p className="text-sm px-3">{ challenge.subtitle }</p>
                                    <div className="px-3 py-8">
                                        <div className="text-10 font-bold p-1 bg-white_color text-center w-4/12 rounded-full">{ challenge.tag }</div>
                                    </div>
                                    <div className="flex justify-between px-3">
                                        <div className="flex">
                                            <div className="bg-white_color p-1 rounded-full">
                                                <img alt="" src="/img/Vici Logo.png" width="16" />
                                            </div>
                                            <div className="text-xs font-bold pl-3 pt-1">Vici</div>
                                        </div>
                                        <div className="text-xs font-bold">
                                            20 Joined 
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center font-bold text-10 uppercase py-3 bg-bottom_gray rounded-b-xl tracking-widest">
                                    Instructions
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-end py-5">
                    <button className="text-sm text-vici_secondary">See more</button>
                </div>
            </div>
        )
    }
}

export default OtherChallenges