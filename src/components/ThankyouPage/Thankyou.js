const Thankyou = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-4">
                <div>
                    <div className="text-xl font-bold">“Every life’s triumph begins with a decision to try”</div>
                    <div className="text-7xl font-bold uppercase text-primary_color mt-8">Thank you</div>
                    <div className="mt-8">Thanks a bunch for joining our waitlist. </div>
                    <div className="">Keep your aspirations burning & acknowledge challenges to win through life.</div>
                    <div className="mt-24 font-bold">Impart that Fighting Spirit</div>
                    <div className="grid grid-rows-1 grid-cols-2 gap-4">
                        <div className="mt-4">
                            <div>Help us spread the word</div>
                            <div className="flex mt-8">
                                <div className="pr-6">
                                    <button className="bg-primary_color rounded-full p-2 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"/></svg>
                                    </button>
                                </div>
                                <div className="pr-6">
                                    <button className="bg-primary_color rounded-full p-2 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32" height="32" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                    </button>
                                </div>
                                <div>
                                    <button className="bg-primary_color rounded-full p-2 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white_color" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                Help us keep this vision alive
                            </div>
                            <div className="mt-6">
                                <button className="flex mr-8 font-bold shadow-lg px-6 py-2 text-primary_color bg-white_color uppercase transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <a class="dbox-donation-button" href="https://donorbox.org/help-to-build-vici-the-achievement-social-network">Donate now</a>
                                    <span className="pl-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary_color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="uppercase mt-6 text-sm">together, let’s make a difference</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-end">
                        <img src="/img/image_thankyou.png" />
                    </div>
                    <div className="text-center pl-36 font-semibold mt-6">More updates from us soon!</div>
                </div>
            </div>
        </div>
    )
}

export default Thankyou