import React, { useState, useEffect } from 'react';
import { useAsync } from '../../hooks/useAsync';
//import { getProducts, getProductByCategory } from '../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/firebase/firebase/products'

const ItemListContainer = ({ greeting }) => {
  const {categoryId} = useParams()


  const asyncFunction = () => getProducts(categoryId)//categoryId ? getProductByCategory(categoryId) : getProducts()

  const {data: products, loading, error} = useAsync(asyncFunction, [categoryId])

  if(loading){
    return <h1>Loading ...</h1>
  }

  if(error){
    return <h1>Hubo un error al cargar los productos</h1>
  }  

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </>
  );
};


export default ItemListContainer;
