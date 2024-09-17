
"use client";
import React from 'react';


const AddproductForm = () => {
  return (
<form
      onSubmit={async (eo) => {
        eo.preventDefault();
    
      }}
      style={{ textAlign: "left" }}
    >
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Image
        </label>
        <input
          onChange={(eo) => {
          
          }}
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
        
      }}
      required
      placeholder='Product Description'
      className="form-control"
      id="exampleInputPassword1"
      rows={3}
      />

      </div>


      <button type="submit" className="btn btn-primary">
        {/* {Loading?  */}
          {false? 
        <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span style={{marginLeft:"5px"}}>Loading...</span>
        </>
        : "Add product"}
      </button>
      
  
    </form> 
  );
}

export default AddproductForm;
