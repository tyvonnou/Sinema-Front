import 'date-fns';
import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios from 'axios';
import { format } from 'fecha';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function Register() {
  // const classes = useStyles();
  const [inputs, setInputs] = useState({title: '', description: ''});
  const [dates, setDates] = useState({releaseDate: new Date()});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const handleDateChange = (date) => {
    setDates(dates => ({...dates, releaseDate: date}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const test = format(new Date(dates.releaseDate), 'isoDate')
    axios.post('/Enregistrer', {}, {
      params: {
        ...inputs,
        ...dates
      }
    }).then(res => {
      console.log(JSON.stringify(res.data))
    })
  }

  return (
    <div className="home">
      <h1>Enregistrement d'un film</h1>
      Titre : <input type="text" name="title" value={inputs.title} onChange={handleInputChange}/>
      <br />
      Description : <input type="text" name="description" value={inputs.description} onChange={handleInputChange}/>
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker disableToolbar variant="inline" format="dd/MM/yyyy" name="releaseDate" value={dates.releaseDate} onChange={handleDateChange}/>
      </MuiPickersUtilsProvider>
      <br />
      <button className="btn btn-default" onClick={handleSubmit}>Enregistrer</button>
    </div>
  );
}