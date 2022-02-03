import React from 'react';
import ReactModal from 'react-modal';
import './../styles/modalmain.css';
import { withRouter } from 'react-router-dom';

// axios
// import axios from 'axios';

// font awesome
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class JoinWaitlist extends React.Component {

    constructor () {
        super();
        this.state = {
            showModal: false,
            email: '',
            formErrors: '',
            isSuccess: false,
            loading: false
        };
        
        // initialize items
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.addToWaitlist = this.addToWaitlist.bind(this);
        
    }

    //-------- BOF handle modal events -------------
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleRedirect() {
        this.props.history.push("/waitlist-thanks");
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleStopLoading () {
        this.setState({ loading: false });
    }

    handleStartLoading () {
        this.setState({ loading: true });
    }

    //-------- EOF handle modal events -------------

    emailOnChange(event){
        // console.log('event -->', event.target.value);
        this.setState({ email: event.target.value });
        this.setState({ formErrors: "" });
    }

    async changeSegment(id){
        // console.log('changeSegment -> id ->', id);

        // const Mautic = require('mautic');
        // const client = new Mautic({
        //     baseUrl: 'https://send.ibial.com/api',
        //     auth: {
        //         username: 'ibialdev',
        //         password: 'ibialdevpassword'
        //     }
        // });

        // const segmentinfo = await client.segments.addContact(25, id).then(resp => {
        //     console.log(' info -> ', resp);
        // }).catch(serror =>{
        //     console.log('serror -> ', serror);
        // });
    }

    async addToWaitlist(){
        // this.setState({ showModal: false });
        
        this.handleStartLoading();

        const emailFromForm = this.state.email;
        console.log('loading -> ', this.state.loading);
        // verify email
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailFromForm)) {
            this.setState({ formErrors: "*Please enter valid email address." });
        } else {

            const Mautic = require('mautic');
            const client = new Mautic({
                baseUrl: 'https://send.ibial.com/api',
                auth: {
                    username: 'ibialdev',
                    password: 'ibialdevpassword'
                }
            });

            // Create contact
            const response = await client.contacts.create({
                // firstname: 'ibial',
                // lastname: 'user',
                email: emailFromForm,
                overwriteWithBlank: true,
                tags: 'vici-waitlist',
            }).then(res => {
                console.log('contact info -> ', res);
                console.log(res.data.contact.id);

                this.changeSegment(res.data.contact.id);
                this.handleCloseModal();
                this.handleStopLoading();
                this.handleRedirect();
                console.log('loading -> ', this.state.loading);
                // assign to segment
            }).catch(error => {
                console.log('error -> ', error);
            });

            // assign 

            console.log('contact id -> ', response);

            

            this.setState({ isSuccess: true });
        }


        
    }
    
    render () {

        const renderButton = () => {
            if(this.props.btnName === 'Join Waitlist'){
                return <button className="mr-8 font-bold shadow-lg px-6 py-2 text-white_color bg-primary_color uppercase rounded-lg" onClick={this.handleOpenModal}>{ this.props.btnName }</button>
            }else if(this.props.btnName === 'Uncover Vici'){
                return <button onClick={this.handleOpenModal} className="uppercase font-bold text-primary_color bg-white_color text-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl py-3 px-6 flex">
                            { this.props.btnName }
                            <span className="pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary_color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
            }else if(this.props.btnName === 'Discover Vici'){
                return <button onClick={this.handleOpenModal} className="uppercase font-bold text-white_color bg-primary_color text-xl py-3 px-6 flex rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                           { this.props.btnName }
                       </button>
            }else if(this.props.btnName === 'Join Vici'){
                return <button onClick={this.handleOpenModal} className="uppercase font-bold text-white_color bg-primary_color text-xl py-3 px-6 flex rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                           { this.props.btnName }
                       </button>
            }
        } 


        return (
            <div>
                {/* <button className="mr-8 font-bold shadow-lg px-6 py-2 text-white_color bg-primary_color uppercase rounded-lg" onClick={this.handleOpenModal}>{ this.props.btnName }</button> */}
                {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
                { renderButton() }
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="Modal jwmodal"
                    overlayClassName="Overlay"
                    ariaHideApp={false}
                >
                    <div className="joinwaitlist-main">
                        <div className="jw-inner">
                            <div className="closemods">
                                <button onClick={this.handleCloseModal}>X</button>
                            </div>
                            <h2>Join the waitlist today</h2>
                            <div className="jw-note">Subscribe below to get notified of our launch.</div>
                            <div className="sform">
                                <div className="sleft">
                                    <div className="semailform">
                                        <div className="email_icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                                        <div className="sform">
                                            <input type="text" name="name" placeholder="Your email address.." onChange={this.emailOnChange}/>
                                        </div>
                                    </div>
                                    <div className="formerror">{this.state.formErrors}</div>
                                </div>
                                <div className="sright">
                                    <button onClick={this.addToWaitlist}>{ this.state.loading ? 'Loading..' : 'Get Updates'} <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                            {this.state.isSuccess ? 
                            <div className="dsucess">
                                <h2>Thank you. You'll hear from us soon</h2>
                            </div>
                            : ''}
                        </div>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default withRouter(JoinWaitlist)