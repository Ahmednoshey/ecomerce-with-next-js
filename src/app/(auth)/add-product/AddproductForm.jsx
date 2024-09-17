// @ts-nocheck

"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const AddproductForm = () => {
  const [Title, setTitle] = useState();
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState();
  const [productImg, setproductImg] = useState();

  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  return (
<form
      onSubmit={async (eo) => {
        eo.preventDefault();
        setLoading(true)
        setError(null)

          //inputs empty
          if (!Title || !Price || !Description || !productImg) {
            setError("All Input Must be Filled");
            toast.error("All Input Must be Filled")
            setLoading(false)
            return;
          }
          
          // send data to DB
          const formData = new FormData();
          formData.set("productImg", productImg);
          formData.set("Title", Title);
          formData.set("Price", Price);
          formData.set("Description", Description);
         
          const response = await fetch("api/addProduct", {
            method: "POST",
            body: FormData,
          });
    
      //Complete
      if (response.ok) {
        toast.success('Your Product has been Created Succesfully')
        // @ts-ignore
        eo.target.reset();
        router.push("/");
        setLoading(false)
      } else {
        setError("Failed To Creat Product,Please Try Again");
        toast.error("Failed To Creat Product,Please Try Again")
        setLoading(false)
      }

      setLoading(false)
    }}
    style={{ textAlign: "left" }}
    >
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Image
        </label>
        <input
         onChange={(eo) => setproductImg(eo.target.files[0])}
          required
          type="file"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Title
        </label>
        <input
          onChange={(eo) => {
            // @ts-ignore
            setTitle(eo.target.value)
          }}
          placeholder='Exxon-Mobil'
          required
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Product Price
        </label>
        <input
          onChange={(eo) => {
            // @ts-ignore
            setPrice(eo.target.value)
          }}
          placeholder='$99.99'
          required
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-4">
      <label htmlFor="exampleInputPassword1" className="form-label">
          Product Description
        </label>
          <textarea style={{resize:"none",overflow:"auto"}}
            onChange={(eo) => {
              // @ts-ignore
              setDescription(eo.target.value)
      }}
      required
      placeholder='Product Description'
      className="form-control"
      id="exampleInputPassword1"
      rows={3}
      />

      </div>


      <button type="submit" className="btn btn-primary">
        {Loading? 
        <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span style={{marginLeft:"5px"}}>Loading...</span>
        </>
        : "Add product"}
      </button>
      <p style={{ color: "#ff7790", marginTop: "50px", textAlign: "center" ,display: "none" }}>
        {Error}
      </p>
  
    </form> 
  );
}

export default AddproductForm;
