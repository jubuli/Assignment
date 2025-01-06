import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ProductForm from "./components/ProductForm";
import ProductPreview from "./components/ProductPreview";
import ProductDetailsForm from "./components/ProductDetailsForm";

const App = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    brand: "",
    category: "",
    size: "",
    color: "",
    description: "",
  });

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  const handleProductDetailsChange = (updatedDetails) => {
    setProductDetails(updatedDetails);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Left Section */}
      <ProductPreview image={image} productDetails={productDetails} />

      {/* Right Section */}
      <div className="w-full md:w-1/2 border p-4 rounded-lg">
        <ImageUploader onImageUpload={handleImageUpload} />
        <ProductForm
          productDetails={productDetails}
          onProductDetailsChange={handleProductDetailsChange}
          
        />
      </div>
      <ProductDetailsForm />
    </div>
    
  );
};

export default App;
