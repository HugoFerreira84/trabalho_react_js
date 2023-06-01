import React from "react";
import Navbar from "../Navbar";
import { Image } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";


//import do css
import './contato.css'

//import do Form
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//import da imagens
import image from './img-contato/img1.jpg'

function Works() {
  return (
    <body>
      <Navbar />
      <div className="banner">
        <Image
          width={1920}
          height={700}
          src={image}
          alt="Default Image"
          objectFit="cover"
        />
      </div>

      <div className="form-1">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch', marginTop: '70px' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Nome:" variant="standard" color="success" focused />
          <TextField label="E-mail" variant="standard" color="success" focused />
          <TextField
            label="Telefone:"
            variant="standard"
            color="success"
            focused
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              Send
            </Button>
          </Stack>
        </Box>
      </div>



      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            className="small-link"
          >
            Erdem Karakaş
          </a>
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
}

export default Works;
