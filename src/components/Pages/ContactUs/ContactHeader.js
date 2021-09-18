import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    function handleRedirect() {
        history.push("/");
    }

    return ( 
        <div className="container mx-auto">
            <div className="text-red-500 h-24 flex justify-between">
                <div onClick={handleRedirect} className="pt-3 cursor-pointer">
                    <img src="/img/vici.png" alt="header_logo" width="135"/>
                </div>
                <div className="flex">
                    <div className="pt-6">
                        <button className="mr-8 font-bold py-2 px-6 hover:shadow-lg hover:text-primary_color">Log in</button>
                    </div>
                    <div className="pt-6">
                        <button className="mr-8 font-bold py-2 px-6 hover:shadow-lg hover:text-primary_color">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header