// [ DATABASE SERVICE > ROUTES > GET ] #########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const mongoose = require("mongoose");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const Mail = mongoose.model("Mail");

const pingHandler = (_, res) => {
  res.send("Healthy");
};

const mailHandler = async (_, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch (err) {
    error = err;
  }

  res.send({
    message: "Got response from DB",
    service: "Database Service",
    status: 200,
    payload: mails || error,
  });
};

const singleMailHandler = async ({ params: { id } }, res) => {
  let mail;
  let error;

  try {
    mail = await Mail.findOne({ _id: id });
  } catch (err) {
    error = err;
  }

  res.send({
    message: "Got response from DB",
    service: "Database Service",
    status: 200,
    payload: mail || error,
  });
};

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = (server) => {
  server
    .get("/", pingHandler)
    .get("/mails", mailHandler)
    .get("/mails/:id", singleMailHandler);
};

// END FILE ####################################################################
