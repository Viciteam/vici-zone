import React from 'react';

class Badge extends React.Component {

    render () {
        return (
            <div>
                <div className="font-bold uppercase">Clan Badges</div>
                <div className="pt-3">
                    <img src="/img/badge.png" className="h-20 w-20"/>
                </div>
            </div>
        )
    }

}

export default Badge