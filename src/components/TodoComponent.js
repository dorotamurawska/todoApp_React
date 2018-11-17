import React from 'react';
import { CheckboxComponent } from "./CheckboxComponent";

export class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            lables: "nothing",
            checkedFalse: [],
            checkedTrue: []
        }
        this.createTask = this.createTask.bind(this);
        this.updateInputTask = this.updateInputTask.bind(this);
    }

    updateInputTask(event) {
        
        this.setState({
            lables: event.target.value
        })
        
    };
        
    createTask() {
        this.setState({
            tasks: [
                this.state.tasks.concat(
                    React.createElement(CheckboxComponent, {
                        label: this.state.lables,
                        key: Math.floor(Date.now() / 1000),
                        todoChecked: false
                    
                    })
                )
            ]
        
        })
    }

    //clearInput = (e) => {}




    render() {

        return (
            <div>
            
                    <h6>{this.props.titleTodo}</h6>
                    <div>{this.state.tasks}</div>
                
                    <div>
                        <div className="input-group mb-2">
                            <input 
                                type="text"
                                onChange={this.updateInputTask}
                                className="form-control form-control-sm col-3"
                                placeholder="Create item task"
                                required />
                            <button 
                                onClick={this.createTask}
                                className="btn btn-outline-secondary btn-sm"
                                type="button">+</button>


                        </div>
                    </div>
            
            </div >
        )
    };
};