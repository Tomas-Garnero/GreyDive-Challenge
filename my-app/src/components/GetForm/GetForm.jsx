
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../Action";
import CardForm from "../CardForm/CardForm";

export default function GetForm() {

    const dispatch = useDispatch();
    const allForms = useSelector((state) => state.allForms);

    useEffect(() => {
        dispatch(getForm());
    }, [])

    return (
        <div>
            {allForms.map(item => 
                (
                    <CardForm item={item}/>
                ))}
        </div>
    )
}