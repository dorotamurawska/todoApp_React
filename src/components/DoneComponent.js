import React from 'react';
import { CheckboxComponent } from "./CheckboxComponent";

export class DoneComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h6>{this.props.titleDone}</h6>
                    <CheckboxComponent />
                </div>
            </div>
        )
    };
};