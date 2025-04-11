import React, { useState } from "react";

const ProductForm = () => {
  // Available brands
  const brands = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Puma" },
    { id: 3, name: "Reebok" },
    { id: 4, name: "CA" },
    { id: 5, name: "Brooks" },
    { id: 6, name: "Siddiqui" },
  ];

  // State to store product data and validation errors
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    brand: "",
    price: "",
    quantity: "",
    sku: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});
  const [showProduct, setShowProduct] = useState(false);

  // Regex patterns for validation
  const regex = {
    name: /^[a-zA-Z0-9\s]+$/, // Alphanumeric and spaces
    desc: /^[a-zA-Z0-9\s.,?!-]+$/, // Alphanumeric with some punctuation
    price: /^\d+(\.\d{1,2})?$/, // Decimal numbers with up to 2 decimal places
    quantity: /^[1-9]\d*$/, // Positive integers
    sku: /^[A-Za-z0-9-]+$/, // Alphanumeric with hyphens
    imageUrl: /^(ftp|http|https):\/\/[^ "]+$/, // Valid URL
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    // Validate each field based on regex and check for empty fields
    Object.keys(product).forEach((field) => {
      if (!product[field]) {
        newErrors[field] = `${field} is required`;
      } else if (regex[field] && !regex[field].test(product[field])) {
        newErrors[field] = `Invalid ${field}`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Form submission handler
  const getProductData = () => {
    if (validateForm()) {
      alert("Product data submitted");
      setShowProduct(true);
    }
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
        {/* Product Name */}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        {/* Product Description */}
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDesc"
            name="desc"
            value={product.desc}
            onChange={handleChange}
          />
          {errors.desc && <small className="text-danger">{errors.desc}</small>}
        </div>

        {/* Brand Selection */}
        <div className="mb-3">
          <select
            name="brand"
            id="brand"
            className="form-select"
            value={product.brand}
            onChange={handleChange}
            aria-label="Brand"
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
          {errors.brand && <small className="text-danger">{errors.brand}</small>}
        </div>

        {/* Product Price */}
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          {errors.price && <small className="text-danger">{errors.price}</small>}
        </div>

        {/* Product Quantity */}
        <div className="mb-3">
          <label htmlFor="productQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="productQuantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
          {errors.quantity && (
            <small className="text-danger">{errors.quantity}</small>
          )}
        </div>

        {/* SKU */}
        <div className="mb-3">
          <label htmlFor="productSku" className="form-label">
            SKU
          </label>
          <input
            type="text"
            className="form-control"
            id="productSku"
            name="sku"
            value={product.sku}
            onChange={handleChange}
          />
          {errors.sku && <small className="text-danger">{errors.sku}</small>}
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label htmlFor="productImageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="productImageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
          {errors.imageUrl && (
            <small className="text-danger">{errors.imageUrl}</small>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display Submitted Product */}
      {showProduct && (
        <div className="mt-3">
          <h2>Submitted Product:</h2>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Description:</strong> {product.desc}
          </p>
          <p>
            <strong>Brand:</strong>{" "}
            {brands.find((brand) => brand.id === parseInt(product.brand))
              ?.name || "Unknown"}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Image URL:</strong> <a href={product.imageUrl}>{product.imageUrl}</a>
          </p>

          {/* Display Image if valid URL */}
          {product.imageUrl && regex.imageUrl.test(product.imageUrl) && (
            <div>
              <h3>Product Image:</h3>
              <img
                src={product.imageUrl}
                alt="Product"
                style={{ width: "300px", height: "auto", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductForm;