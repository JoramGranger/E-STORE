const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("Welcome new user");
});  


router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("your username is" + username);
});

/*
//routers/blogPostsRouter.js
router.get('/', (req, res) => {
  res.json(BlogPosts.get());
});
*/
module.exports = router