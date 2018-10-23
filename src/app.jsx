import React from 'react';
import { Button, Docker } from 'lime'
import 'lime/lime.css'

export default class App extends React.Component {
    render() {
        return <div>Hello React
            <Button>Test</Button>
            <Docker />
        </div>
    }
}