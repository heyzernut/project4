import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './Posts';
import Test from './Test';
import Supplier from './Supplier';

const App = () => (
    <Admin restClient={jsonServerRestClient('')}>
        <Resource name="Test" list={ Test } />
        <Resource name="Posts" list={ PostList } />
        <Resource name="Supplier" list={ Supplier } />
    </Admin>
);


export default App
