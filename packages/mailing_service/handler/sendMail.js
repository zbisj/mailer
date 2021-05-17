// [ MAILING > HANDLER > SEND MAIL ] ###########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const { apiPublic, apiPrivate } = require("../config");
const MailJet = require("node-mailjet").connect(
  "dcb93cfc755a5eb62409d18e7ec17862",
  "69d64f5906eab18ea213f29bb236666d"
);

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = async (mail) => {
  console.log(MailJet);

  const request = MailJet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "jojasibabale@gmail.com",
          Name: "Sibabale",
        },
        To: [
          {
            Email: "jojasibabale@gmail.com",
            Name: "Sibabale",
          },
        ],
        Subject: "Greetings from Mailjet.",
        TextPart: "My first Mailjet email",
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};

// END FILE ####################################################################
