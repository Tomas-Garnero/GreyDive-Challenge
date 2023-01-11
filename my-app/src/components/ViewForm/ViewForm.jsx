import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postForm } from "../../Action/index.js";
import { useNavigate } from "react-router-dom";

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
        if (confirm("Formulario enviado!\n ¿quiere ir a las respuestas?")) {
                navigate("/form");
            }
        setInput({})
        // }
    }

    return (
        <div>
            <h1>
                GREYDIVE CHALLENGE
            </h1>
            <Paper>
                <Box 
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
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
        </div>
    )
}