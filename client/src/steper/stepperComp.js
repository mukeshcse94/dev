import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/steppers.css";
import { getStepper } from "../actions/stepper"
import Stepper from "./Stepper";


class StepperCompo extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  componentDidMount() {
    this.props.getStepper()
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 12) {
      this.setState({
        currentStep: newStep,
      });
    }
  }

  render() {
    const { currentStep } = this.state;
    // console.log('stepper', this.props.stepper.steps)

    return (
      <>
        <div className="stepper-container-horizontal">
          <Stepper
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="blue"
          />
        </div>

        <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div>
      </>
    );
  }
}

const stepsArray = [
  "Buyer Approval",
  "Quality Approval",
  "CS Approval",
  "Material Transaction",
  "IR Creation",
  "ISO/SO Creation",
  "Hard Reservation",
  "Wait For Shipment",
  "NC Genealogy",
  "AR/AP Creation",
  "Batch Transacted",
  "Manual ASN Report",
];

const mapStateToProps = state => ({
  stepper: state.stepper
});



export default connect(mapStateToProps, { getStepper })(StepperCompo);
