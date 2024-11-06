import { collection, doc, setDoc } from "firebase/firestore";
import db from './firebaseConfig';

const SaveProductsToFirestore = async () => {
    const products = {
        socks: {
            noShowSocks: [
                {
                    name: "Anytime No Show Sock",
                    color: "Deep Navy",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5sztDMOkgmJf8k2vwr1ewk/1"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Rugged Beige",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1fuuAnBoafDjZy6dizXP0O/1"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Basin Blue",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/11IhO9SlbpczcoYqfFuiUJ/1"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Rugged Green",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5AQkKTrO4Jfjgsf9qF9O0j/1"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Medium Grey",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7f2u8JZomQqQTU1h54vp7y/1"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Bizzard",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/21wwgluxjopqTEXIol42I6/3"
                },
                {
                    name: "Anytime No Show Sock",
                    color: "Natural Black",
                    price: 14,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4sPbkjGxwa7OBd6Q9YTg93/3"
                },
            ],
            ankleSocks: [
                {
                    name: "Anytime Ankle Sock",
                    color: "Deep Navy",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2zbRw4Y41d7E7d3XvOVOVz/1"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Rugged Beige",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/oPTrM0K59BTj2pzK7qSRi/1"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Basin Blue",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2jPj4DMYJu2pYyaO8dpC3/1"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Rugged Green",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3E5yY6Lit7gUPHGva0kbSB/1"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Medium Grey",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1zJn8fWj9dG5I9m4eykJq4/1"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Bizzard",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/16ctLOuqs2KA6FTDVYQRln/5"
                },
                {
                    name: "Anytime Ankle Sock",
                    color: "Natural Black",
                    price: 16,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32SdmIDMFyxcIk3IbNpGK9/4"
                },
            ],
            crewSocks: [
                {
                    name: "Anytime Crew Sock",
                    color: "Sheep",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/q2ijrQq9tVVnCwAyCR9wz/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Cloudstripe",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7pCIW0q0hrvYmHsIWyy2ME/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Kiwi Bird",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/K69J21RDPnRkzVHo9m8s1/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "NZ Map",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2ypNO2U4mzEVw0OMUUYJYM/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Deep Navy",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1njCUiMSDKRJAkHmTRfJ2i/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Rugged Beige",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2ujoOaLQW2ITsRV02tf9Tv/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Rugged Green",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2PWY5uMpKraS0EgiRIpVim/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Medium Grey",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2KbFNw4LRTOaRzV7m5rl7i/1"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Natural Black",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2YJWDivoSTXAk5mv1d0Bxi/5"
                },
                {
                    name: "Anytime Crew Sock",
                    color: "Bizzard",
                    price: 18,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32Qcb6co7A6oWdoRruN7yR/3"
                },
            ],
            cozyCrewSocks: [
                {
                    name: "Trino Cozy Crew",
                    color: "Stormy Grey",
                    price: 24,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7grYZr8EHSBw3xGqygNmbo/1"
                },
                {
                    name: "Trino Cozy Crew",
                    color: "Sailor Blue",
                    price: 24,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7yuucoT5WsNgMov2zoLnkU/1"
                },
                {
                    name: "Trino Cozy Crew",
                    color: "Stony Moss",
                    price: 24,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5UJohD9XlZPXc02FkM9dpS/1"
                },
                {
                    name: "Trino Cozy Crew",
                    color: "Calm Acai",
                    price: 24,
                    imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5UJohD9XlZPXc02FkM9dpS/1"
                },
            ]   
        },
        // mens: [
        //     {
        //         name: "Men's Wool Runner Go",
        //         price: 77,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1yFevTPVx6rBNnNsD6nWUz/1",
        //         sizes: [8, 9, 10.5, 12],
        //         bestFor: "Cool Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "Black"
        //     },
        //     {
        //         name: "Men's Wool Runner",
        //         price: 67,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4orFDd5g3zeVaA6gzt5YEB/2",
        //         sizes: [9, 10, 11, 13],
        //         bestFor: "Everyday",
        //         material: "Light & Breezy Tree",
        //         hue: "Grey"
        //     },
        //     {
        //         name: "Men's Wool Runner Mizzels",
        //         price: 97,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1",
        //         sizes: [8.5, 9.5, 10, 12.5],
        //         bestFor: "Wet Weather",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "Grey"
        //     },
        //     {
        //         name: "Men's Wool Dasher Mizzels",
        //         price: 101,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/31hAgckpYX3elISwqPhI7C/1",
        //         sizes: [8, 10.5, 11, 12, 13.5],
        //         bestFor: "Active",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Brown"
        //     },
        //     {
        //         name: "Men's Tree Runner Go",
        //         price: 84,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4y50FVO6KXe2h7HtQl2uOK/2",
        //         sizes: [9, 10, 12, 14],
        //         bestFor: "Warm Weather",
        //         material: "Light & Breezy Tree",
        //         hue: "Black"
        //     },
        //     {
        //         name: "Men's Wool Runner-up Mizzels",
        //         price: 101,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/73TPGU1pUzQ9rkW1aCog3t/1",
        //         sizes: [8, 8.5, 11.5, 13],
        //         bestFor: "Cool Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Men's Tree Flyer 2",
        //         price: 80,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3UefDm6GLKu8YUlvgS1nnN/2",
        //         sizes: [9.5, 11, 12, 13.5],
        //         bestFor: "Everyday",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "White"
        //     },
        //     {
        //         name: "Men's Tree Gliders",
        //         price: 94,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2C2UkN4VRMbkleOkPAcacz/1",
        //         sizes: [8, 10.5, 12.5, 14],
        //         bestFor: "Active",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Beige"
        //     },
        //     {
        //         name: "Men's Wool Loungers",
        //         price: 73,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1pKmUxVCVVJU1bCppFt5lY/1",
        //         sizes: [8.5, 9.5, 11, 12.5],
        //         bestFor: "Warm Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "Beige"
        //     },
        //     {
        //         name: "Men's Tree Skippers",
        //         price: 69.99,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/18vIivEjpigzuIMEBThtlV/2",
        //         sizes: [9, 10, 11.5, 13],
        //         bestFor: "Cool Weather",
        //         material: "Light & Breezy Tree",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Men's Tree Runners",
        //         price: 98,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3rhKORN3J95IP1bnAygejK/1",
        //         sizes: [8, 9.5, 10.5, 12.5],
        //         bestFor: "Wet Weather",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "Grey"
        //     },
        //     {
        //         name: "Men's Tree Dasher 2",
        //         price: 135,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5orWCriOBkoyZRcM5jvWJh/1",
        //         sizes: [8, 10, 11.5, 13.5],
        //         bestFor: "Everyday",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Beige"
        //     }
        // ],
        // womens: [
        //     {
        //         name: "Women's Wool Runner Go",
        //         price: 77,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7Lvy6fl9eGeEN6iTKl2Utf/1",
        //         sizes: [8, 9.5, 11, 14],
        //         bestFor: "Cool Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "Brown"
        //     },
        //     {
        //         name: "Women's Wool Runners",
        //         price: 68,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4orFDd5g3zeVaA6Gzt5YEB/2",
        //         sizes: [8.5, 10, 10.5, 11],
        //         bestFor: "Everyday",
        //         material: "Light & Breezy Tree",
        //         hue: "Grey"
        //     },
        //     {
        //         name: "Women's Wool Runner Mizzels",
        //         price: 97,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1",
        //         sizes: [8, 9.5, 11, 12],
        //         bestFor: "Wet Weather",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Women's Wool Dasher Mizzels",
        //         price: 101,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1MnqSzTfrSBOEXwKcw6fME/1",
        //         sizes: [9, 10.5, 12, 12.5],
        //         bestFor: "Active",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Women's Tree Runner Go",
        //         price: 84,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/31hAgckpYX3elISwqPhI7C/1",
        //         sizes: [9, 11, 12, 13],
        //         bestFor: "Warm Weather",
        //         material: "Light & Breezy Tree",
        //         hue: "Brown"
        //     },
        //     {
        //         name: "Women's Wool Runner-up Mizzels",
        //         price: 101,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1vQDHzOoMjC0EQm6a1HYry/1",
        //         sizes: [8, 9.5, 10.5, 11],
        //         bestFor: "Cool Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "White"
        //     },
        //     {
        //         name: "Women's Tree Flyer 2",
        //         price: 80,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/73TPGU1pUzQ9rkW1aCog3t/1",
        //         sizes: [8, 9, 10, 11],
        //         bestFor: "Everyday",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Women's Tree Gliders",
        //         price: 94,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2C2UkN4VRMbkleOkPAcacz/1",
        //         sizes: [8.5, 9, 10.5, 11],
        //         bestFor: "Active",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Beige"
        //     },
        //     {
        //         name: "Women's Wool Loungers",
        //         price: 73,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6BOf7hpfsaus0EMxBiKlZd/1",
        //         sizes: [8, 10, 13.5, 14],
        //         bestFor: "Warm Weather",
        //         material: "Soft & Cozy Wool",
        //         hue: "Black"
        //     },
        //     {
        //         name: "Women's Tree Skippers",
        //         price: 69.99,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1pKmUxVCVVJU1bCppFt5lY/1",
        //         sizes: [9, 11, 12, 13],
        //         bestFor: "Cool Weather",
        //         material: "Light & Breezy Tree",
        //         hue: "Beige"
        //     },
        //     {
        //         name: "Women's Tree Runners",
        //         price: 98,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/18vIivEjpigzuIMEBThtlV/2",
        //         sizes: [8.5, 9.5, 10.5, 11.5],
        //         bestFor: "Wet Weather",
        //         material: "Lightweight & Durable Canvas",
        //         hue: "Blue"
        //     },
        //     {
        //         name: "Women's Tree Dasher 2",
        //         price: 135,
        //         imageUrl: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_800,f_auto,q_auto/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3rhKORN3J95IP1bnAygejK/1",
        //         sizes: [8, 9.5, 11, 12],
        //         bestFor: "Everyday",
        //         material: "Cozy & Durable Cotton Blend",
        //         hue: "Grey"
        //     }
        // ]
    };

    const noShowSocksCollection = collection(db, "collections", "socks", "noShowSocks");
    products.socks.noShowSocks.forEach(async (product) => {
        try {
            await setDoc(doc(noShowSocksCollection), {
                name: product.name,
                color: product.color,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Socks added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });

    const ankleSocksCollection = collection(db, "collections", "socks", "ankleSocks");
    products.socks.ankleSocks.forEach(async (product) => {
        try {
            await setDoc(doc(ankleSocksCollection), {
                name: product.name,
                color: product.color,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Socks added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });

    const crewSocksCollection = collection(db, "collections", "socks", "crewSocks");
    products.socks.crewSocks.forEach(async (product) => {
        try {
            await setDoc(doc(crewSocksCollection), {
                name: product.name,
                color: product.color,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Socks added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });

    const cozyCrewSocksCollection = collection(db, "collections", "socks", "cozyCrewSocks");
    products.socks.cozyCrewSocks.forEach(async (product) => {
        try {
            await setDoc(doc(cozyCrewSocksCollection), {
                name: product.name,
                color: product.color,
                price: product.price,
                imageUrl: product.imageUrl
            });
            console.log("Socks added: ", product.name);
        } catch (e) {
            console.error("Error adding product: ", e);
        }
    });

    // const mensShoesCollection = collection(db, "collections", "mens", "shoes");
    // products.mens.forEach(async (product) => {
    //     try {
    //         await setDoc(doc(mensShoesCollection), {
    //             name: product.name,
    //             price: product.price,
    //             imageUrl: product.imageUrl,
    //             sizes: product.sizes,
    //             bestFor: product.bestFor,
    //             material: product.material,
    //             hue: product.hue
    //         });
    //         console.log("Men's shoe added: ", product.name);
    //     } catch (e) {
    //         console.error("Error adding product: ", e);
    //     }
    // });

    // const womensShoesCollection = collection(db, "collections", "womens", "shoes");
    // products.womens.forEach(async (product) => {
    //     try {
    //         await setDoc(doc(womensShoesCollection), {
    //             name: product.name,
    //             price: product.price,
    //             imageUrl: product.imageUrl,
    //             sizes: product.sizes,
    //             bestFor: product.bestFor,
    //             material: product.material,
    //             hue: product.hue
    //         });
    //         console.log("Women's shoe added: ", product.name);
    //     } catch (e) {
    //         console.error("Error adding product: ", e);
    //     }
    // });
};


export default SaveProductsToFirestore
