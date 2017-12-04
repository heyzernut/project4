import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './Posts';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="Posts" list={PostList} />
    </Admin>
);

export default App;
