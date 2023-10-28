import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts } from '../asyncMock';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [products, setProducts] = useState(null);

  const {itemId} = useParams()


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return <ItemDetail item={products[(itemId)]} />;
}

export default ItemDetailContainer;
