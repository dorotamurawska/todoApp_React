import React from 'react';

export class CheckboxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.todoChecked,
        }
        this.checkedChange = this.checkedChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    
    }

    checkedChange(event) {

        // this.props.todoChecked = event.target.checked

        this.setState({
            checked: event.target.checked
        })

    }

    isChecked(){
        return this.state.checked
    }



    render() {
        return (
            <div>
                <div>


                    <label className="form-check-label">
                        <input type="checkbox" 
                        
                        onChange={this.checkedChange}
                         
                        className="form-check-input" />
                        {this.props.label}
                    </label>


                </div>
            </div>
        )
    };
};