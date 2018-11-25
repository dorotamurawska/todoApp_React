import React from 'react';
import { SingleListComponent } from './SingleListComponent';

export class CreatListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listName: ""    
        }
        this.createList = this.createList.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    
    updateInput(event) {
        console.log('updateInput '+ event.target.value)
        this.setState({
            listName: event.target.value
        })
        
    };
    createList() {
        console.log('create a list')
    
        console.log(this.state.lists)
        this.setState({
            lists: [
                this.state.lists.concat(
                    React.createElement(SingleListComponent, {
                        title: this.state.listName,
                        key: Math.floor(Date.now() / 1000)
                    })
                )
            ]
        
        })
        this.setState({
            listName: ""
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center input-group">
                    
                        
                        
                        
                        <div className="col-6 px-1">
                            <input
                                type="text"
                                onChange={this.updateInput}
                                value={this.state.listName}
                                className="form-control"
                                name="list" id="list"
                                placeholder="Create a list"
                                required>
                            </input>
                        </div>
                        <div className="col-2 px-1">
                            <button
                                onClick={this.createList}
                                className="btn btn-primary btn-block">
                                Create
                                </button>
                        </div>  
                </div>
                {this.state.lists}
                <SingleListComponent />

            </div>
        )
    };
};


