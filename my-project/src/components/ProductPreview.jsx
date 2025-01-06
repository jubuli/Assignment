import React from "react";

const ProductPreview = ({ image, productDetails }) => {
  return (
    <div className="w-full md:w-1/2 border p-4 rounded-lg">
      <div className="mb-4">
        {image ? (
          <img src={image} alt="Uploaded" className="w-full rounded-lg" />
        ) : (
          <div className="border border-dashed rounded-lg flex items-center justify-center h-40">
            <p className="text-gray-500">No Image Uploaded</p>
          </div>
        )}
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">{productDetails.name || "Product Name"}</h2>
        <p className="text-gray-600 mb-1">{productDetails.brand || "Brand"}</p>
        <p className="text-gray-600 mb-1">{productDetails.category || "Category"}</p>
        <p className="text-gray-600 mb-1">{productDetails.size || "Size"}</p>
        <p className="text-gray-600">{productDetails.color || "Color"}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
