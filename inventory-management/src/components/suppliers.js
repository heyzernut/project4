// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const SuppliersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="supplier.name" />
            <TextField source="supplier.location" />
            <TextField source="supplier.contact" />
        </Datagrid>
    </List>
);
