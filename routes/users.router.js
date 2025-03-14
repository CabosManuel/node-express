import express from "express";

const router = express.Router();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json(
      {
        limit,
        offset,
      }
    );
  } else {
    res.send('No parameters');
  }
});

export default router;
