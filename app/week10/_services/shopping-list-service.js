import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userID){
  const listItems = [];
  const itemsQuery = query(collection(db, "users", userID, "items"));
  const querySnapshot = await getDocs(itemsQuery);

  querySnapshot.forEach((doc) => {
    listItems.push({ id: doc.id, ...doc.data() });
  });

  return listItems;
}

async function addItem(userID, item) {
  const docRef = await addDoc(collection(db, "users", userID, "items"), item);
  return docRef.id;
}

export { getItems, addItem };