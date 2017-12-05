import React from 'react';

import { Admin, Resource } from 'admin-on-rest';
// import jsonAPIRestClient from 'aor-jsonapi-client/build/restClient';
import loopbackRestClient from 'aor-loopback';
// import loopbackRestClient, {authClient} from 'aor-loopback';


import { PostList } from './Posts';
import { SuppliersList } from './suppliers';
import { Orders } from './orders'
import Test from './Test';
import { Inventories } from './inventories'

const restClient = loopbackRestClient('http://localhost:5100');
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
