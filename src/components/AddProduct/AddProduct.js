import React ,{useState}from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddProduct.css';
const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL,setImageURL]= useState();
  const onSubmit = data => {
    const eventData = {
      name:data.name,
      price:data.price,
      imageURL:imageURL,
    }

    const url = `https://gentle-hollows-84272.herokuapp.com/addProduct`
    console.log(eventData)
    fetch(url,{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(eventData)
    })
    .then(res=>console.log('server side response',res))
  
  };
  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'c0d929accc73640e8449e070f515ca6a')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


    return (


        <div id='content'>
          <form onSubmit={handleSubmit(onSubmit)}>
             <input defaultValue="Enter Product Name" {...register("name")} required />

             <input type="number" defaultValue="Enter Product Price" {...register("price")} required />

             <input type="file"  onChange={handleImageUpload}/>
             
             <input type="submit" />
             </form>
        </div>


        
    );
};

export default AddProduct;