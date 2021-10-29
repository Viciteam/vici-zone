import './../../styles/challenge.css';
import React from 'react';

import PreChallengeOptions from './Segments/PreChallengeOptions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class PreChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uinfo: this.props.uinfo,
            optionArray: [],
            keyQuestions: [],
            optionNumber: 0,
        }

        this.addOptionItem = this.addOptionItem.bind(this);
        this.showChallengeOptions = this.showChallengeOptions.bind(this);
        this.challengeOptionCall = this.challengeOptionCall.bind(this);
    }

    addOptionItem(){
        console.log("thjis is a test");

        // add number on count 
        let opsnumber = this.state.optionNumber + 1;
        console.log('this is a test -> ', opsnumber);
        
        // add numer in opnumber
        this.setState({optionNumber: opsnumber});
        let oplist = this.state.optionArray;
        oplist.push(opsnumber)
        
        this.setState({optionArray: oplist});
        
        // add element on key questions
        let questions = this.state.keyQuestions;
        let newQuestionTitle = [];
        newQuestionTitle['qtext'] = 'Question '+ opsnumber;
        newQuestionTitle['qindex'] = opsnumber;
        questions.push(newQuestionTitle);
        this.setState({keyQuestions: questions});
    }

    showChallengeOptions(){
        var elements = [];
        for(let i = 0; i < 3; i++){
            elements.push(<div><PreChallengeOptions optionum={i} /></div>);
        }
        return (elements);
        
    }

    challengeOptionCall(data){
        console.log('info from component -> ', data);
        let baseindex = parseInt(data['question_index']) - 1;
        this.state.keyQuestions[baseindex]['qtext'] = data['question_text'];
        let keyquest = this.state.keyQuestions;
        keyquest[baseindex]['qtext'] = data['question_text'];
        this.setState({keyQuestions: keyquest});
        // console.log(keyquest);


    }

    render () {
        return (
            <div className="challenges-page-inner">
                <div className="pre-challenge-part">
                    <div className="pc-left-part">
                        <div className="pc-title-part">
                            <span className="diconpart"><FontAwesomeIcon icon={faArrowLeft} /></span>
                            <span className="dicontitle">Pre-challenge form</span>
                        </div>
                        <div className="fields_list">
                            <div className="fields_add">
                                <span className="diconpart">Fields</span>
                                <span className="dicontitle" onClick={() => this.addOptionItem()}>+</span>
                            </div>
                            {this.state.keyQuestions.map(item => {
                                return (
                                    <div className="fields_item" key="item">
                                        <span className="dpreoicon"><FontAwesomeIcon icon={faBars} /></span>
                                        <span className="diconpart">{item['qtext']}</span>
                                        <span className="dicontitle"><FontAwesomeIcon icon={faTimes} /></span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="pc-right-part">
                        <div className="pc-right-inner">
                            <h2>Form Description</h2>
                            <div className="dformpart">
                                <textarea name="" id="" placeholder="Descirption of form"></textarea>
                            </div>
                            {this.state.optionArray.map(item => {
                                return <PreChallengeOptions optionum={item} parentCallBack={this.challengeOptionCall} key={item} />
                            })}
                            {/* <PreChallengeOptions optionum="1" /> */}
                            <div className="daddnewoption" onClick={() => this.addOptionItem()}>
                                <span className="dmicon">+</span>
                                <span className="dmtext">Add Fields</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreChallenge