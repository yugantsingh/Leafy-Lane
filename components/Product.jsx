import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({
  product: { image, name, slug, price, onelinedescription },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
          {/* <p className="product-desc">{onelinedescription}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Product;
