/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import config from "../config/config";
import Header from "../components/Header";

const ProductDetail = () => {
  // get id from url
  const { id } = useParams();

<<<<<<< HEAD
  const fetchProductDetail = async (id) => {
    const response = await axiosInstance.get(
      `${config.baseUrl}/products/${id}`
    );
=======
  const { isLoading, isError, isPending, error, data } = useQuery({
    queryKey: [`products/${id}`],
    queryFn: () => fetchProductDetail(id),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  const fetchProductDetail = async (id) => {
    const response = await axiosInstance.get(`${config.baseUrl}/products/${id}`);
>>>>>>> 225b4c87b2f412b08ba823f8c161923ec71cbc0d
    console.log("product detail");
    console.log(response);
    setProduct(response);
    return response;
  };

<<<<<<< HEAD
  const [product, setProduct] = useState({
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/2/1.jpg",
      "https://cdn.dummyjson.com/product-images/2/2.jpg",
      "https://cdn.dummyjson.com/product-images/2/3.jpg",
      "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${config.baseUrl}products/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error));
  }, []);
=======
  const [product, setProduct] = useState(
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
  }
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
>>>>>>> 225b4c87b2f412b08ba823f8c161923ec71cbc0d

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <div id="detail" className="top" style={{ marginTop: "200px" }}>
        <section className="sec-detail">
          <div className="inner">
            <h2 className="detail-ttl">
              <span>Detail Item</span>
            </h2>
            <div className="detail-blk">
              <div className="detail-img">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="content">
                <h3 className="item-ttl">{product.title}</h3>
                <ul className="detail-list">
                  <li>
                    {product.rating}
                    <span>rating</span>
                  </li>
                  <li>
                    {product.stock}
                    <span>stock</span>
                  </li>
                </ul>
                <div className="detail-dis">
                  <small>Discount</small>
                  {product.discountPercentage}%
                </div>
                <div className="cmn-detail">
                  <small>Price</small>${product.price}
                </div>
                <div className="cmn-detail">
                  <small>Brand</small>
                  {product.brand}
                </div>
                <p className="item-des">{product.description}</p>
                <div className="btn-blk">
                  <button className="cart-btn">Add to cart</button>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
=======
      <div id="detail" className="top" style={{marginTop: "200px"}}>
    <section className="sec-detail">
      <div className="inner">
        <h2 className="detail-ttl"><span>Detail Item</span></h2>
        <div className="detail-blk">
          <div className="detail-img"><img src={product.images[0]} alt="" /></div>
          <div className="content">
            <h3 className="item-ttl">{product.title}</h3>
            <ul className="detail-list">
              <li>{product.rating}<span>rating</span></li>
              <li>{product.stock}<span>stock</span></li>
            </ul>
            <div className="detail-dis"><small>Discount</small>{product.discountPercentage}%</div>
            <div className="cmn-detail"><small>Price</small>${product.price}</div>
            <div className="cmn-detail"><small>Brand</small>{product.brand}</div>
            <p className="item-des">{product.description}</p>
            <div className="btn-blk">
              <button className="cart-btn">Add to cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

    </div>

>>>>>>> 225b4c87b2f412b08ba823f8c161923ec71cbc0d
  );
};

export default ProductDetail;
