// [ MAIN > PM2 ECOSYSTEM CONFIG ] #############################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const path = require("path");
const dotenv = require("dotenv");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES
dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;

const basePath = path.join(__dirname, "/packages");

const ecosystem = {
  apps: [
    // GATEWAY SERVICE
    {
      name: "Gateway Service",
      watch: true,
      script: basePath + "/gateway/server.js",
      env: {
        PORT: 3001,
        QUEUE_URI:
          "amqps://kllvghpb:7bYaUq3joTLp51tBI9hopMtyU358Mliv@dove.rmq.cloudamqp.com/kllvghpb",
        DB_SERVICE_PORT: 4001,
      },
    },

    // DATABASE SERVICE
    {
      name: "Database Service",
      watch: true,
      script: basePath + "/database_service/server.js",
      env: {
        PORT: 4001,
        MONGO_URI:
          "mongodb+srv://sibabale:test123@mailercluster.5nzxx.mongodb.net/mails?retryWrites=true&w=majority",
      },
    },
    // MAILING SERVICE
    {
      name: "Mailing Service",
      watch: true,
      script: basePath + "/mailing_service/index.js",
      env: {
        MJ_API_PUBLIC: "",
        MJ_API_SECRETE: "",
        QUEUE_URI:
          "amqps://kllvghpb:7bYaUq3joTLp51tBI9hopMtyU358Mliv@dove.rmq.cloudamqp.com/kllvghpb",
        DB_SERVICE_PORT: 4001,
      },
    },
  ],
};

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = ecosystem;

// END FILE ####################################################################
