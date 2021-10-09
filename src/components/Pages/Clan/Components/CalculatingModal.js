import React from 'react';

function CalculatingModal ({closeCalculating, isPassRequirement}) {

    setTimeout(function(){
        closeCalculating(false)
        isPassRequirement(true)
    }.bind(this), 3000);

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/6 rounded-xl p-6 flex justify-center">
                <div className="py-3">
                    <div className="flex justify-center">
                        <svg width="66" height="66" className="animate-spin" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M33 0.5C26.5721 0.5 20.2886 2.40609 14.944 5.97724C9.59938 9.54838 5.43378 14.6242 2.97393 20.5628C0.514082 26.5014 -0.129527 33.0361 1.12449 39.3404C2.37851 45.6448 5.47384 51.4358 10.019 55.981C14.5642 60.5262 20.3552 63.6215 26.6596 64.8755C32.964 66.1295 39.4986 65.4859 45.4372 63.0261C51.3758 60.5662 56.4516 56.4006 60.0228 51.056C63.5939 45.7114 65.5 39.4279 65.5 33C65.5 28.732 64.6594 24.5059 63.0261 20.5628C61.3928 16.6197 58.9989 13.0369 55.981 10.019C52.9631 7.00113 49.3803 4.60719 45.4372 2.97392C41.4941 1.34064 37.268 0.5 33 0.5ZM33 59C27.8577 59 22.8309 57.4751 18.5552 54.6182C14.2795 51.7613 10.947 47.7006 8.97915 42.9498C7.01127 38.1989 6.49638 32.9712 7.4996 27.9277C8.50281 22.8841 10.9791 18.2514 14.6152 14.6152C18.2514 10.9791 22.8842 8.5028 27.9277 7.49958C32.9712 6.49637 38.1989 7.01125 42.9498 8.97913C47.7007 10.947 51.7613 14.2795 54.6182 18.5552C57.4751 22.8309 59 27.8577 59 33C59 39.8956 56.2607 46.5088 51.3848 51.3848C46.5088 56.2607 39.8956 59 33 59Z" fill="black"/>
                        <path d="M59 33H65.5C65.5 28.732 64.6594 24.5059 63.0261 20.5628C61.3928 16.6197 58.9989 13.0369 55.981 10.019C52.9631 7.00113 49.3803 4.60719 45.4372 2.97392C41.4941 1.34064 37.268 0.5 33 0.5V7C39.8956 7 46.5088 9.73928 51.3848 14.6152C56.2607 19.4912 59 26.1044 59 33Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="mt-4 font-bold text-xl text-center">Calculating</div>
                </div>
            </div>
        </div>
    )
}

export default CalculatingModal