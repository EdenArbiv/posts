const express = require("express");
const cors = require("cors");
const { mySql } = require("./db");
const app = express();

app.use(express.json());
app.use(cors({
  origin:"http://localhost:4200",
  credentials: true
}));

app.get("/", async (req, res) => {
  try {
    const posts = await mySql("SELECT * FROM posts");
    res.send(posts);
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const {id}= req.params
    const post = await mySql(`SELECT * FROM posts WHERE id = ${id}`)
    const comments = await mySql(`SELECT * FROM comments WHERE comments.post_id = ${id}`)
    res.send({post, comments})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/:id", async (req, res) => {
  try {
    const {id}= req.params
    const {name, body} = req.body
    await mySql(`insert into comments(post_id, name, body) values(${id}, '${name}', '${body}')`)
    res.send({msg:'comment uploaded.',id})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const {id}= req.params
    await mySql(`UPDATE posts SET likes = likes + 1 WHERE id = ${id}`)
    res.send({msg:'like'})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/:id", async (req, res) => {
  try {
    const {id}= req.params
    const {name, body} = req.body
    await mySql(`insert into comments(post_id, name, body) values(${id}, '${name}', '${body}')`)
    res.send({msg:'comment uploaded.',id})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  try {
    const {name, title, image}= req.body
    await mySql(`insert into posts(name, title, image) values('${name}', '${title}', '${image}')`)
    res.send({msg:'Post uploaded!'})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const {id}= req.params
    await mySql(`DELETE FROM comments WHERE post_id = ${id}`)
    await mySql(`DELETE FROM posts WHERE id = ${id}`)
    res.send({msg:'Post deleted!'})
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(1000, () => console.log("server up & running"));
