import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
  const onSubmit = data =>{
      const serviceData = {
          serviceName: data.service,
          description: data.description,
          price: data.price,
          imageURL: imageURL
      }
      console.log(serviceData)
      const url = `http://localhost:5000/addService`;
      fetch(url,{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(serviceData)
      })
      .then(res=> console.log('server side response'))
  }

const handleImageUpload = (event) =>{
    console.log(event.target.files[0])
        
    const imageData = new FormData();
    imageData.set('key', 'f72c8d0e16a53046614efaafa13853c4');

    imageData.append('image',event.target.files[0])
    console.log(imageData)

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {

    setImageURL(response.data.data.display_url);
    // console.log(response.data.data.display_url)
    })
    .catch(function (error) {
    console.log(error);
    });
    }


    return (
        

        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>this is form</h1>
        <p>service</p>
        <input name="service"  {...register("service")} />
            <br /><br />
            <p>description</p>
        <input name="description" {...register("description")} />
            <br /><br />
        <input name="price" {...register("price")} />
        <br /><br />
            <p>image upload</p>
        <input type="file" onChange={handleImageUpload}/>
            <br /><br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        </form>
    );
};

export default AddServices;