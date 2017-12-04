import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './Posts';
import Test from './Test';
import {SuppliersList} from './suppliers';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:5100')}>
        <Resource name="Test" list={ Test } />
        <Resource name="Posts" list={ PostList } />
        <Resource name="suppliers" list={SuppliersList} />
    </Admin>
);


export default App
