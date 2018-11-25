import React from 'react';
import ReactDOM from 'react-dom';


class Task {
    constructor(label) {
        this.label = label;
        this.checked = false;
        this.id = Math.floor(Date.now() / 1000);
        this.formRef = React.createRef();



    }
}



export class SingleListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [new Task("posprzatac"), new Task("posprzatac2"), new Task("posprzatac3")],
            inputTaskLabel: "",
            warningText: ""

        }
        this.createTask = this.createTask.bind(this);
        this.updateInputTask = this.updateInputTask.bind(this);


    }

    updateInputTask(event) {

        this.setState({
            inputTaskLabel: event.target.value
        })


    };
    createTask() {
        console.log("K")
        const checkInputValue = this.state.inputTaskLabel;
        const trimCheckInputValue = checkInputValue.trim();
        if (trimCheckInputValue.length === 0) {
            const node = ReactDOM.findDOMNode(this.refs.formRef);
            node.classList.add("was-validated");
            this.setState({
                warningText: "Non empty task name is required"
            })
        }

        else if (trimCheckInputValue.length > 20) {
            const node = ReactDOM.findDOMNode(this.refs.formRef);
            node.classList.add("was-validated");
            this.setState({
                warningText: "task name is too long"
            })
        } else {

         //   this.state.tasks.push(new Task(this.state.inputTaskLabel))
         const node = ReactDOM.findDOMNode(this.refs.formRef);
         node.classList.remove("was-validated");   
         this.setState({
                warningText: "",
                tasks: this.state.tasks.concat(new Task(trimCheckInputValue))
            })
          
        }

        this.setState({
            inputTaskLabel: ""
        })
    };




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

                        <form className="" ref="formRef">
                            <div className="input-group mb-2 ">
                                <input
                                    type="text"
                                    onChange={this.updateInputTask}
                                    className="form-control form-control-sm col-4 todoInput"
                                    placeholder="Create item task"
                                    value={this.state.inputTaskLabel}
                                    required

                                />
                                <button
                                    onClick={this.createTask}
                                    className="btn btn-outline-secondary btn-sm"
                                    type="button">+</button>
                                <div className="invalid-feedback">{this.state.warningText}</div>
                            </div>
                        </form>


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
