import React from "react";

const ProductForm = ({ productDetails, onProductDetailsChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onProductDetailsChange({ ...productDetails, [name]: value });
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
        <input
          type="text"
          name="brand"
          value={productDetails.brand}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Size</label>
        <input
          type="text"
          name="size"
          value={productDetails.size}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
        <input
          type="text"
          name="color"
          value={productDetails.color}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={productDetails.description}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        ></textarea>
      </div>
    </form>
  );
};

export default ProductForm;
