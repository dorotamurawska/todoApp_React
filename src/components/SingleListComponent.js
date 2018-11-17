import React from 'react';
import { CheckboxComponent } from "./CheckboxComponent";


export class SingleListComponent extends React.Component {

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
        this.checkedFalseTask = this.checkedFalseTask.bind(this);
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
        this.checkedFalseTask()
    }

    checkedFalseTask() {
        console.log(this.state.tasks)
        this.setState({
            checkedFalse: [
                this.state.tasks.filter(comp => comp.isChecked())
            ]
        })
    }
   

    //cleanInput = (e) => {}

    render() {


        return (
            <div>
                
                    <h4 className="pt-5">{this.props.title}</h4>
                    <div className="row">
                        <div className="col-7 px-1">

                            <h6>Todo</h6>
                            <div>{this.state.tasks}</div>

                           
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
                        <div className="col-1px-1">
                            <h6>Done</h6>
                            {this.state.checkedFalse}
                        </div>
                    </div>


                
            </div>
        )
    };
};
