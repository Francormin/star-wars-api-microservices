const server = require("./src/server");
const { PORT } = require("./src/config/envs");

server.listen(PORT, () => {
  console.log(`Database service listening on port ${PORT}`);
});
