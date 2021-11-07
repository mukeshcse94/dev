import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const DELAY = 1500;

class Recapcha extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
  }

  handleChange = value => {
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => { this.setState({ callback: "called!" }); };

  render() {
    const { value, callback, load, expired } = this.state || {};
    return (
      <div className="App">
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5>
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            ref={this._reCaptchaRef}
            sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

export default Recapcha;