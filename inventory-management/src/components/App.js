import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import PostList from './Posts';
import Test from './Test';

const App = () => (
    <Admin restClient={jsonServerRestClient('')}>
        <Resource name="Test" list={Test} />
    </Admin>
);


export default App
