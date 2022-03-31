import React from 'react';
import Carousel from './Carousel';
import CountDownTimer from './CountDownTimer';
class Presell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'challenges',
            imgIndex: 0,
            features: ['challenges','customize','managing','joining','social_features','business'],
        }
        this.handleFeatures = this.handleFeatures.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleFeatures = (feature, index) => {
        this.setState({ imgIndex: index});
        this.setState({ active: feature });
    }

    handleNext = (index) => {
        if(index < this.state.features.length - 1){
            this.setState({ imgIndex: index+1});
            this.setState({ active: this.state.features[index+1] });
        }
    }

    handlePrevious = (index) => {
        if(index > 0){
            this.setState({ imgIndex: index-1});
            this.setState({ active: this.state.features[index-1] });
        }
    }

    render () {

        const availableFeatures = [
            {
                title: 'Create any types of challenges suitable for your campaign',
                subtitle: '',
                value: 'challenges',
                image: '/img/zone/presell/features/1.png',
            },
            {
                title: 'Customize your challenges',
                subtitle: '',
                value: 'customize',
                image: '/img/zone/presell/features/2.png',
            },
            {
                title: 'Manage Your Challenges',
                subtitle: 'Easily manage multiple challenge campaigns without hiring the entire marketing department',
                value: 'managing',
                image: '/img/zone/presell/features/3.png',
            },
            {
                title: 'Joining Challenges',
                subtitle: 'The best challenge experience for your audience',
                value: 'joining',
                image: '/img/zone/presell/features/4.png',
            },
            {
                title: 'Social Features',
                subtitle: 'Connecting with your audience and challenge participants',
                value: 'social_features',
                image: '/img/zone/presell/features/5.png',
            },
            {
                title: 'Business and Agency Features',
                subtitle: '',
                value: 'business',
                image: '/img/zone/presell/features/6.png',
            },
        ]


        return (
            <div className="bg-primary_background font-inter">
                <div className="bg-white_color h-20 flex justify-center p-3">
                    <img src="/img/Vici Logo.png" width="63" />
                </div>                
                <div className="container mx-auto z-10">
                    <div className="px-6 py-3 mt-6 rounded-3xl text-lg text-center bg-vici_bg_opacity">
                        <div>Engage with your audience on a new level with a <span className="font-bold">new content type</span></div>
                        <div>that boosts your brand awareness, conversion, customer retention, word-of-mouth, and ultimately <span className="font-bold">revenue</span></div>
                    </div>
                </div>
                <div className="bg-no-repeat bg-left-bottom bg-none xl:bg-presell-circle">
                    <div className="container mx-auto">
                        <div className="xl:mt-20 mt-6 block xl:flex">
                            <div className="w-full xl:w-1/2">
                                <div className="text-5xl whitespace-normal leading-tight text-center xl:text-left xl:whitespace-pre">
                                    Quickly create <br/>
                                    and run viral <span className="font-bold">Challenges</span>
                                </div>
                                <div className="text-4xl leading-tight mt-6 text-center xl:text-left">
                                    That your audiences will love to participate and invite their friends
                                </div>
                                <div className="text-lg font-bold mt-6 text-vici_secondary text-center xl:text-left">
                                    (without hiring an entire marketing department!)   
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <div className="flex justify-center xl:justify-end">
                                    <img src="/img/zone/presell/Group 1632.png" className="mt-6 xl:-mt-12" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mt-20 justify-center text-2xl">
                            <div className="block sm:flex">
                                <div className="mb-3 sm:mb-0">
                                    <button className="px-6 py-2 mr-0 sm:mr-2 rounded-lg bg-primary_color shadow-border_shadow_button hover:text-white_color"><a href="#pre-order">Get Early Access</a></button>
                                </div>
                                <div>
                                    <button className="px-14 py-2 ml-0 sm:ml-2 bg-white_color rounded-lg border hover:text-primary_color"><a href="#learn-more">Learn more</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 border-b border-vici_gray">
                    <div className="container mx-auto">
                        <div className="block sm:flex pb-6">
                            <div className="flex w-full sm:w-1/2 p-6 border-r border-vici_gray">
                                <div>
                                    <img src="/img/zone/presell/Quote Mark.png" className="w-12" />
                                </div>
                                <div className="pl-3 pr-6">
                                    <p className="text-sm">
                                        Your project idea is truly interesting. As a marketer I see a potential for business to use Vici and for younger generation customers to engage in challenges.
                                    </p>
                                    <div className="flex mt-6 text-sm">
                                        <div>
                                            <img src="/img/zone/presell/dr.donatas.png" className="w-18" />
                                        </div>
                                        <div className="pl-3">
                                            <div className="font-bold">Donatas Jonikas, PhD</div>
                                            <div className="text-sm">Startup Marketing Supervisor</div>
                                            <div className="text-sm">Author of Startup Evolution Curve</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full sm:w-1/2 p-6">
                                <div>
                                    <img src="/img/zone/presell/Quote Mark.png" className="w-16" />
                                </div>
                                <div className="pl-3 pr-6">
                                    <p className="text-sm">
                                        If companies have this, they will be able to strengthen the connection with customers and increase their loyalty. I can see us creating challenges to encourage students to achieve certificates in exchange for some kinds of gifts.
                                    </p>
                                    <div className="flex mt-6 text-sm">
                                        <div>
                                            <img src="/img/zone/presell/Frame 2700.png" className="w-18" />
                                        </div>
                                        <div className="pl-3">
                                            <div className="font-bold">Truong Van Cuong</div>
                                            <div className="text-sm">Founder - CEO</div>
                                            <div className="text-sm">KOHI VIET NAM EDUCATION JOINT STOCK COMPANY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>   

                <div className="mt-6" id="learn-more">
                    <div className="text-center text-4xl font-extrabold">What’s a Challenge?</div>
                    <div className="container mx-auto">
                        <div className="flex mt-3">
                            <div className="w-1/2 flex justify-center">
                                <img src="/img/zone/presell/2 23.png" className="w-8/12" />
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <img src="/img/zone/presell/Feature 2.png" className="w-8/12"/>
                            </div>
                        </div>
                        <div className="p-6 text-center w-10/12 mx-auto">
                            <div className="text-sm">
                                A challenge consists of a goal, some actions that your audience needss to take, and optionally some kinds of rewards upon completion. 
                                Challenge is an underused type of content that is highly viral, engaging, fun, and motivational to your audience.
                            </div>
                            <div className="block sm:flex mt-6">
                                <div className="flex sm:block justify-center">
                                    <img src="/img/zone/presell/Frame 1781.png" className="w-8/12" />
                                </div>
                                <div className="w-full pl-0 sm:pl-6 pt-5 text-center sm:text-left">
                                    <div className="text-xl font-extrabold">
                                        Challenges are used by different types of businesses and organizations to
                                    </div>
                                    <div className="text-sm">boost brand awareness, generate leads, drive sales & increase customer engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-vici_light_gray px-12 py-3">
                    <div className="container mx-auto">
                        <div className="block lg:flex">
                            <div className="w-full lg:w-2/3 lg:px-12 px-0 pb-12 pt-0 xl:pt-28 text-lg">
                                <p>
                                    In 2019, Too Faced Cosmetics noticed that one of their lip glosses was selling out due to a viral TikTok challenge where young users were showing off the effects fo the product on their pout with <span className="font-bold">before and after videos.</span>
                                </p>
                                <br />
                                <p className="font-bold">Too Faced didn’t miss this opportunity. They launched a similar challenge to promote a new mascara, and sales skyrocketed.</p>
                                <br />
                                <p>
                                    The strategy worked, generating 1 billion views on the campaign’s hashtag
                                    #TFDamn Girl up until now.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img src="/img/zone/presell/Frame 2754.png" className="rounded-3xl w-10/12"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 px-12 py-6">
                    <div className="container mx-auto">
                        <div className="text-xl text-center font-bold">
                            and so many more challenges are used successfully by companies and organizations around the world
                        </div>
                    </div>
                </div>

                <div className="mt-6 pb-12 border-b border-vici_gray">
                    <Carousel />
                </div>

                <div className="mt-6 border-b border-vici_gray">
                    <div className="container mx-auto">
                        <div className="block sm:flex p-6">
                            <div className="w-full sm:w-1/2">
                                <div className="text-2xl px-6 font-black">
                                    Benefits of using challenges
                                </div>
                                <div className="flex mt-6">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/writer 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">User generated content</div>
                                        <p className="pt-3 text-sm">
                                            Instead of you having to come up with your own content like other types of content, content in challenges is created by the challenge participants which you can then use to promote in other marketing challenges
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/social-media 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Highly Engaging</div>
                                        <p className="pt-3 text-sm">
                                            Unlike other types of content such as videos or articles that people just read or watch and can skim through quickly to move on to the next thing. Challenges are highly engagin, motivational, and fun to both participants and viewers, hence driving more brand engagement and stickiness
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/viral 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Virality</div>
                                        <p className="pt-3 text-sm">
                                            Challenges are viral by nature. Additionally, you can easily add viral actions into the challenges by requiring participants to share the challenge or tag their friends. Imagine having a piece of content that promotes itself and becomes a sensation world-wide
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/brand 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Raise brand-awareness</div>
                                        <p className="pt-3 text-sm">
                                            Challenge can be a great way to increase brand awareness by putting your target audience to your brand through fun activities
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pt-0 pt-12">
                                <div className="text-2xl px-6 font-black">
                                    Problems solved
                                </div>
                                <div className="flex mt-6">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/content-creator 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Can’t produce content consistently</div>
                                        <p className="pt-3 text-sm">
                                            According to The State of Content Marketing Survey 2017 by Zazzle Media, 60% say they can't produce content consistently.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex my-12">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/social-engagement 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Hard to produce engaging content</div>
                                        <p className="pt-3 text-sm">
                                            The same survey showed that 65% of respondents find it difficult to produce engaging content.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex my-12">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/organic 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Higher organic acquisition cost via content</div>
                                        <p className="pt-3 text-sm">
                                            According to Profitwell, content CAC is growing quicker than paid CAC
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/5 mt-8">
                                        <div className="flex justify-center">
                                            <img src="/img/zone/presell/benefits/follow 1.png" className=""/>
                                        </div>
                                    </div>
                                    <div className="w-4/5 px-6">
                                        <div className="text-lg font-black">Hard to retain followers</div>
                                        <p className="pt-3 text-sm">
                                            45% of respondents to a Buzzstream poll said they’ll unfollow brands on social media that spend too much time talking about their brand and products while ignoring their audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mb-12">
                            <div className="text-lg w-1/3 mx-auto text-center">
                                <div>Yes, challenges are so beneficial.</div> 
                                <div>But why aren’t more companies using them?</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="font-black text-2xl py-6 text-center">The challenges of running challenges</div>
                </div>
                <div className="bg-vici_light_gray pb-6">
                    <div className="container mx-auto">
                        <div className="block sm:flex">
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <div className="flex px-12 p-6 mb-6 bg-white_color rounded-xl">
                                    <div className="">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        Cannot capture challenge participant information    
                                    </div>
                                </div>
                                <div className="flex px-12 p-6 mb-6 bg-white_color rounded-xl">
                                    <div className="">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        Hard to manage lots of participants   
                                    </div>
                                </div>
                                <div className="flex px-12 p-6 mb-3 bg-white_color rounded-xl">
                                    <div className="pt-2">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        Overwhelmed by challenge submissions via social comments, hashtags & direct messages  
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <div className="flex px-12 p-6 mb-6 bg-white_color rounded-xl">
                                    <div className="">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        No statistics on the effectiveness of challenge campaigns  
                                    </div>
                                </div>
                                <div className="flex px-12 p-6 mb-6 bg-white_color rounded-xl">
                                    <div className="">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        No easy way to manage rewards upon challenge completions 
                                    </div>
                                </div>
                                <div className="flex px-12 p-6 mb-3 bg-white_color rounded-xl">
                                    <div className="pt-2">
                                        <div className="p-1 rounded-full bg-vici_cancel text-white_color">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        Having to piece together various tools or custom code your own solution to make an okay challenge campaign  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div>These are some of the reasons why challenges are not fully utilized to their full potential by businesses.</div>
                            <div>(Imagine doing email marketing nowadays without an email automation tool.)</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="text-center text-3xl font-black">
                        Introducing Vici
                    </div>
                    <div className="text-center text-lg mt-3 text-vici_secondary_text">The platform built for businesses and organizations to harness the power of challenges</div>
                    <div className="container mx-auto mt-12">
                        <div className="block sm:flex px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Easily Create Challenges</div>
                                <br />
                                <p>
                                    With our easy <span className="font-bold">step-by-step challenge creation tool,</span> you can set up any types of challenges from simple to complex in a few minutes.
                                </p>
                                    <br />
                                <p>
                                    Specify what actions you want your challenge participants to take, how you want to verify those actions and what rewards you want to give for those who completed the actions.
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="w-10/12 mx-auto">
                                    <img src="/img/zone/presell/1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="block sm:flex mt-6 px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="w-8/12 mx-auto mt-0 sm:-mt-8">
                                    <img src="/img/zone/presell/2.png" />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Raise Brand Awareness</div>
                                <br />
                                <p>
                                Boost awareness to your challenges by sharing them on social media or embedding them on your website.
                                </p><br/><p>
                                Robust invite features allow your challenge participants to invite their friends to your challenge, kickstarting a never-ending viral loop.  
                                </p>
                            </div>
                        </div>
                        <div className="block sm:flex mt-6 px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Acquire Participant Information</div>
                                <br />
                                <p>
                                Stop wasting your challenge exposure by not capturing the information of the participants.
                                </p><br/><p>
                                With Vici, participants can seamlessly sign up to your challenge with their email address, Google Facebook, Tiktok and other social accounts.
                                </p><br/><p>
                                Export your participant information or sync with your CRM and email marketing tool. 
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="w-10/12 mx-auto mt-0 sm:-mt-8">
                                    <img src="/img/zone/presell/3.png" />
                                </div>
                            </div>
                        </div>
                        <div className="block sm:flex mt-6 px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="w-8/12 mx-auto mt-0 sm:-mt-8">
                                    <img src="/img/zone/presell/4.png" />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Activate your participants</div>
                                <br />
                                <p>
                                Motivate your audience to complete your challenge by posting updates and chatting with them inside the challenge. Your audience also receives email notifications if they are not active. This way you can get them back and continue the challenge.
                                </p><br/><p>
                                You will also see challenge statistics such as percentage of completion & abandonment.  
                                </p>
                            </div>
                            
                        </div>
                        <div className="block sm:flex mt-6 px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Retain your audience</div>
                                <br />
                                <p>
                                Your audience can discover <span className="font-bold">new challenges and content</span> from your brand. They can also connect with your business and other users through social features such as <span className="font-bold">social posts</span> and <span className="font-bold">instant messaging</span>. 
                                </p>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="w-10/12 mx-auto mt-0 sm:-mt-8">
                                    <img src="/img/zone/presell/5.png" />
                                </div>
                            </div>
                        </div>
                        <div className="block sm:flex mt-6 px-3">
                            <div className="w-full sm:w-1/2">
                                <div className="w-10/12 mx-auto mt-0 sm:-mt-12">
                                    <img src="/img/zone/presell/6.png" />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="text-xl font-bold">Referrals</div>
                                <br />
                                <p>
                                <span className="font-bold">Supercharge word-of-mouth</span> by allowing your <span className="font-bold">audience, influencers, and team members</span> to start and promote their own challenges under your brand Zone.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="text-center text-lg mt-3 pb-6 text-vici_secondary_text">With the Vici, you will be able to grow your audience and ultimately generate more revenue</div>
                    <div className="flex justify-center">
                        <img src="/img/zone/presell/7.png" />
                    </div>
                    <div className="flex justify-center mb-3 sm:mb-0 mt-6">
                        <button className="px-6 text-xl py-2 mr-0 sm:mr-2 rounded-lg bg-primary_color shadow-border_shadow_button hover:text-white_color"><a href="#pre-order">Get Early Access</a></button>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="text-center text-2xl font-black">Features that will be available on Vici</div>
                </div>
                <div className="py-6 border-b border-vici_secondary_text">
                    <div className="container mx-auto">
                        <div className="block lg:flex justify-evenly text-sm">
                            <button onClick={() => this.handleFeatures('challenges', 0)} className={`${this.state.active == 'challenges' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Challenges</button>
                            <button onClick={() => this.handleFeatures('customize', 1)} className={`${this.state.active == 'customize' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Customize</button>
                            <button onClick={() => this.handleFeatures('managing',2)} className={`${this.state.active == 'managing' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Managing</button>
                            <button onClick={() => this.handleFeatures('joining', 3)} className={`${this.state.active == 'joining' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Joining</button>
                            <button onClick={() => this.handleFeatures('social_features', 4)} className={`${this.state.active == 'social_features' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Social Features</button>
                            <button onClick={() => this.handleFeatures('business', 5)} className={`${this.state.active == 'business' ? 'bg-primary_color font-bold' : ''} uppercase px-6 py-3 rounded-3xl`}>Business & Agency Features</button>
                        </div>
                        <div className="mt-6">
                            <div className="text-center text-xl font-bold text-vici_secondary">{ availableFeatures[this.state.imgIndex].title }</div>
                            <div className="text-lg text-center">{ availableFeatures[this.state.imgIndex].subtitle }</div>
                            <div className="flex justify-center">
                                <div className="">
                                    <img src={availableFeatures[this.state.imgIndex].image} />
                                </div>
                            </div>
                            <div className="flex justify-center mt-12">
                                <button onClick={() => this.handlePrevious(this.state.imgIndex)} className="mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                {
                                    availableFeatures.map((item, i) => ( 
                                        <button onClick={() => this.handleFeatures(item.value, i)} className="mx-1">
                                            <div className={`h-4 w-4 rounded-full ${this.state.imgIndex == i ? 'bg-primary_color' : 'bg-vici_gray'} `}></div>
                                        </button>
                                    ))
                                }
                                <button onClick={() => this.handleNext(this.state.imgIndex)} className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-12 text-lg font-bold text-center">
                                And so many more
                            </div>
                            <div className="text-center mt-6">
                                If you want to get your hands on the above amazing features and be a pioneer to implement challenges in your marketing strategies before your competitors find out about this, this is the chance for you.
                            </div>
                        </div>
                    </div>
                </div> 
                <div id="pre-order" className="mt-6 container mx-auto">
                    <div className="text-center text-3xl font-black">Introducing Vici pre-order program</div>
                    <div className="text-center">With this program, you will be able to pre-order lifetime access to Vici Zone for a low one-time payment.
                    When the product is released, it will be sold for a monthly subscription. So this is your chance to be an early adopter and lock in your license for a one-time fee.</div>
                
                    <div className="mt-3 text-center text-xl font-bold text-vici_secondary">All pre-order packages includes</div>
                    <div className="w-2/3 mx-auto mt-3">
                        <div className="text-center font-bold">Whitelabel and custom domain,  Unlimited challenge activities, social posts, and conversations Unlimited team members, admins, and moderators</div>
                        <div className="text-xs uppercase text-center mt-3 text-vici_secondary_text">*These special pre-order packages will only be available for the first 100 customers or until March 31st. So hurry up before the time runs out!</div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <CountDownTimer />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <table class="table-auto">
                            <thead>
                                <tr className="text-sm sm:text-xl py-1 sm:py-6">
                                    <th>
                                    </th>
                                    <th width="200" className="border-l border-vici_prof_bg">
                                        <div>Pro</div>
                                        <div className="text-xs sm:text-lg">$ 79</div>
                                    </th>
                                    <th width="200" className="border-l border-vici_prof_bg">
                                        <div>VIP</div>
                                        <div className="text-xs sm:text-lg">$ 157</div>
                                    </th>
                                    <th width="200" className="border-l border-vici_prof_bg px-3">
                                        <div className="bg-primary_color py-3 rounded-xl">
                                            <div className="px-1 sm:px-3 py-1 -mt-6 bg-vici_secondary text-white_color text-xs sm:text-sm w-2/3 mx-auto rounded-xl">Best Value</div>
                                            <div>Agency</div>
                                            <div className="text-xs sm:text-lg">$ 357</div>
                                        </div>
                                    </th>
                                    <th width="200" className="border-l border-vici_prof_bg">
                                        <div>Supreme</div>
                                        <div className="text-xs sm:text-lg">$ 987</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-xs sm:text-lg py-3">
                                    <td className="font-bold px-3 py-3">Total Audience</td>
                                    <td className="text-right py-3 pr-3">1,000</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">2,500</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">10,000</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">30,000</td>
                                </tr>
                                <tr className="text-xs sm:text-lg py-3 bg-vici_light_gray">
                                    <td className="font-bold px-3 py-3">Media storage</td>
                                    <td className="text-right pr-3 py-3">25 GB</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">100 GB</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">500 GB</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">2,000 GB</td>
                                </tr>
                                <tr className="text-xs sm:text-lg py-3">
                                    <td className="font-bold px-3 py-3">Agency Features</td>
                                    <td className="text-right pr-3 py-3">-</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">-</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">Yes</td>
                                    <td className="text-right py-3 pr-3 border-l border-vici_prof_bg">Yes</td>
                                </tr>
                                <tr className="text-xs sm:text-lg py-3 bg-vici_light_gray border-b border-vici_prof_bg">
                                    <td className="font-bold px-3 py-3">Number of Clients</td>
                                    <td className="text-right pr-3 py-3">-</td>
                                    <td className="text-right pr-3 py-3">-</td>
                                    <td className="text-right pr-3 py-3">3</td>
                                    <td className="text-right pr-3 py-3">10</td>
                                </tr>
                                <tr className="text-xs sm:text-lg py-6">
                                    <td className="font-bold px-3 py-6"></td>
                                    <td className="text-right pr-3 py-6">
                                        <button className="bg-primary_color shadow-vici px-3 py-2 rounded-xl hover:text-white_color"><a href="https://go.vici.zone/vici-zone-pro-pre-order/" target="_blank">Pre-order now</a></button>
                                    </td>
                                    <td className="text-right pr-3 py-6">
                                        <button className="bg-primary_color px-3 shadow-vici py-2 rounded-xl hover:text-white_color"><a href="https://go.vici.zone/vici-zone-vip-preorder/" target="_blank">Pre-order now</a></button>
                                    </td>
                                    <td className="text-right pr-3 py-6">
                                        <button className="bg-primary_color px-3 py-2 shadow-vici rounded-xl hover:text-white_color"><a href="https://go.vici.zone/vici-zone-agency-pre-order/" target="_blank">Pre-order now</a></button>
                                    </td>
                                    <td className="text-right pr-3 py-6">
                                        <button className="bg-primary_color px-3 py-2 shadow-vici rounded-xl hover:text-white_color"><a href="https://go.vici.zone/vici-zone-supreme-pre-order/" target="_blank">Pre-order now</a></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex w-2/3 mx-auto">
                        <div className="w-1/4">
                            <img src="/img/zone/presell/Group.png" className="w-8/12" />
                        </div> 
                        <div className="pt-3 w-3/4">
                            Either <span className="font-bold">you are satisfied</span> with how Vici Zone helps you engage with your audience and grow your business, <span className="font-bold">or you get your money back.</span> No questions asked.
                        </div>
                    </div>
                </div> 
                <div className="mt-6 bg-vici_light_gray pb-6">
                    <div className="text-center text-3xl font-black py-6">FAQs</div>
                    <div className="container mx-auto px-12">
                        <div className="block sm:flex">
                            <div className="w-full sm:w-1/2 px-3 sm:px-12">
                                <div>
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">What is total audience?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                        Total audience is the total number of contacts you added to your zone. Your audience are people who can engage in challenges and social posts.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">If I pre-order today, when can I use them?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    We are running this pre-order program in order to gather feedback and ideas from early visionaries like you who see the value of Vici Zone for your business so that we can build the platform to match your exact needs. This process can take a long time especially special business features such as white-label and agency. However, our goal is to release Vici Zone in 2022 and that's when you can start using your credit.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">Why should I buy these pre-order credits today?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    This offer is only available during the prelaunch period of Vici Zone. Because we only accept a few early customers to deliver the best services, these special pre-order packages will only be available for the first 100 customers or until March 31st. We have sold hundreds of licenses on other launches of other software products so these licenses can go fast. The best time to take action is today.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">What are my next steps after the purchase?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    After completing the check-out process. You will be added to a special space where you can request features and share feedback. Please check your emails for the next steps.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">How can I get in touch with support?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    You can just email hi@vici.team and we'll get to you asap.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">Who are you guys anyway?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    We are a group of skilled marketers, designers and developers who are developing Vici for ourselves and wanted to bring the same platform to you.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 px-3">
                                <div>
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">What if I pre-order and you don't develop the platform?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    We already invested a lot of time and money on developing this platform which you can see a live in-progress demo version built on real codes on Vici.life. In parallel with technical development, we are running this pre-order campaign to test out our marketing messages and gather feedback from early visionaries like you so that we can best prepare for our public launch. If we stop developing the platform for any reason, you are covered by our lifetime money-back guarantee.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">What if I run out of storage later on?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    Don't worry. You will be able to upgrade your storage in case you have reached the full capacity.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">Can I sell my purchased package to others if I don't use it?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    Yes, you can. You can just need to let us know who you sell your package to.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">How can I get my money back if I'm not satisfied?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    If you are not satisfied with Vici Zone for any reasons and you haven't used more than 30% of your purchased credit, just email us at hi@vici.team to get your refund.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <div className="text-lg font-bold">What if I'm not technical?</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm">
                                    Don’t worry – we built the platform so everyone can use it. You don’t need to be technical to experience results. If you have technical questions, you can always get answers from us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6 py-3">
                        <button className="text-2xl px-5 py-3 text-vici_secondary font-bold bg-primary_color rounded-2xl hover:text-white_color shadow-vici"><a href="#pre-order">Pre-order Vici Zone Today</a></button>
                    </div>
                </div>
                <div className="mt-6 pb-6">
                    <div className="text-3xl text-center font-black">The Team</div>
                    <div className="container mx-auto mt-6">
                        <div className="block lg:flex mx-24">
                            <div className="w-full lg:w-1/4 mx-6 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/hoang.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Hoang Lo
                                </div>
                                <div className="uppercase text-sm font-bold py-2">Founder</div>
                                <div className="text-vici_secondary text-sm">creating SaaS products since 2018. 9 years of experience in digital marketing.</div>
                            </div>
                            <div className="w-full lg:w-1/4 mx-6 mt-6 lg:mt-0 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/ana.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Ana Bering Asuncion
                                </div>
                                <div className="uppercase text-sm font-bold py-2">mARKETING LEad</div>
                                <div className="text-vici_secondary text-sm">12 years of experience in marketing</div>
                            </div>
                            <div className="w-full lg:w-1/4 mx-6 mt-6 lg:mt-0 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/eddie.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Eddie Lopez
                                </div>
                                <div className="uppercase text-sm font-bold py-2">TECHINCAL TEAM LEAD</div>
                                <div className="text-vici_secondary text-sm">18 years of Technical Experience</div>
                            </div>
                            <div className="w-full lg:w-1/4 mx-6 mt-6 lg:mt-0 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/jae.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Jaelene Silbor
                                </div>
                                <div className="uppercase text-sm font-bold py-2">Design team lead</div>
                                <div className="text-vici_secondary text-sm"> 4 years of experience in multimedia design</div>
                            </div>
                        </div>
                        <div className="w-3/4 block lg:flex mx-auto justify-center mt-6">
                            <div className="w-full lg:w-1/4 mx-6 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/rock.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Rocky Gonzales
                                </div>
                                <div className="uppercase text-sm font-bold py-2">front-end developer</div>
                                <div className="text-vici_secondary text-sm"> 4 years of coding experience</div>
                            </div>
                            <div className="w-full lg:w-1/4 mx-6 mt-6 lg:mt-0 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/arphie.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Arphie Balboa
                                </div>
                                <div className="uppercase text-sm font-bold py-2">FULL STACK DEVELOPER</div>
                                <div className="text-vici_secondary text-sm"> 4 years of coding experience</div>
                            </div>
                            <div className="w-full lg:w-1/4 mx-6 mt-6 lg:mt-0 text-center">
                                <div className="flex justify-center">
                                    <img src="/img/zone/presell/team/jom.png" />
                                </div>
                                <div className="text-xl text-vici_secondary font-bold pt-2">
                                    Jomari Valdez
                                </div>
                                <div className="uppercase text-sm font-bold py-2">DESIGNER</div>
                                <div className="text-vici_secondary text-sm"> 5 years Of Experience in Multimedia Design</div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-black text-center">Advisor</div>
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-center w-full sm:w-1/2 mx-auto">
                                <div>
                                    <img src="/img/zone/presell/team/donatas.png" />
                                </div>
                                <div>
                                    <div className="text-2xl text-vici_secondary font-bold pt-2 pl-3 capitalize">
                                        Donatas jonikas (PHD)
                                    </div>
                                    <div className="text-sm pl-3 text-vici_secondary">Words Top 20 Startup Guru for 2021</div>
                                    <div className="text-sm pl-3 text-vici_secondary">Author of Amazon best-seller</div>
                                    <div className="text-sm pl-3 text-vici_secondary">Featured in Forbes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="py-6 bg-vici_bg_footer">
                    <div className="container flex mx-auto text-white_color text-sm font-inter font-normal">
                        <div className="w-1/3">
                            <div>
                                Copyright 2022
                            </div>
                            <div>
                                Vici Life Pte. Ltd.
                            </div>
                        </div>
                        <div className="w-1/3 text-center">
                            <div className="font-light">All Rights Reserved</div>
                            <div className=""><a href="https://vici.life/privacy-policy" target="_blank" >Privacy</a>  | <a href="https://vici.life/terms-and-conditions" target="_blank" >Terms and Conditions</a></div>
                        </div>
                        <div className="w-1/3 text-right">
                            <div className="font-light">hi@vici.team</div>
                            <div className="font-light">68 Circular Road #02-01,</div>
                            <div className="font-light">Singapore 049422, Singapore</div>
                        </div>
                    </div>
                </div>                     
            </div>
        )
    }
}

export default Presell