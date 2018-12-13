import React from 'react';
import ReactDOM from 'react-dom';

class Task {
    constructor(label) {
        this.label = label;
        this.checked = false;
        this.id = Math.floor(Date.now() / 1000 * Math.random());
    }
}

export class SingleListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
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
                                this.setState(
                                    this.state
                                )
                            },
                            className: 'form-check-input', key: Math.floor(Date.now() * Math.random())
                        }
                    ),
                    oneTask.label,
                    React.createElement('a',
                        {
                            href: "#",
                            className: "fas fa-times mx-2 text-black-50",
                            onClick: (event) => {
                                this.setState({
                                    tasks: this.state.tasks.filter((i) => i.id !== oneTask.id)
                                })
                            }
                        },
                     ),
                )
            )
        }

        const todoTasksToRender =
            this.state.tasks.filter((item) => !item.checked).map(todo)

        const doneTasksToRender =
            this.state.tasks.filter((item) => item.checked).map(todo)

        return (
            <div className="border border-dark mt-4 inline-block">
                <h4 className="pt-2 mb-6 text-center">{this.props.title}</h4>
                <div className="row">
                    <div className="col px-1 ml-4">
                        <h6 className="text-center">Todo</h6>
                        <div>{todoTasksToRender}</div>
                        <form className="" ref="formRef">
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    onChange={this.updateInputTask}
                                    className="form-control form-control-sm col-5 todoInput"
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
                    <div className="col px-1">
                        <h6 className="text-center">Done</h6>
                        <div>{doneTasksToRender}</div>
                    </div>
                    <div>
                        <button
                            className="btn btn-outline-secondary fas fa-times mr-4 mb-3 px-1 py-1"
                            onClick={this.props.onDelete}
                        > </button>
                    </div>
                </div>
            </div>
        )
    };
};
