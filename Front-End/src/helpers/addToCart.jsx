import SummaryAPI from "../common";
import {toast} from 'react-toastify';

const addToCard = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  const respponse = await fetch(SummaryAPI.addToCartProduct.url, {
    method: SummaryAPI.addToCartProduct.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId: id }),
  });
  const data = await respponse.json();
  console.log(data);

  toast.success(data.message);

  if (data.success) {
    toast.success(data.message);
  }
  if (data.error) {
    toast.error(data.message);
  }

  return data;
};

export default addToCard;
