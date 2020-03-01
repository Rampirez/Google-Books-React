const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");

// Book routes
router.use("/books", bookRoutes);

router.get("/googlebooks/:book", (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.book)
      .then(results => {
          console.log("yeet");
          console.log(results.data);
          res.json(results.data);
      })
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
