import "../styles/steppers.css";
import Stepper from "./Stepper";
import React, { Component } from "react";

export default class StepperCompo extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
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
