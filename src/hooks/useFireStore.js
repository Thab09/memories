import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

function useFireStore(images) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    // const unsub = async () => {
    //   const querySnapshot = await getDocs(collection(firestore, images));
    //   let document = [];
    //   querySnapshot.docs.forEach((doc) => {
    //     document.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDocs(document);
    // };

    const unsub = onSnapshot(collection(firestore, images), (snapshot) => {
      let document = [];
      snapshot.docs.forEach((doc) => {
        document.push({ ...doc.data(), id: doc.id });
      });
      setDocs(document);
    });

    //   let document = [];
    //   snapshot.docs.forEach((doc) => {
    //     document.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDocs(document);
    // };

    // const unsub = getDocs(collection(firestore, images)).then((snapshot) => {
    //   let document = [];
    //   snapshot.docs.forEach((doc) => {
    //     document.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDocs(document);
    // });

    // const unsub = firestore
    //   .collection(collection)
    //   .orderBy("createdAt", "desc")
    //   .onSnapshot((snap) => {
    //     let document = [];
    //     snap.forEach((doc) => {
    //       document.push({ ...doc.data(), id: doc.id });
    //     });
    //     setDocs(document);
    //   });

    return () => unsub();
  }, [images]);

  return { docs };
}

export default useFireStore;
