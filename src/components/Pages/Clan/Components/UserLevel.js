import React from 'react';

class UserLevel extends React.Component {
    
    render () {
        return (
            <div className="mb-6 bg-white_color p-6 shadow-lg rounded-md">
                <div className="flex">
                    <div>
                        <img src="/img/user_main.jpg" className="rounded-full h-20 w-20"/>
                    </div>
                    <div className="pl-3 pt-3">
                        <div className="text-xl font-bold">Daphne Winter</div>
                        <div className="pt-2">Level 1</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserLevel