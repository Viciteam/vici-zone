const ContactContent = () => {
    return (
        <div>
            <div className="bg-primary_color h-580">
                <div className="container mx-auto">
                    <div className="mx-36 pt-32">
                        <div className="uppercase text-center text-6xl font-bold text-white_color">Contact Our Team</div>
                        <div className="mt-12 pb-8 text-center text-2xl text-white_color w-3/4 mx-auto">If you need our help, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us.</div>
                        <div className="bg-white_color p-12 rounded-xl shadow-2xl z-10">
                            <form method="POST" name="fa-form-1" action="https://webhook.helpwise.io/forms/d2b14406-44e9-4a28-8804-44fc2df30276" enctype="multipart/form-data" accept-charset="utf-8">
                                <div className="grid grid-rows-2 grid-cols-2 gap-6">
                                    <div>
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">Your name *</label>
                                        <input type="text" required placeholder="name" name="name" id="first-name" autocomplete="given-name" className="mt-1 border block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">Contact email *</label>
                                        <input type="email" required placeholder="sample@email.com" name="email" id="email" className="mt-1 border block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">Company name</label>
                                        <input type="text" placeholder="Your company" name="company" id="company" autocomplete="company" className="mt-1 border block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div>
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">Country</label>
                                        <input type="text" placeholder="eg. Indonesia" name="country" id="country" autocomplete="country" className="mt-1 border block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div>
                                        <label for="about" className="block text-sm font-medium text-gray-700">
                                            Your message *
                                        </label>
                                        <div className="mt-1">
                                            <textarea id="message" name="your message" rows="6" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Type your message..." />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-200">
                                            By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-12 flex justify-end">
                                    <button type="submit" className="text-white_color bg-vici_button_txt text-xl py-2 px-6 flex rounded-lg">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-20 grid grid-rows-1 grid-cols-3 gap-4 pb-16">
                        <div className="text-center">
                            <div className="flex justify-center">
                                <img alt="" src="/img/emailus.png" />
                            </div>
                            <div className="mt-12 text-2xl font-bold">Email us</div>
                            <div className="w-3/4 mx-auto pt-3">Email us for general queries, including marketing and partnership opportunities.</div>
                            <div className="w-3/4 mx-auto pt-5 font-bold text-primary_color">Hello@vici.team</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center">
                                <img alt="" src="/img/chat.png" />
                            </div>
                            <div className="mt-12 text-2xl font-bold">Live chat</div>
                            <div className="w-3/4 mx-auto pt-3">Chat to a member of our team. We are always happy to help.</div>
                            <div className="w-3/4 flex justify-center mx-auto pt-5">
                                <button className="text-vici_button_txt text-xl border border-vici_button_txt py-1 px-6 flex rounded-lg">
                                   Chat
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center">
                                <img alt="" src="/img/location.png" />
                            </div>
                            <div className="mt-12 text-2xl font-bold">Address</div>
                            <div className="w-3/4 mx-auto pt-3">68 Circular Road #02-01, Singapore, 049422</div>
                        </div>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="266" viewBox="0 0 2159 266" fill="none">
                        <path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M0 264.233H2158.5V0.09375C1798.75 80.5934 1439 120.843 1079.25 120.843C719.5 120.843 359.75 80.5934 0 0.09375V264.233Z" fill="#DEDEDE"/>
                    </svg>
                </div>
                <div className="bg-vici_contact_footer h-32 w-full -mt-24">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2496 0C8.17125 0 0 8.17125 0 18.2496C0 28.3279 8.17125 36.4992 18.2496 36.4992C28.3279 36.4992 36.4992 28.3279 36.4992 18.2496C36.4992 8.17125 28.3279 0 18.2496 0ZM18.249 3.04688C26.6347 3.04688 33.457 9.86918 33.457 18.2549C33.457 26.6405 26.6347 33.4629 18.249 33.4629C9.86332 33.4629 3.04102 26.6405 3.04102 18.2549C3.04102 9.86918 9.86332 3.04688 18.249 3.04688ZM12.168 15.2043H15.2096V12.6311C15.2096 10.3256 16.4232 9.12109 19.1576 9.12109H22.8136V12.9231H20.6206C19.918 12.9231 19.772 13.2105 19.772 13.9375V15.2043H22.8136L22.5398 18.2459H19.772V27.3707H15.2096V18.2459H12.168V15.2043Z" fill="#596366"/>
                                </svg>
                            </div>
                            <div className="px-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8746 0C8.79625 0 0.625 8.17125 0.625 18.2496C0.625 28.3279 8.79625 36.4992 18.8746 36.4992C28.9529 36.4992 37.1242 28.3279 37.1242 18.2496C37.1242 8.17125 28.9529 0 18.8746 0ZM18.876 3.04688C27.2616 3.04688 34.0839 9.86918 34.0839 18.2549C34.0839 26.6405 27.2616 33.4629 18.876 33.4629C10.4903 33.4629 3.66797 26.6405 3.66797 18.2549C3.66797 9.86918 10.4903 3.04688 18.876 3.04688ZM26.6089 13.9403C27.3663 13.8491 28.0887 13.6483 28.7594 13.3503C28.2575 14.1015 27.6233 14.7616 26.8903 15.2878C27.1275 20.5543 23.2008 26.4261 16.2477 26.4261C14.1338 26.4261 12.1674 25.8071 10.5098 24.7441C12.4974 24.9783 14.4791 24.4263 16.0561 23.1914C14.4197 23.1609 13.0343 22.0797 12.5583 20.5923C13.1453 20.7049 13.7232 20.6714 14.2494 20.5284C12.4488 20.1665 11.2048 18.5438 11.2458 16.8101C11.7507 17.0899 12.3271 17.2587 12.94 17.2785C11.2732 16.1638 10.8002 13.9616 11.7812 12.2796C13.6274 14.5441 16.3877 16.0345 19.4977 16.1911C18.9517 13.8491 20.728 11.5938 23.1461 11.5938C24.2213 11.5938 25.1961 12.0485 25.8774 12.7769C26.7306 12.6096 27.5321 12.2979 28.256 11.869C27.9746 12.7435 27.383 13.4765 26.6089 13.9403Z" fill="#596366"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4976 0C8.4193 0 0.248047 8.17125 0.248047 18.2496C0.248047 28.3279 8.4193 36.4992 18.4976 36.4992C28.576 36.4992 36.7472 28.3279 36.7472 18.2496C36.7472 8.17125 28.576 0 18.4976 0ZM18.499 3.04688C26.8847 3.04688 33.707 9.86918 33.707 18.2549C33.707 26.6405 26.8847 33.4629 18.499 33.4629C10.1133 33.4629 3.29102 26.6405 3.29102 18.2549C3.29102 9.86918 10.1133 3.04688 18.499 3.04688ZM22.1863 10.8189C21.2237 10.7747 20.9347 10.7656 18.4984 10.7656C16.0621 10.7656 15.7731 10.7732 14.812 10.8173C12.3361 10.9299 11.1833 12.1024 11.0708 14.5585C11.0282 15.5196 11.0176 15.8086 11.0176 18.2449C11.0176 20.6812 11.0282 20.9702 11.0708 21.9313C11.1849 24.3813 12.3331 25.5584 14.812 25.6725C15.7731 25.7166 16.0621 25.7257 18.4984 25.7257C20.9362 25.7257 21.2237 25.7151 22.1863 25.6725C24.6622 25.56 25.8134 24.3844 25.9275 21.9313C25.9701 20.9702 25.9792 20.6812 25.9792 18.2449C25.9792 15.8086 25.9701 15.5212 25.9275 14.5585C25.8134 12.1039 24.6607 10.9314 22.1863 10.8189ZM18.4998 9.12109C16.0209 9.12109 15.7122 9.13174 14.7373 9.17736C11.422 9.32944 9.58183 11.1681 9.42975 14.4834C9.38565 15.4583 9.375 15.7685 9.375 18.2459C9.375 20.7248 9.38565 21.035 9.42975 22.0083C9.58183 25.3222 11.422 27.1639 14.7373 27.3159C15.7122 27.36 16.0209 27.3707 18.4998 27.3707C20.9787 27.3707 21.2889 27.36 22.2638 27.3159C25.573 27.1639 27.4208 25.3252 27.5698 22.0083C27.6139 21.035 27.6246 20.7248 27.6246 18.2459C27.6246 15.7685 27.6139 15.4583 27.5698 14.4834C27.4208 11.1727 25.5791 9.32792 22.2638 9.17736C21.2889 9.13174 20.9787 9.12109 18.4998 9.12109ZM13.8109 18.2485C13.8109 15.6601 15.9096 13.5629 18.4965 13.5629C21.0834 13.5629 23.1821 15.6616 23.1821 18.2485C23.1821 20.8369 21.0834 22.9341 18.4965 22.9341C15.9096 22.9341 13.8109 20.8369 13.8109 18.2485ZM18.4967 21.2903C16.8162 21.2903 15.4551 19.9292 15.4551 18.2487C15.4551 16.5697 16.8162 15.2071 18.4967 15.2071C20.1757 15.2071 21.5398 16.5682 21.5398 18.2487C21.5398 19.9292 20.1757 21.2903 18.4967 21.2903ZM22.2715 13.3801C22.2715 12.7749 22.7627 12.2852 23.3665 12.2852C23.9733 12.2852 24.463 12.7749 24.463 13.3801C24.463 13.9854 23.9717 14.4751 23.3665 14.4751C22.7612 14.4751 22.2715 13.9839 22.2715 13.3801Z" fill="#596366"/>
                                </svg>
                            </div>
                        </div>
                        <div className="text-vici_gray flex justify-center pt-10">© Copyright Vici 2021. All Right Reserved.</div>
                    </div>
                </div>
            </div>
            <div className="h-32 -mt-28">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="266" viewBox="0 0 2160 266" fill="none">
                    <path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M2160 265.014H0V0.691406C360 81.247 720 121.525 1080 121.525C1440 121.525 1800 81.247 2160 0.691406V265.014Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}

export default ContactContent