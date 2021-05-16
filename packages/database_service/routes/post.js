// [ DATABASE SERVICE > ROUTES > POST ] ########################################

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

const mailHandler = async (req, res) => {
  let mail;
  let error;

  const { subject, receiver, content } = req.body;

  console.log(req.body, subject, receiver, content);
  if (!subject || !receiver || !content) {
    res.send({
      message: "You forgot some import key",
      service: "Database Service",
      status: 400,
      payload: mail || error,
    });
  }

  const newMail = new Mail({
    subject,
    content,
    receiver,
  });

  try {
    mail = await newMail.save();
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
  server.post("/mails", mailHandler);
};

// END FILE ####################################################################
