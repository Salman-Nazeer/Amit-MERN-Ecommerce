// import addToCartModel from "../../models/cartProductModel.js";

// async function addToCart(req, res) {
//   try {
//     const { productId } = req?.body;
//     const currentUser = req?.userId;

//     const isProductAvailable = await addToCartModel.find({ productId });
//     if (isProductAvailable) {
//       return res.json({
//         message: "Already added to cart",
//         success: true,
//         error: false,
//       });
//     }

//     const payload = {
//       productName: productId,
//       quantity: 1,
//       userId: currentUser,
//     };

//     const newAddToCart = new addToCartModel(payload);
//     const saveProduct = await newAddToCart.save();

//     res.status(200).json({
//       message: "Product added to cart",
//       success: true,
//       error: false,
//       data: saveProduct,
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

// export default addToCart;

import addToCartModel from "../../models/cartProductModel.js";

async function addToCart(req, res) {
  try {
    const { productId } = req?.body;
    const currentUser = req?.userId;

    const isProductAvailable = await addToCartModel.findOne({ productId });

    console.log("isProductAvailable", isProductAvailable);

    if (isProductAvailable) {
      return res.json({
        message: "Already added to cart",
        success: false,
        error: true,
      });
    }

    const payload = {
      productName: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.status(200).json({
      message: "Product added to cart",
      success: true,
      error: false,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default addToCart;
