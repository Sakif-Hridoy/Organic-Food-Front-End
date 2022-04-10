import React from 'react';

const OrderedProduct = (props) => {
    const {name,price,newDate} = props.order;
    console.log(props)
    return (
        <div>
            <table class="table w-75 m-auto table-dark">
             <tbody>
    <tr>
     
      <td>{name}</td>
      <td>{price}</td>
      <td>{newDate}</td>
    </tr>
    </tbody>
    </table>

        </div>
    );
};

export default OrderedProduct;