import React, { useEffect, useState } from "react";
import List from "./List";
import "./Products.css";
import data from "../data";
import axios from "axios";
import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

export default function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  console.log("productList", productList);

  useEffect(() => {
    console.log("heyyy");
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {loading ? (
        <LoadingBox />
      ) : error ? (<MessageBox/>):(
        products.map((product) => {
          return <List key={product._id} product={product} />;
        })
      )}
    </div>
  );
}
