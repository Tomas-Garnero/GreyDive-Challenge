import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardForm({item}) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`Full Name: ${item.full_name}`} 
                </Typography>
                <Typography variant="h5" component="div">
                    {`Email: ${item.email}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {`Birth Date: ${new Date(item.birth_date.seconds*1000)}`}
                </Typography>
                <Typography variant="body2">
                    {`Country: ${item.country_of_origin}`}
                </Typography>
                <Typography variant="body2">
                    {`¿Acepta los términos y condiciones?: ${item.terms_and_conditions? "Si" : "No"}`}
                </Typography>
            </CardContent>
        </Card>
    );
}