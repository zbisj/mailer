// [ MAIN DIR > SUB DIR ] ######################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

const amqp = require("amqplib/callback_api");

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

const {
  queue: { uri },
} = require("../config/");

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const queueName = "test_q";
let channel = null;

amqp.connect(uri, (err, connection) => {
  if (err) {
    console.log("error creating a connection");
    throw new Error(err);
  }

  connection.createChannel((err, createdChannel) => {
    if (err) {
      console.log("error creating a channel");
      throw new Error(err);
    }
    createdChannel.assertQueue(queueName, { durable: true });

    channel = createdChannel;
  });
});

const pushToMessageQ = (message) => {
  if (!channel) setTimeout(pushToMessageQ(message), 1000);
  channel.sendToQueue(queueName, Buffer.from(message));
  return { m: "done" };
};
// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = {
  pushToMessageQ,
};

// END FILE ####################################################################
