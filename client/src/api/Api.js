import axios from "axios";

export async function productsData() {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");

    return products;
  } catch (err) {
    console.error(err.message, "Failed fetching products");
  }
}
