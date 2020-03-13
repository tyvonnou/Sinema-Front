import 'date-fns';
import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios, { post } from 'axios';
import { format } from 'fecha';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function Register() {
  // const classes = useStyles();
  const [inputs, setInputs] = useState({title: '', description: ''});
  const [dates, setDates] = useState({releaseDate: new Date().getTime()});
  const [poster, setPoster] = useState(null);
  const [idFilm, setIdFilm] = useState(-1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const handleDateChange = (date) => {
    setDates(dates => ({...dates, releaseDate: date.getTime()}));
  };

  const handlePosterChange = (event) => {
    const { files } = event.target;
    setPoster(files[0]);
  };

  const fileUpload = (file) => {
    const url = '/image';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', idFilm);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData, config)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/movie', {}, { params: { ...inputs, ...dates }}).then(res => {
      console.log(res.data);
      setIdFilm(res.data.id);
      console.log(idFilm);
      /*fileUpload(poster).then((response) => {
        console.log(response.data);
      });*/
    });
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
      <form onSubmit={handleSubmit}>
         Fichiers sélectionnés : 
         <input type="file" accept="image/*" onChange={handlePosterChange} />
         <br/>
         <input type="submit" value="Enregistrer" /> 
     </form>
    </div>
  );
}