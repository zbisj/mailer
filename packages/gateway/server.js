// [ GATEWAY > SERVER ] ########################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const express = require("express");
const {
  graphqlExpress,
  graphiExpress,
  graphiqlExpress,
} = require("apollo-server-express");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

const { port } = require("./config");
const schema = require("./data/schema");
const resolvers = require("./data/resolvers");

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/graphql", graphqlExpress({ schema }))
  .use("/gq", graphiqlExpress({ endpointURL: "/graphql" }))
  .listen(port, () => console.log(`listening to port ${port}`));

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................
// END FILE ####################################################################
