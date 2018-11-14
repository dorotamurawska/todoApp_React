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
        this.setState({
            listName: event.target.value
        })
        
    };
    createList() {
        console.log('create a list')
        


        // this.state.lists.push(
        //     React.createElement(SingleListComponent, {
            
        //         title: listName,
            
        //         key: Math.floor(Date.now() / 1000)
        //     })
        // )
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
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                onChange={this.updateInput}
                                className="form-control"
                                name="list" id="list"
                                placeholder="Create a list"
                                required>
                            </input>
                        </div>
                        <div className="col">
                            <button
                                onClick={this.createList}
                                className="btn btn-primary btn-block">
                                Create
                                </button>
                        </div>


                    </div>
                </div>
                {/* tutaj wyswietl zmienna z input#list */}
                <br/>
                {this.state.lists}

            </div>
        )
    };
};

