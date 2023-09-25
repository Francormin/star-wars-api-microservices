const server = require("./src/server");
const { PORT } = require("./src/config/envs");

server.listen(PORT, () => {
  console.log(`Characters service listening on port ${PORT}`);
});
