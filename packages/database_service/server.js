// [ DATABASE SERVICE > SERVER ] ###############################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const express = require("express");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

const config = require("./config");

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const { port } = config;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require("./db_util")(config);
require("./routes/get")(server);
require("./routes/post")(server);

server.listen(port, () => console.log(`listening to port ${port}`));
process.on("uncaughtException", () => console.log("I am dying"));

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................
// END FILE ####################################################################
