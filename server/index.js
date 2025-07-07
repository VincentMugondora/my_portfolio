const app = require('./auth');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
}); 