import { useState, useEffect } from "react";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage, firestore } from "../firebase/config";

function useStorage(image) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = ref(storage, image.name);
    const collectionRef = collection(firestore, "image");
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = serverTimestamp();
        addDoc(collectionRef, {
          url,
          createdAt,
        });
        setUrl(url);
      }
    );
  }, [image]);

  //   storageRef.put(image).on(
  //     "statechange",
  //     (snap) => {
  //       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //       setProgress(percentage);
  //     },
  //     (err) => {
  //       setError(err);
  //     },
  //     async () => {
  //       const url = await storageRef.getDownloadURL();
  //       setUrl(url);
  //     }
  //   );
  // }, [image]);

  return { progress, url, error };
}

export default useStorage;
