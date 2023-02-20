const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 3000;

//de ung dung su dung router
app.use(router);

//chuyen req, res ve json de thao tac
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
