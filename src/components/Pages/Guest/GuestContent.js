import React from 'react';
import SideContent from './SideContent';
import MainContent from './MainContent';

class GuestContent extends React.Component {

    render () {
        return (
            <div className="container mx-auto mt-10">
                <div className="main-content">
                    <div className="profile-part">
                        <SideContent />
                    </div>
                    <div className="content-part">
                        <div className="content-inner">
                            <div className="timeline">
                                <MainContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestContent