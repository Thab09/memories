import useFirestore from "../hooks/useFireStore";

function ImageGrid() {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <div className="image-wrap" key={doc.id}>
            <img src={doc.url} alt="your pics" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
