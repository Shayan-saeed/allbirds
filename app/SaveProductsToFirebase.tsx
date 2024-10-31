import { collection, doc, setDoc } from "firebase/firestore";
import db from './firebaseConfig';

const SaveProductsToFirestore = async () => {
    const products = {
        mens: [
            {
                name: "Men's Wool Runner Go",
                price: 77,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1yFevTPVx6rBNnNsD6nWUz/1"
            },
            {
                name: "Men's Wool Runner",
                price: 67,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4orFDd5g3zeVaA6Gzt5YEB/2"
            },
            {
                name: "Men's Wool Runner Mizzels",
                price: 97,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1"
            },
            {
                name: "Men's Wool Dasher Mizzels",
                price: 101,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/31hAgckpYX3elISwqPhI7C/1"
            },
            {
                name: "Men's Tree Runner Go",
                price: 84,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4y50FVO6KXe2h7HtQl2uOK/2"
            },
            {
                name: "Men's Wool Runner-up Mizzels",
                price: 101,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/73TPGU1pUzQ9rkW1aCog3t/1"
            },
            {
                name: "Men's Tree Flyer 2",
                price: 80,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3UefDm6GLKu8YUlvgS1nnN/2"
            },
            {
                name: "Men's Tree Gliders",
                price: 94,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2C2UkN4VRMbkleOkPAcacz/1"
            },
            {
                name: "Men's Wool Loungers",
                price: 73,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1pKmUxVCVVJU1bCppFt5lY/1"
            },
            {
                name: "Men's Tree Skippers",
                price: 69.99,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/18vIivEjpigzuIMEBThtlV/2"
            },
            {
                name: "Men's Tree Runners",
                price: 98,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3rhKORN3J95IP1bnAygejK/1"
            },
            {
                name: "Men's Tree Dasher 2",
                price: 135,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5orWCriOBkoyZRcM5jvWJh/1"
            }
        ],
        womens: [
            {
                name: "Women's Wool Runner Go",
                price: 77,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7Lvy6fl9eGeEN6iTKl2Utf/1"
            },
            {
                name: "Women's Wool Runners",
                price: 68,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4orFDd5g3zeVaA6Gzt5YEB/2"
            },
            {
                name: "Women's Wool Runner Mizzels",
                price: 97,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1"
            },
            {
                name: "Women's Wool Dasher Mizzels",
                price: 101,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1"
            },
            {
                name: "Women's Tree Runner Go",
                price: 84,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/31hAgckpYX3elISwqPhI7C/1"
            },
            {
                name: "Women's Wool Runner-up Mizzels",
                price: 101,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vQDHzOoMjC0EQm6a1HYry/1"
            },
            {
                name: "Women's Tree Flyer 2",
                price: 80,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/73TPGU1pUzQ9rkW1aCog3t/1"
            },
            {
                name: "Women's Tree Gliders",
                price: 94,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2C2UkN4VRMbkleOkPAcacz/1"
            },
            {
                name: "Women's Wool Loungers",
                price: 73,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6BOf7hpfsaus0EMxBiKlZd/1"
            },
            {
                name: "Women's Tree Skippers",
                price: 69.99,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1pKmUxVCVVJU1bCppFt5lY/1"
            },
            {
                name: "Women's Tree Runners",
                price: 98,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/18vIivEjpigzuIMEBThtlV/2"
            },
            {
                name: "Women's Tree Dasher 2",
                price: 135,
                imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3rhKORN3J95IP1bnAygejK/1"
            }
        ]
    };

    // Save men's shoes
    const mensShoesCollection = collection(db, "collections", "mens", "shoes");
    products.mens.forEach(async (product) => {
        try {
            await setDoc(doc(mensShoesCollection), {
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Men's shoe added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });

    // Save women's shoes
    const womensShoesCollection = collection(db, "collections", "womens", "shoes");
    products.womens.forEach(async (product) => {
        try {
            await setDoc(doc(womensShoesCollection), {
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Women's shoe added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });
};


export default SaveProductsToFirestore
