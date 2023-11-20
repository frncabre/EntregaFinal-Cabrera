import { db } from '../firebaseConfig'
import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"

export const createAdaptedProducts = (documentSnapshot) => {
    const data = documentSnapshot.data();
    return {
        id: documentSnapshot.id,
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        img: data.img,
    };
};

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        
        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(documentSnapshot => {
                    return createAdaptedProducts(documentSnapshot)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                reject(error)
            })
    })
}

export const getProductById = (itemId) => {
    const productRef = doc(db, 'products', itemId)

    return getDoc(productRef)
                .then(documentSnapshot => {
                    return createAdaptedProducts(documentSnapshot)
                })
                .catch(error => {
                    return error
                })
}