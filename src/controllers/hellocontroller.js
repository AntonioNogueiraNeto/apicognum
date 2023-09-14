const helloservice = require('../services/helloservice');

const getHelloMessage = (req, res) => {
  const message = helloservice.getMessage();
  res.status(200).json(message);
};

module.exports = {
  getHelloMessage,
};
