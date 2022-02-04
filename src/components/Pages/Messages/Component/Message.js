import React from "react";
import moment from 'moment';
export class Message extends React.Component {

  render() {
    return (
      <div>
        <div className={`${this.props?.userId === this.props.senderName ? 'flex justify-end' : 'flex'} py-2`}>
          {
            this.props?.userId === this.props.senderName ? ''
            :
            <img className="mt-3 mr-2 rounded-full h-8 w-8" src={this.props.senderName.split('|')[1]} width="32" height={32} />
          }
          <div
            className={`message-item ${this.props?.userId === this.props.senderName ? 'flex justify-end bg-primary_color text-white_color' : 'bg-vici_light_gray'} p-2 max-w-xs rounded-xl`}
            /* style={
              this.props?.userId === this.props.senderName
                ? styles.selfMessage
                : styles.otherMessage
            } */
          >
            {
              this.props?.userId === this.props.senderName ? ''
              :
              <div className="text-sm font-bold text-vici_black">
                {/* {this.props.senderName } */}
              </div>
            }
            <span className={`${this.props?.userId === this.props.senderName ? 'text-right' : 'text-vici_black'}`} style={{ fontSize: "14px" }}>
              {this.props.text}
            </span>
          </div>
        </div>
        <div className={`${this.props?.userId === this.props.senderName ? 'text-right' : 'pl-10'} text-10`}>{moment(this.props.id).fromNow()}</div>
      </div>
    );
  }
}

const styles = {
  selfMessage: {
    background: "#FCAF38",
    color: "#ffffff",
    textAlign: "right",
    marginLeft: "auto",
  },
  otherMessage: {
    background: "#F2F2F2",
    color: "black",
    textAlign: "left",
  },
};
