import React from "react";
export class Message extends React.Component {
  render() {
    return (
      <div
        className="message-item p-3 rounded-xl"
        style={
          this.props?.userId === this.props.senderName
            ? styles.selfMessage
            : styles.otherMessage
        }
      >
        {
          this.props?.userId === this.props.senderName ? ''
          :
          <div>{this.props.senderName}</div>
        }
        <span style={{ fontSize: "14px" }}>
          <b>{this.props.text}</b>
        </span>
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
