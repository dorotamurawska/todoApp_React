import React from 'react';
import { SingleListComponent } from './SingleListComponent';
import ReactDOM from 'react-dom';

export class CreatListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listName: "",
            warningTextList: ""
        }
        this.createList = this.createList.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(event) {
        this.setState({
            listName: event.target.value
        })
    };

    createList() {
        const checkInputValue = this.state.listName;
        const trimCheckInputValue = checkInputValue.trim();
        console.log('lkkkk');
        if (trimCheckInputValue.length === 0) {
            const node = ReactDOM.findDOMNode(this.refs.mainFormRef);
            node.classList.add("was-validated");
            this.setState({
                warningTextList: "Non empty list name is required"
            })
        } else if (trimCheckInputValue.length > 20) {
            const node = ReactDOM.findDOMNode(this.refs.mainFormRef);
            node.classList.add("was-validated");
            this.setState({
                warningTextList: "List name is too long"
            })
        } else {
            const node = ReactDOM.findDOMNode(this.refs.mainFormRef);
            node.classList.remove("was-validated");
            const compKey = Math.floor(Date.now() / 1000);
            this.setState({
                warningTextList: "",
                lists:
                    this.state.lists.concat(
                        React.createElement(SingleListComponent, {
                            title: this.state.listName,
                            key: compKey,
                            onDelete: () => {
                                this.setState({
                                    lists: this.state.lists.filter((item) => {
                                        return parseInt(item.key) !== compKey
                                    }
                                    )
                                })
                            }
                        })
                    )
            })
        }
        this.setState({
            listName: ""
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form className="" ref="mainFormRef">
                        <div className="input-group">
                            <div className="col-9 px-1">
                                <input
                                    type="text"
                                    onChange={this.updateInput}
                                    value={this.state.listName}
                                    className="form-control"
                                    name="list" id="list"
                                    placeholder="Create a list"
                                    required
                                >
                                </input>
                                <div className="invalid-feedback">{this.state.warningTextList}</div>
                            </div>
                            <div className="col-3 px-1">
                                <button
                                    type="button"
                                    onClick={this.createList}
                                    className="btn btn-primary btn-block">
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.state.lists}
            </div>
        )
    };
};


