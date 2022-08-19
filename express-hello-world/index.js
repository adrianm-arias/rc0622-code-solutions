const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello, my server is live!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
