import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
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
        <Paper sx={{bgcolor: "#F0B27A", mb: 2}}>
            <Typography fontWeight={700} sx={{ fontSize: 35, display: "flex", justifyContent: "center", mb: 2, ml: 2, mr: 2 }} color="text.secondary" gutterBottom>
                ALL FORMS
            </Typography>
            {allForms.map(item => 
                (
                    <CardForm item={item}/>
                ))}
        </Paper>
    )
}