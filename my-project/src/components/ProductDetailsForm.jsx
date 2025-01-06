import React, { useState } from "react";

const ProductDetailsForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    tagNumber: "",
    stock: "",
    tag: "",
    price: "",
    discount: "",
    tax: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your logic to handle form submission, e.g., API call
  };

  const handleCancel = () => {
    setFormData({
      description: "",
      tagNumber: "",
      stock: "",
      tag: "",
      price: "",
      discount: "",
      tax: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
    >
      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Short description about the product"
          className="w-full border rounded-lg p-2 text-sm"
          rows="3"
        ></textarea>
      </div>

      {/* Tag Number, Stock, and Tag */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tag Number
          </label>
          <input
            type="text"
            name="tagNumber"
            value={formData.tagNumber}
            onChange={(e) => handleInputChange("tagNumber", e.target.value)}
            placeholder="######"
            className="w-full border rounded-lg p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stock
          </label>
          <input
            type="text"
            name="stock"
            value={formData.stock}
            onChange={(e) => handleInputChange("stock", e.target.value)}
            placeholder="Quantity"
            className="w-full border rounded-lg p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tag
          </label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={(e) => handleInputChange("tag", e.target.value)}
            placeholder="Add a tag"
            className="w-full border rounded-lg p-2 text-sm"
          />
        </div>
      </div>

      {/* Pricing Details */}
      <div className="border-t pt-4 mb-4">
        <h3 className="text-lg font-medium mb-4">Pricing Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder="$"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Discount
            </label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={(e) => handleInputChange("discount", e.target.value)}
              placeholder="%"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax
            </label>
            <input
              type="text"
              name="tax"
              value={formData.tax}
              onChange={(e) => handleInputChange("tax", e.target.value)}
              placeholder="TXT"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4 gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default ProductDetailsForm;
