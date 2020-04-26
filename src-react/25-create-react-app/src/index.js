import { choice, remove } from './helpers';
import fruits from './foods';
import Dog from './Dog';

import ReactDOM from 'react-dom';
import React from 'react'

class App extends React.Component {
    render() {
        const fruit = choice(fruits);
        remove(fruits, fruit);

        return (
            <div>
                <p>I'd like one {fruit}, please</p>
                <p>Here you go: {fruit}</p>
                <p>Delicious! May I have another one?</p>
                <p>I'm sorry, we're all out. We have {fruits.length} left</p>

                <Dog />

                <div>Div not in Dog!</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));