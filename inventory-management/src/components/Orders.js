import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
// import Moment from 'react-moment';

export const Orders = (props) => {
   console.log(props)
 return (
    <List {...props}>
        <Datagrid>
            <TextField source="orders.invoiceNo" />
            <TextField source="quotationNo" />
        </Datagrid>
    </List>
);
}
