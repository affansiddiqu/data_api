import React, { useState } from "react";

const ProductForm = () => {
  const brands = [
    { id: 1, name: "nike" },
    { id: 2, name: "puma" },
    { id: 3, name: "reebok" },
    { id: 4, name: "CA" },
    { id: 5, name: "Brooks" },
    { id: 6, name: "siddiqui" },
  ];

  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);

  const getProductData = () => {
    alert("Product data submitted");
    setShowProduct(true);
  };

  return (
    <div className="container">
      <h1 className="text-center display-3">Enter Product Details</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getProductData(); // Call function on submit
        }}
      >
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDesc"
            onChange={(e) => {
              setProduct({ ...product, desc: e.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <select
            name="brand"
            id="brand"
            className="form-select"
            onChange={(e) => {
              setProduct({ ...product, brand: e.target.value });
            }}
            aria-label="DEFAULT SELECT EXAMPLE"
            defaultValue=""
          >
            <option value="" disabled>
              Choose Brand
            </option>
            {brands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {showProduct && (
        <div className="mt-3">
          <h2>Submitted Product:</h2>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.desc}</p>
          <p><strong>Brand Name:</strong> {brands[product.brand].name}</p>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
