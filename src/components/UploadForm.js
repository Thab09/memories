import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const fileType = ["image/jpeg", "image/png"];

  const imageUploader = (e) => {
    let selectedImage = e.target.files[0];

    if (selectedImage && fileType.includes(selectedImage.type)) {
      setImage(selectedImage);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file (png / jpeg)");
    }
  };

  return (
    <form>
      <input type="file" onChange={imageUploader} />
      <div className="error-output">
        {error && <div className="error">{error}</div>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar image={image} setImage={setImage} />}
      </div>
    </form>
  );
}

export default UploadForm;
