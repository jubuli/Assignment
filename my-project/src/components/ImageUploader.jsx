import React from "react";

const ImageUploader = ({ onImageUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onImageUpload(imageURL);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Add Product Photos</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default ImageUploader;
