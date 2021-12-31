import './../../../styles/profiles.css';
import React from 'react';
import ReactModal from 'react-modal';
import { HexColorPicker } from "react-colorful";

// add avatar component
import Avatar from "./Avatar.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import ImageUploading, {ImageListType} from 'react-images-uploading';

class SideProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            showOptions: false,
            isModalOpen: false,
            mainColor: '#c6ad23',
            showColorChange: false,
            createClanConfirm: false,
            images: []
        }
        this.data_initialize = this.data_initialize.bind(this);
        this.createClan = this.createClan.bind(this);
        this.joinClan = this.joinClan.bind(this);
        this.openClanOptions = this.openClanOptions.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeColorOption = this.changeColorOption.bind(this);
        this.createClanNow = this.createClanNow.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    }

    data_initialize(){
        console.log('stats', this.state.uinfo.stats);
    }

    createClan(){
        console.log('create a clan clicked');
        this.setState({isModalOpen: true});
        this.setState({showOptions: false});
    }

    joinClan(){
        console.log('join a clan');
    }

    openClanOptions(){
        console.log('openClanOptions');
        if(this.state.showOptions){
            this.setState({showOptions: false});
        } else {
            this.setState({showOptions: true});
        }
        

    }

    closeModal(){
        this.setState({isModalOpen: false});
    }

    changeColor(vals){
        // console.log(vals);
        this.setState({mainColor: vals});
        this.setState({showColorChange: true});
    }

    changeColorOption(){
        console.log('change color');
        if(this.state.showColorChange){
            this.setState({showColorChange: false});
        } else {
            this.setState({showColorChange: true});
        }
    }

    createClanNow(){
        this.setState({createClanConfirm: true});
    }

    uploadImage(imageList, addUpdateIndex){
        console.log('uploaded', imageList);
        console.log('uploaded', addUpdateIndex);
    }



    render () {
        const data_i = () => {
            // this.data_initialize()
            // return this.state.uinfo;
            const dstats = this.state.uinfo;

            // console.log('dinfo', dstats);
        }
        const user_info = this.state.uinfo;

        
        return (
            <div className="sd-inner">
                { data_i() }
                <div className="main-profile">
                    <div className="header">
                        <div className="header-inner">
                            <div className="hi-left">
                                <div className="levelrate">Lvl {user_info.level}</div>
                                <div className="dshowclan">
                                    <div className="showedClan" onClick={this.openClanOptions}>{user_info.clan}</div>
                                    <div className={"clanlist " + (this.state.showOptions ? 'open_clan_option' : 'close_clan_option')}>
                                        <div className="dcl-inner">
                                            <ul>
                                                <li>
                                                    <div className="dicon">i</div>
                                                    <div className="dname">The Ibial Team - Lvl 50</div>
                                                </li>
                                                <li>
                                                    <div className="dicon">i</div>
                                                    <div className="dname">Fitness Club - Lvl 10</div>
                                                </li>
                                                <li className="create_clan" onClick={this.createClan}>Create Clan</li>
                                                <li className="join_clan" onClick={this.joinClan}>Join Clan</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ReactModal
                                        isOpen={this.state.isModalOpen}
                                        contentLabel="Example Modal"
                                        className="create_clan_modal"
                                        ariaHideApp={false}
                                    >
                                        <div className={"dcreate_clan_inner " + (this.state.createClanConfirm ? 'hide_form' : '')}>
                                            <div className="header_part">
                                                <div className="dtitle">
                                                    <h2>Create a Clan</h2>
                                                </div>
                                                <div className="dclose">
                                                    <button onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></button>
                                                </div>
                                            </div>
                                            <div className="content_part">
                                                <div className="dconts">
                                                    Clans are communities of people with shared interests, goals and challenges
                                                </div>
                                                <div className="dformlist">
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan name</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan Description</label>
                                                        <textarea placeholder=""></textarea>
                                                    </div>
                                                    <div className="df_item">
                                                        <label htmlFor="">Clan Color <span>(can be changed later)</span></label>
                                                        <div className="dcolortag">
                                                            <div className="colorswatch" onClick={this.changeColorOption}>
                                                                <div className="xswatch" style={{ background: this.state.mainColor, borderColor: this.state.mainColor }}>&nbsp;</div>
                                                            </div>
                                                            <div className="colorinput">
                                                                <input type="text" value={this.state.mainColor} read-only />
                                                            </div>
                                                        </div>
                                                        <div className={"colorpicker " + (this.state.showColorChange ? 'open_color_option' : 'close_color_option')}>
                                                            <HexColorPicker color={this.state.mainColor} onChange={this.changeColor} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dbuttonups">
                                                    <button className="dcancel" onClick={this.closeModal}>Cancel</button>
                                                    <button className="dcreate" onClick={this.createClanNow}>Create Clan</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"dcreate_clan_inner dcreatedconfirm " + (this.state.createClanConfirm ? 'confirmed_on' : 'confirmed_off')}>
                                            <div className="header_part">
                                                <div className="dtitle">
                                                    {/* <h2>Create a Clan</h2> */}
                                                </div>
                                                <div className="dclose">
                                                    <button onClick={this.closeModal}><FontAwesomeIcon icon={faTimes} /></button>
                                                </div>
                                            </div>
                                            <div className="dmainmessage">
                                                <div className="dmessagemain">Your clan has been created!</div>
                                                <div className="dclanname"><a href="">Running Club</a></div>
                                            </div>
                                            <div className="dbuttonups">
                                                <button className="dcancel" onClick={this.closeModal}>Close</button>
                                                <button className="dcreate">Invite Friends</button>
                                            </div>
                                        </div>
                                    </ReactModal>
                                </div>
                            </div>
                            <div className="hi-right">
                                <div className="dcreatechallenge">
                                    <div className="dimage"><img src="/img/challenge_question.png"/></div>
                                    <div className="dtext">Challenge</div>
                                </div>
                            </div>
                            <br className="clear"/>
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="d-profile-avatar">
                            <div className="d-profile-avatar-inner">
                                <img src="/img/user-profile.png" alt="" />
                            </div>
                            <ImageUploading
                                multiple
                                value={this.state.images}
                                onChange={this.uploadImage}
                                maxNumber={69}
                                dataURLKey="data_url"
                            >
                                {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                                }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    >
                                    Click or Drop here
                                    </button>
                                </div>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                    <div className="user-details">
                        <div className="ud-inner">
                            <h3>{user_info.name}</h3>
                            <div className="stats">
                                <ul>
                                    <li>
                                        <div className="dpointicon" style={{background: "#ffca28"}}>&nbsp;</div>
                                        <div className="dpointtext">250</div>
                                    </li>
                                    <li>
                                        <div className="dpointicon" style={{background: "#9b51e0"}}>&nbsp;</div>
                                        <div className="dpointtext">0</div>
                                    </li>
                                    <li>
                                        <a href="">visit store</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dinfo">
                                <ul>
                                    {Object.keys(user_info.social_info).map( (key, item) => 
                                        <li key={key}>
                                            <div className="dnum">{user_info.social_info[key]}</div>
                                            <div className="dtext">{key}</div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideProfile