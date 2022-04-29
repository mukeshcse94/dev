import React, { Component } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon
} from "react-share";


class ReactShareSimplified extends Component {
  render() {
    const { url, title, facebook, twitter, whatsapp, email, addClass, Previewemail } = this.props;
    let { facebookClass, twitterClass, whatsappClass, emailClass } = this.props || "shareIcon";

    let iconSize = 32;
    if (this.props.iconSize !== undefined) { iconSize = this.props.iconSize }

    return (
      <span className={addClass}>
        {facebook && (<FacebookShareButton url={url} quote={title} style={{ outline: 'none' }} className={facebookClass}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>)}

        {twitter && (<TwitterShareButton url={url} quote={title} style={{ outline: 'none' }} className={twitterClass}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>)}

        {whatsapp && (<WhatsappShareButton url={url} quote={title} style={{ outline: 'none' }} className={whatsappClass}>
          <WhatsappIcon size={iconSize} round />
        </WhatsappShareButton>)}

        {email && (<EmailShareButton url={url} quote={title} style={{ outline: 'none' }} className={emailClass}>
          <EmailIcon size={iconSize} round />
        </EmailShareButton>)}
        {Previewemail && (<EmailShareButton url={url} quote={title} style={{ outline: 'none' }} className={emailClass}>
          <EmailIcon size={iconSize} round />
        </EmailShareButton>)}
      </span>
    );
  }
}
export default ReactShareSimplified;