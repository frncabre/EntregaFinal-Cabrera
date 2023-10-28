const products = [
    {
      id: 0,
      name: 'Jordan 1 Next Chapter',
      price: 149000,
      category: 'nike',
      img: 'https://www.digitalsport.com.ar/files/products/6514448b9eb8b-634096-1200x1200.jpg',
      stock: 20,
      description: 'Zapatilla de Spider-Man Across the Spider-Verse',
    },
    {
      id: 1,
      name: 'Jordan 1 Lost And Found',
      price: 169000,
      category: 'nike',
      img: 'https://wayoff.ru/wp-content/uploads/2023/03/555088-101_2_1.png',
      stock: 15,
      description: 'Zapatillas representacion Chicago del 85',
    },
    {
        id: 2,
        name: 'AdiFom Q',
        price: 84900,
        category: 'adidas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AVKKOD8oSkd5Pi0VAuwXG-IDk0NWkXZeiA&usqp=CAU',
        stock: 20,
        description: 'Zapatilla del futuro',
      },

  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };


  export const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        if (filteredProducts.length > 0) {
          resolve(filteredProducts);
        }else{
          reject('Error')
        }
      }, 500);
    });
  };