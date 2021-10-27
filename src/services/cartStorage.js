// General Functions
const getStorage = () => JSON.parse(localStorage.getItem('addProducts'));

function getProduct(storage, id) {
  return storage.find((item) => item.id === id) !== undefined;
}

// Component Functions
export function increaseQuantity(product) {
  const storage = getStorage();
  storage.reduce((acc, curr) => {
    if (curr.id === product.id) curr.quantity += 1;
    return curr;
  }, []);
  localStorage.setItem('addProducts', JSON.stringify(storage));
}

export function reduceQuantity(product) {
  const storage = getStorage();
  storage.reduce((acc, curr) => {
    if (curr.id === product.id) curr.quantity -= 1;
    return curr;
  }, []);

  const productQuantity = storage.find((item) => item.id === product.id).quantity;

  if (productQuantity < 1) {
    const newStorage = storage.filter((item) => item.id !== product.id);
    localStorage.setItem('addProducts', JSON.stringify(newStorage));
  } else {
    localStorage.setItem('addProducts', JSON.stringify(storage));
  }
}

export default function setToLocalStorage(product) {
  const { title, thumbnail, price, id } = product;
  const putInLocalStorage = {
    title,
    thumbnail,
    price,
    id,
    quantity: 1,
  };
  const storage = getStorage();

  if (!storage) {
    localStorage.setItem('addProducts', JSON.stringify([putInLocalStorage]));
    return 'done';
  }

  const productIsInStorage = getProduct(storage, id);

  if (productIsInStorage) {
    increaseQuantity(product);
  } else {
    storage.push(putInLocalStorage);
    localStorage.setItem('addProducts', JSON.stringify(storage));
  }
}
