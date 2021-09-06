import JoinWaitlist from './modals/JoinWaitlist'
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    let path = window.location.pathname;

    function handleRedirect() {
        path = '/';
        history.push("/");
    }

    function demo() {
        window.open('https://demo.vici.life/', '_blank')
      }

    return ( 
        <div className="container mx-auto">
            <div className="text-red-500 h-24 flex justify-between">
                <div onClick={handleRedirect} className="pt-3 cursor-pointer">
                    <img src="/img/vici.png" alt="header_logo" width="135"/>
                </div>
                <div className="flex">
                    <div className="pt-6">
                        <button onClick={demo} className="mr-8 font-bold shadow-lg px-6 py-2 text-primary_color bg-white_color">Demo</button>
                    </div>
                    { path !== '/thankyou' ? (
                    <div className="pt-6">
                        {/* <button className="mr-8 font-bold shadow-lg px-6 py-2 text-white_color bg-primary_color rounded-lg uppercase">Join Waitlist</button> */}
                        <JoinWaitlist btnName="Join Waitlist" />
                    </div>
                    ) : ( <div></div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Header