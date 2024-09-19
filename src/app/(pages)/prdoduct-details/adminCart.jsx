
"use client";
import React, { useState } from 'react';
import {faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notFound } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const AdminCart = ({productId,puplicId}) => {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const router = useRouter();
  return (
    <div className='flex' style={{ alignItems:"center", justifyContent:"center", marginTop:"3rem"}}>
    <Link href={`/update-product/${productId}`} className="flex update-card">
        <FontAwesomeIcon style={{width:"1rem"}} icon={faPen}/>
          Update Product
        </Link>
    
        <button className="flex delete-card" onClick={ async() => {
            setLoading(true)
            setError(null)
          //send data to api router
        const response = await fetch("http://localhost:3000/api/deleteOne-product", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({productId,puplicId}),
        });
        //Complete
        if (response.ok) {
          toast.success('Your Product has been Deleted Succesfully')
          // @ts-ignore
          router.push("/");
          setLoading(false)
        } else {
          setError("Failed To Delete Product,Please Try Again");
          toast.error("Failed To Delete Product,Please Try Again")
          setLoading(false)
        }
        setLoading(false)
        }}>
        <FontAwesomeIcon style={{width:"1rem"}} icon={faTrash}/>
        {Loading? 
        <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span style={{marginLeft:"5px"}}>Loading...</span>
        </>
        : "Delete Product"}
        </button>
        <p style={{ color: "#ff7790", marginTop: "50px", textAlign: "center" ,display: "none" }}>
        {Error}
      </p>
    </div>
  );
}

export default AdminCart;
