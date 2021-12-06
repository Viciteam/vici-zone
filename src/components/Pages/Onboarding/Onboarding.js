import React from 'react';
import OnboardingContent from './OnboardingContent';
import OnboardingSidebar from './OnboardingSidebar';
import OtherChallenges from './OtherChallenges';

class Onboarding extends React.Component {
    render () {
        return (
            <div className="container mx-auto mt-10">
                <div className="main-content flex w-full">
                    <div className="w-vici_sidebar mr-6">
                        <OnboardingSidebar />
                    </div>
                    <div className="w-2/3">   
                        <div className="">
                            <OnboardingContent />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                   <OtherChallenges />
                </div>
            </div>
        )
    }
}

export default Onboarding