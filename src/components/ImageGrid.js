import useFirestore from "../hooks/useFireStore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <img src={doc.url} alt="your pics" />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
