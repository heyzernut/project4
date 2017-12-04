import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import Moment from 'react-moment';

export const Orders = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="date" />
            <TextField source="" />
            <TextField source="" />
        </Datagrid>
    </List>
);
