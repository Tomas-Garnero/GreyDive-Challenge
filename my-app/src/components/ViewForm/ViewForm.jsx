import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postForm } from "../../Action/index.js";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

import BasicDatePicker from '../Inputs/DatePicker';
import BasicSelect from "../Inputs/BasicSelect";
import CheckboxLabels from "../Inputs/CheckboxLabels";
import BasicButtons from "../Inputs/BasicButton";
import Mock from "../../Mock.json";


export default function ViewForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({});

    function handleChange(e, name) {
        setInput(prev => { return {...prev, [name]: e.target.value}})
    }

    function handleChangeDate(date, name) {
        setInput(prev => { return {...prev, [name]: date.toDate()}})
    }

    function handleChangeCheckBox(e, name) {
        setInput(prev => { return {...prev, [name]: e.target.checked}})
    }

    function handleSubmit(e) {
        e.preventDefault();
        // const errorSaver = validate(input);
        // setErrors(errorSaver);
        // if (Object.values(errorSaver).length === 0) {
        console.log(input)
        dispatch(postForm({...input}));
        let confirmado = window.confirm("Formulario enviado!\n ¿quiere ir a las respuestas?")
        if (confirmado) {
                navigate("/form");
            }
        setInput({})
        // }
    }

    return (
        <Paper sx={{bgcolor: "#F0B27A", height: "100%", minHeight: "100vh"}}>
            <Typography fontWeight={700} sx={{ fontSize: 35, display: "flex", justifyContent: "center", mb: 2, ml: 2, mr: 2 }} color="text.secondary" gutterBottom>
                GREYDIVE CHALLENGE
            </Typography>
            <Paper elevation={8} sx={{maxWidth: 1000, ml: 25, bgcolor: "#7DCEA0"}}>
                <Box 
                    component="form"
                    noValidate
                    sx={{'& > :not(style)': { m: 2.5, width: '35ch' }, display:"flex", flexDirection: "column", m: 4, alignItems: "center"}}
                    autoComplete="off"
                    display="flex"
                    direction="column"
                >
                    {Mock.items.map(item => {
                        switch(item.type) {

                            case "text":
                                return (
                                    <TextField id="standard-basic" label={item.label} variant="standard" type={item.type} value={input[item.name] ? input[item.name]: ""} onChange={(e) => handleChange(e, item.name)} key={item.name}
                                    />
                                )

                            case "email": 
                                return (
                                    <TextField id="standard-basic" label={item.label} variant="standard" type={item.type} value={input[item.name]? input[item.name] : ""} onChange={(e) => handleChange(e, item.name)} key={item.name}
                                    />
                                )

                            case "date": 
                                return (
                                    <BasicDatePicker label={item.label} value={input[item.name]} onChange={(date) => handleChangeDate(date, item.name)} key={item.name}/>
                                )

                            case "select": 
                                return (
                                    <BasicSelect label={item.label} options={item.options} value={input[item.name]} onChange={(e) => handleChange(e, item.name)} key={item.name}/>
                                )

                            case "checkbox":
                                return (
                                    <CheckboxLabels label={item.label} value={input[item.name]} onChange={(e) => handleChangeCheckBox(e, item.name)} key={item.name}/>
                                )

                            case "submit":
                                return (
                                    <BasicButtons label={item.label} onClick={(e) => handleSubmit(e)} key={item.name}/>
                                )
                            default:
                                return (
                                    <p hidden>Tipo no soportado</p>
                                )
                        }
                    })}
                </Box>
            </Paper>
        </Paper>
    )
}