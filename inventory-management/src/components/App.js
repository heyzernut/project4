import React from 'react';
import { PostList } from './Posts';
import Test from './Test';
import {SuppliersList} from './suppliers';
import { Orders } from './orders'
import { Inventories } from './inventories'

import { simpleRestClient, fetchUtils, Admin, Resource, jsonServerRestClient } from 'admin-on-rest';
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    // options.headers.set('X-Custom-Header', 'foobar');
    options.headers.set('Content-Range', 'inventories 0-5/5');
    return fetchUtils.fetchJson(url, options);
}
const restClient = jsonServerRestClient('http://localhost:5100', httpClient);
// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('Content-Range', 'inventories 0-24/319');
//     return fetchUtils.fetchJson(url, options);
// }
// const restClient = simpleRestClient('http://localhost:5100', httpClient);



const App = () => (


    <Admin restClient={restClient}>
        <Resource name="Test" list={ Test } />
        <Resource name="Posts" list={ PostList } />
        <Resource name="suppliers" list={SuppliersList} />
        <Resource name="orders" list={Orders}/>
        <Resource name="inventories" list={Inventories}/>
    </Admin>
);


export default App
