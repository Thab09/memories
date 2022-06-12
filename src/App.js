import { useState } from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
