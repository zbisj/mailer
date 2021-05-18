// [ MAILING > HANDLER > SEND MAIL ] ###########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const { apiPublic, apiSecrete } = require("../config");
const MailJet = require("node-mailjet").connect(apiPublic, apiSecrete);

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
          Email: "ENTER YOUR EMAIL",
          Name: "ENTER YOUR NAME",
        },
        To: [
          {
            Email: "ENTER THE RECEIVER'S EMAIL",
            Name: "ENTER THE RECEIVER'S NAME",
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
