import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
    {
        id: 1,
        name: 'james',
        phone: '05545555'
    },
    {
        id: 2,        
        name: 'John',
        phone: '055488885555'
    },
    {
        id: 3,        
        name: 'Jane',
        phone: '055887745555'
    }
]

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Contact list</h1>
                <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

render(<App contacts={contacts} />, document.getElementById('app'));