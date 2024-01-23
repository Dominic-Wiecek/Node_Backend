const express = require("express");
const router = express.Router();
const { connect } = require("../db/db.js");
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json({
    message: "GET ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});
module.exports = router;
