import React from 'react';

export class CheckboxComponent extends React.Component {
 
 
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