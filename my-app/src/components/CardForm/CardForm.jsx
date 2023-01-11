import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardForm({item}) {
    return (
        <Card sx={{ minWidth: 275, m: 3, display: "flex", justifyContent: "center",
            border: "1px solid #bada59",
            borderRadius: 3,
            bgcolor: "#ffff9bb0",
            boxShadow: "0px 0px 10px 5px #1d788e",
            transition: "0.3s",
            animation: "ease-in-out",
            "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 0px 10px 8px #943656", }}} elevation={5}>
            <CardContent>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    {`Full Name: ${item.full_name}`} 
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {`Email: ${item.email}`}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontSize: 18}}>
                    {`Birth Date: ${new Date(item.birth_date?.seconds*1000)}`}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontSize: 18}}>
                    {`Country: ${item.country_of_origin}`}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontSize: 18}}>
                    {`¿Acepta los términos y condiciones?: ${item.terms_and_conditions? "Si" : "No"}`}
                </Typography>
            </CardContent>
        </Card>
    );
}