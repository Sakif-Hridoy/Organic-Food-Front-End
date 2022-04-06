import React ,{useState}from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddProduct.css';
const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL,setImageURL] = useState()
  const onSubmit = data => {
    const eventData = {
      name:data.example,
      imageURL:imageURL
    };

    const url =  `http://localhost:6060/addProduct`
        console.log(eventData)
        fetch(url,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(eventData)
        })
        .then(res=>console.log('server side response',res))
  
  } ;

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
            <form onSubmit={handleSubmit(onSubmit)} class="form-display">
  <div class="form-group form-margin">
   
    <input name="name" defaultValue="Enter Product Name" {...register("example")} class="form-control" required />
    {errors.exampleRequired && <span>This field is required</span>}
  </div>
  <div class="form-group form-margin">
    <input type="file" onChange={handleImageUpload} required />
    {errors.exampleRequired && <span>This field is required</span>}
  </div>
  {/* <button type="submit" class="btn btn-primary button1">Upload Image</button> */}
  <input type="submit" class="btn btn-primary button2" />
</form>

        </div>


        
    );
};

export default AddProduct;