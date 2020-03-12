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
  const [dates, setDates] = useState({releaseDate: new Date()});
  const [poster, setPoster] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const handleDateChange = (date) => {
    setDates(dates => ({...dates, releaseDate: date}));
  };

  const handlePosterChange = (event) => {
    const { files } = event.target;
    setPoster(files[0]);
  };

  const fileUpload = (file) => {
    const url = '/Upload';
    const formData = new FormData();
    formData.append('file', file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData, config)
  }

  const onFormSubmit = (event) => {
    event.preventDefault() // Stop form submit
    fileUpload(poster).then((response) => {
      console.log(response.data);
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const test = format(new Date(dates.releaseDate), 'isoDate')
    console.log("enregistrer " + JSON.stringify(inputs))
    axios.post('/Enregistrer', {}, {
      params: {
        ...inputs,
        ...dates
      }
    }).then(res => {
      const filmID = (res.data.FilmID);
      axios.post('/Upload', {}, {
        params: {
          poster
        }
      })
      // console.log(JSON.stringify(res.data))
    })
    // console.log(poster);
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
      <form onSubmit={onFormSubmit}>
         Fichiers sélectionnés : 
         <input type="file" accept="image/*" onChange={handlePosterChange} />
         <br/>
         <input type="submit" value="Upload" /> 
     </form>
      <br/>  
      <button className="btn btn-default" onClick={handleSubmit}>Enregistrer</button>
    </div>
  );
}