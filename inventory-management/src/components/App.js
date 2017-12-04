import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './Posts';
import Test from './Test';

const App = () => (
    <Admin restClient={jsonServerRestClient('')}>
        <Resource name="Test" list={ Test } />
        <Resource name="Posts" list={ PostList } />
    </Admin>
);


export default App
