import React from 'react';

class ClanMembers extends React.Component {

    render () {

        let members = [
            {
                id: 1,
                name: 'Michael Brown',
                avatar: '/img/dummy/1.png',
            },
            {
                id: 2,
                name: 'John White',
                avatar: '/img/dummy/2.png',
            },
            {
                id: 3,
                name: 'Jason Red',
                avatar: '/img/dummy/3.png',
            },
            {
                id: 4,
                name: 'Draymond Green',
                avatar: '/img/dummy/4.png',
            },
            {
                id: 5,
                name: 'Norman Black',
                avatar: '/img/dummy/5.png',
            },
        ]

        return (
            <div className="mt-6 bg-white_color p-6 shadow-lg rounded-md">
                <div className="font-bold pb-3">Members (200)</div>
                <div>
                    {
                        members.map((member, i) => (
                            <div className="flex py-2" key={i}>
                                <div>
                                    <img alt="" src={member.avatar} className="rounded-md h-11 w-11"/>
                                </div>
                                <div className="pl-3 pt-2">
                                    { member.name }
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }

}

export default ClanMembers;