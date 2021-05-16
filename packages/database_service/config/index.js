// [ DATABSE SERVICE > DATA > RESOLVERS] #######################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

const configDev = require('./config.dev');
const configProd = require('./config.prod');

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const { NODE_ENV } = process.env;

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = NODE_ENV === 'production' ? configProd : configDev;

// END FILE ####################################################################
