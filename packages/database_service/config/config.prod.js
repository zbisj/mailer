// [ DATABSE SERVICE > CONFIG > PROD ] #########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................
// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. MAIN ...................................................................

// 1.5.2. FUNCTIONS & LOCAL VARIABLES

const { PORT } = process.env;

// 1.5.2. END

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

module.exports = {
  port: PORT || 4400
}

// END FILE ####################################################################