// [ MAIN DIR > SUB DIR ] ######################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const amqp = require("amqplib/callback_api");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

const {
  queue: { uri },
} = require("../config/");

const sendMail = require("../handler/sendMail");

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const queueName = "test_q";
let channel = null;
const cosumer = () => {
  amqp.connect(uri, (err, connection) => {
    if (err) {
      console.log("error creating a connection");
      throw new Error(err);
    }

    connection.createChannel((err, channel) => {
      if (err) {
        console.log("error creating a channel");
        throw new Error(err);
      }
      channel.assertQueue(queueName, { durable: true });

      channel.consume(
        queueName,
        (message) => {
          let mail;

          try {
            mail = JSON.parse(message.content.toString());
          } catch (error) {
            console.log(error);
            mail = message.content.toString();
          }

          console.log("I HAVE RECEIVED A MAIL!!!", mail);

          sendMail(mail);

          channel.ack(message);
        },
        { noAck: false }
      );
    });
  });
};

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................
module.exports = cosumer;
// END FILE ####################################################################
