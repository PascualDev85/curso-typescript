import express from 'express';

// const express = require("express"); // en typescript no se utiliza esta importación

const app = express();
const port = 3000;

app.get("/", (req, res) => {

  res.status(401).json({ 
    ok: false,
    message: "Todo salió mal",
  })
 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
