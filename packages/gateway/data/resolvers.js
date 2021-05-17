// [ GATEWAY > DATA > RESOLVERS ] ##############################################

const axios = require("axios");

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const {
  databaseService: { port },
} = require("../config/");

const { pushToMessageQ } = require("../Q/connect");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const databaseServiceURL = `http://localhost:${port}`;

const get = async (path) =>
  (await axios.get(`${databaseServiceURL}/${path}`)).data.payload;

const post = async (path, body) =>
  (await axios.post(`${databaseServiceURL}/${path}`, { ...body })).data.payload;

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = {
  Query: {
    mails: () => get("mails"),
    mail: (_, { id }) => get(`mail/${id}`),
  },
  Mutation: {
    mail: (_, args) => {
      let result, error;

      try {
        result = post("mails", args);
      } catch (err) {
        error = err;
      }

      pushToMessageQ(JSON.stringify(args));

      return result || error;
    },
  },
};

// END FILE ####################################################################
