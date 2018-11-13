import React from 'react';
import { CheckboxComponent } from "./CheckboxComponent";

export class TodoComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h6>Todo</h6>
                   <CheckboxComponent />
                </div>
            </div>
        )
    };
};