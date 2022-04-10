import React from 'react';

const OrderedProduct = (props) => {
    const {name,price,newDate} = props.order;
    console.log(props)
    return (
        <div>
            <table class="table w-75 m-auto table-dark">
             <tbody>
    <tr>
    <th scope="row">{name}</th>
    <th scope="row">{price}</th>
    <th scope="row">{newDate}</th>
      
    </tr>
    </tbody>
    </table>

        </div>
    );
};

export default OrderedProduct;