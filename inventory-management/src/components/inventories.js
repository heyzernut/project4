import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
// import Moment from 'react-moment';

export const Inventories = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="itemCode" />
            <TextField source="model" />
            <TextField source="color" />
            <TextField source="dimension" />
        </Datagrid>
    </List>
);
