import React from 'react';

class Leaderboard extends React.Component {

    render () {

        let users = [
            {
                id: 1,
                name: 'Michael Brown',
                steps: '2.4M',
                avatar: '/img/dummy/1.png'
            },
            {
                id: 2,
                name: 'John White',
                steps: '1.3M',
                avatar: '/img/dummy/2.png'
            },
            {
                id: 3,
                name: 'Jason Red',
                steps: '1.2M',
                avatar: '/img/dummy/3.png'
            }
        ] 

        return (
            <div className="bg-btn_bgcolor rounded-md px-3 pb-3">
                <div className="uppercase text-white_color font-bold text-xl text-center pt-4 pb-3">Leaderboard</div>
                <div className="bg-white_color rounded-md">
                    <div className="grid grid-rows-1 grid-flow-col border-b border-medium_gray">
                        <div className="text-center pt-3 pb-2">
                            <div>Rank</div>
                            <div>200</div>
                        </div>
                        <div className="text-center pt-3 pb-2">
                            <div className="flex justify-center"><img src="/img/user_main.jpg" className="rounded-full h-11 w-11"/></div>
                            <div>You</div>
                        </div>
                        <div className="text-center pt-3 pb-2">
                            <div>Steps</div>
                            <div>54k</div>
                        </div>
                    </div>
                    <div className="pt-3">
                        {
                            users.map((user, i) => (
                                <div className="flex w-full px-3 py-3" key={i}>
                                    <div className="w-1/8 px-3">{ user.id }</div>
                                    <div className="w-1/4 flex justify-center"><img src={user.avatar} className="rounded-full h-11 w-11"/></div>
                                    <div className="w-5/8">
                                        <div>{ user.name }</div>
                                        <div className="font-bold">{ user.steps } Steps</div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard;