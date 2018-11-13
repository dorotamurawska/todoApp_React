import React from 'react';
import { TodoComponent } from "./TodoComponent";
import { DoneComponent } from "./DoneComponent";

export class SingleListComponent extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    render() {
        

        return (
            <div>
                <div>
                    <h4>{this.props.title}</h4>
                
                    <TodoComponent />
                    <DoneComponent />
                </div>
            </div>
        )
    };
};
