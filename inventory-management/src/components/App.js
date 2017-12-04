import React, {Component} from 'react';

import { PostList } from './Posts';
import Test from './Test';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="Test" list={Test} />
        <Test/>
    </Admin>
);


export default App
