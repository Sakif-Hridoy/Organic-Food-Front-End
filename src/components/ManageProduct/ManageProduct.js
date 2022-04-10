import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const{name,price,_id} = props.pd;
    console.log(props)

    const deleteItem = () =>{
        fetch(`http://localhost:4545/products/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(res=>{
            console.log("product deleted",res)
        })
    }

    return (
        <div>
             <table class="table table-bordered">
                <tr>
                    <td className="product-name">{name}</td>
                    <td className="text-center price">{price}</td>
                    <td>
                        <button><FontAwesomeIcon title="Edit" className="me-4 control" icon={faEdit} /></button>
                        <button onClick={() => deleteItem( _id )} ><FontAwesomeIcon title="Delete " className="ms-2 control " icon={faTrash} /></button>
                       
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ManageProduct;