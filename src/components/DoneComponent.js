import React from 'react';
import { CheckboxComponent } from "./CheckboxComponent";

export class DoneComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h6>Done</h6>
                   <CheckboxComponent />
                </div>
            </div>
        )
    };
};