import React from 'react';
import { PostList } from './Posts';
import Test from './Test';
import {SuppliersList} from './suppliers';
import authClient from './authClient';

// import { Orders } from './orders'

import { jsonServerRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Total-Count', '319');
    return fetchUtils.fetchJson(url, options);
    options.user = {
        authenticated: true,
        token: 'SRTRDFVESGNJYTUKTYTHRG'
    }
    return fetchUtils.fetchJson(url, options);
}

const restClient = jsonServerRestClient('http://localhost:5100', httpClient);

const App = () => (
    <Admin authClient={authClient} restClient={restClient}>
        <Resource name="Test" list={ Test } />
        <Resource name="Posts" list={ PostList } />
        <Resource name="suppliers" list={SuppliersList} />
        {/* <Resource name="orders" list={Orders}/> */}
    </Admin>
);


export default App
