// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const SuppliersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="location" />
            <TextField source="contact" />
        </Datagrid>
    </List>
);
