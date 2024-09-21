// @ts-nocheck

"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { notFound } from "next/navigation";
const AddproductForm = ({ productId }) => {
  const [Title, setTitle] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const [objData, setobjData] = useState(null);
  useEffect(() => {
    const getdata = async (productId) => {
      let data = await fetch(
        `http://localhost:3000/api/getOne-product?id=${productId}`
      );
      if (!data.ok) {
        notFound();
      }
      let products = await data.json();
      setobjData(products);
    };
    getdata(productId);
  }, [productId]);

  if (!objData) {
    return <span className="loader"></span>;
  }
  return (
    <form
      onSubmit={async (eo) => {
        eo.preventDefault();
        setLoading(true);
        setError(null);

        //inputs empty
        if (!Title || !Price || !Description) {
          setError("All Input Must be Filled");
          toast.error("All Input Must be Filled");
          setLoading(false);
          return;
        }

        // send data to DB
        const response = await fetch(
          "http://localhost:3000/api/updateproduct",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Title,
              Price,
              Description,
              productId,
            }),
          }
        );

        //Complete
        if (response.ok) {
          toast.success("Your Product has been Created Succesfully");
          // @ts-ignore
          eo.target.reset();
          router.push("/");
          setLoading(false);
        } else {
          setError("Failed To Creat Product,Please Try Again");
          toast.error("Failed To Creat Product,Please Try Again");
          setLoading(false);
        }

        setLoading(false);
      }}
      style={{ textAlign: "left" }}
    >
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Title
        </label>
        <input
          onChange={(eo) => {
            // @ts-ignore
            setTitle(eo.target.value);
          }}
          defaultValue={objData.Title}
          placeholder="Exxon-Mobil"
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
            setPrice(eo.target.value);
          }}
          defaultValue={objData.Price}
          placeholder="$99.99"
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
        <textarea
          style={{ resize: "none", overflow: "auto" }}
          onChange={(eo) => {
            // @ts-ignore
            setDescription(eo.target.value);
          }}
          defaultValue={objData.Description}
          required
          placeholder="Product Description"
          className="form-control"
          id="exampleInputPassword1"
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {Loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span style={{ marginLeft: "5px" }}>Loading...</span>
          </>
        ) : (
          "Update product"
        )}
      </button>
      <p
        style={{
          color: "#ff7790",
          marginTop: "50px",
          textAlign: "center",
          display: "none",
        }}
      >
        {Error}
      </p>
    </form>
  );
};

export default AddproductForm;
