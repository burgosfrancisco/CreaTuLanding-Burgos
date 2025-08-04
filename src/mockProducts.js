const productos = [
  {
    id: '1',
    nombre: 'Teclado Gamer',
    descripcion: 'RGB mecánico, switches rojos',
    precio: 15000,
    categoria: 'teclados',
    imagen: 'https://via.placeholder.com/200x150',
  },
  {
    id: '2',
    nombre: 'Mouse Gamer',
    descripcion: 'Sensor óptico 12000dpi',
    precio: 8000,
    categoria: 'mouses',
    imagen: 'https://via.placeholder.com/200x150',
  },
 
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((p) => p.id === id));
    }, 1000);
  });

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((p) => p.categoria === categoryId));
    }, 1000);
  });
