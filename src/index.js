import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from "./components/Header";
import { CreatListComponent } from "./components/CreatListComponent";



class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                
                    <Header />
                    <CreatListComponent />
                    
                </div>
            </div>
        )
    };
};



ReactDOM.render(<App />, document.getElementById('root'));


