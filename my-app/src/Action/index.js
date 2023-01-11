import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../db.js";

export function postForm(payload) {

    const messagesCollection = collection(firestore, "form");
    return async function(dispatch) {
        addDoc(messagesCollection, payload).then((res) => console.log(res)).catch((err) => console.log(err));
        return dispatch({
                type: "POST_FORM"
            });
    }
};

export function getForm() {
    const messagesCollection = collection(firestore, "form");
    return async function(dispatch) {
        let forms = await getDocs(messagesCollection);
        let newArray = [];
        forms.forEach(item => newArray.push({...item.data()}))
        console.log(newArray)
        return dispatch({
                type: "GET_FORM",
                payload: newArray
            });
    }
}

