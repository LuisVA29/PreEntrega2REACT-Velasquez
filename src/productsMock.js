export let products = [
  {
    id: 1,
    title:
      "Cerave Hidratante Piel Seca A Muy Seca 454g Crema Facial Y Corporal",
    price: 32,
    description: "Semi-hollow guitar by gibson with two boutique humbuckers",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709957832/148854-2_lyjfbq.jpg",
    stock: 4,
    category: "Cerave",
  },
  {
    id: 2,
    title:
      "Cerave Hidratante Piel Normal Y Seca 473ml Locion Facial Y Corporal",
    price: 27,
    description:
      "Loción Hidratante de Cerave, mantiene la piel hidratada por 24h",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709951418/148673-2_cgnhpf.jpg",
    stock: 4,
    category: "Cerave",
  },
  {
    id: 3,
    title:
      "Cerave Limpiador Hidratante Piel Seca 236ml Locion Facial Y Corporal",
    price: 23,
    description: "LOCION DE DUCHA HIDRATANTE PIEL SECA 236ML",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709957535/148676_nwelpp.jpg",
    stock: 6,
    category: "Cerave",
  },
  {
    id: 4,
    title: "Bioderma Pigmentbio Night Renewer 50ml Crema Facial",
    price: 68,
    description:
      "Regenera la piel durante la noche para conseguir una tez unificada y luminosa.",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709969724/P038634_g2awc2.jpg",
    stock: 5,
    category: "Bioderma",
  },
  {
    id: 5,
    title: "Bioderma Pigmentbio Daily Care Spf50+ 40ml Crema Facial",
    price: 60,
    description:
      "Ilumina y protege de manera instantánea, unifica y resalta de manera duradera.",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709969888/P038631_jo6786.jpg",
    stock: 6,
    category: "Bioderma",
  },
  {
    id: 6,
    title: "Bioderma Atoderm Huile De Douche 1000ml Aceite Facial Y Corporal",
    price: 60,
    description: "Aceite de ducha no graso. Nutre con intensidad.",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709969985/P036227_zoh7ct.jpg",
    stock: 3,
    category: "Bioderma",
  },
  {
    id: 7,
    title: "Vichy Liftactiv Dermis Supreme Noche Antiedad 50ml Crema Facial",
    price: 80,
    description: "CREMA FACIAL ANTIEDAD LIFTACTIV SUPREME NOCHE 50ML",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709970222/114297_nhekpl.jpg",
    stock: 2,
    category: "Vichy",
  },
  {
    id: 8,
    title: "Vichy Supreme Dia Antiedad 50ml Crema Facial",
    price: 78,
    description: "CREMA FACIAL ANTIEDAD LIFTACTIV SUMPREME DIA 50ML",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709970222/114297_nhekpl.jpg",
    stock: 6,
    category: "Vichy",
  },
  {
    id: 9,
    title: "Liftactiv Serum Arrugas Profundas 30ml Suero Facial",
    price: 76,
    description: "Serum para la renovación celular, mejora la piel.",
    img: "https://res.cloudinary.com/dfamqux3j/image/upload/v1709970448/P039953_fmi6eo.jpg",
    stock: 6,
    category: "Vichy",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject(console.log("No se encontraron los productos"));
    }
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        const product = products.find(
          (productObject) => productObject.id === productId
        );

        if (product) {
          resolve(product);
        } else {
          reject("Producto no encontrado");
        }
      } else {
        reject("Productos no encontrados");
      }
    }, 1000);
  });
};
