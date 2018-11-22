import React from 'react';
//import { CheckboxComponent } from "./CheckboxComponent";


class Task {
    constructor(label) {
        this.label = label;
        this.checked = false;
        this.id = Math.floor(Date.now() / 1000);
        

    }
}

export class SingleListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [new Task("posprzatac"), new Task("posprzatac2"), new Task("posprzatac3")],
            inputTaskLabel: "",

        }
        this.createTask = this.createTask.bind(this);
        this.updateInputTask = this.updateInputTask.bind(this);
      //  this.clearInput = this.clearInput.bind(this);

    }

    updateInputTask(event) {

        this.setState({
            inputTaskLabel: event.target.value
        })
    
    };

    createTask() {

        this.state.tasks.push(new Task(this.state.inputTaskLabel))
        this.setState(
            this.state
        )
        this.setState({
            inputTaskLabel: ""
        })
    }

    // clearInput = (event) => {
    //     this.refs.buttonCreateTask.value= ""
    // }


    // TODO delete input after click cleanInput = (e) => {}

    render() {

        const todo = (oneTask) => {
            return React.createElement('div',
                { className: 'container styleCheckboxElement', key: Math.floor(Date.now() * Math.random()) },
                React.createElement('label',
                    { className: 'form-check-label', key: Math.floor(Date.now() * Math.random()) },
                    React.createElement('input',
                        {
                            type: 'checkbox',
                            checked: oneTask.checked,
                            onChange: (event) => {
                                oneTask.checked = !oneTask.checked;
                                console.log(oneTask);
                                this.setState(

                                    this.state
                                )
                            
                            },
                            
                             className: 'form-check-input', key: Math.floor(Date.now() * Math.random())
                        }
                    ),
                    oneTask.label
                )
            )
        }

        // const x = [1,2,3,4,5,6,7,8,9]
        // undefined
        // x.filter((i) => i%2===0)
        // (4) [2, 4, 6, 8]
        // x.filter((i) => i%2===0).map((j) j=j*10)
        // VM5221:1 Uncaught SyntaxError: missing ) after argument list
        // x.filter((i) => i%2===0).map((j) j*10)
        // VM5228:1 Uncaught SyntaxError: missing ) after argument list
        // x.filter((i) => i%2===0).map((j) => j*10)
        // (4) [20, 40, 60, 80]

        const todoTasksToRender =
            this.state.tasks.filter((item) => !item.checked).map(todo)

        // checked | result
        // false   | true
        // true    | false


        const doneTasksToRender =
            this.state.tasks.filter((item) => item.checked).map(todo)

        // checked | result
        // false   | false
        // true    | true

        //add two const with checked and unchecked propertis




        return (
            <div>

                <h4 className="pt-5">{this.props.title}</h4>
                <div className="row">
                    <div className="col-7 px-1">

                        <h6>Todo</h6>
                        <div>{todoTasksToRender}</div>


                        <div className="input-group mb-2">
                            <input
                                type="text"
                                onChange={this.updateInputTask}
                                className="form-control form-control-sm col-4 todoInput"
                                placeholder="Create item task"
                                max="10"
                                min="1"
                                value={this.state.inputTaskLabel}
                                required 
                                // id="inputCreateTask"
                                // ref="inputCreateTask"
                                />
                            <button
                                onClick={this.createTask}
                                className="btn btn-outline-secondary btn-sm"
                                type="button">+</button>


                        </div>



                    </div>
                    <div className="col-1px-1">
                        <h6>Done</h6>
                        <div>{doneTasksToRender}</div>

                    </div>
                </div>



            </div>
        )
    };
};
