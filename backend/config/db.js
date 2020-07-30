module.exports = {
  db: "mongodb://localhost:27017/meandb",
  option: {
    user: "root",
    pass: "mochadev",
    auth: { authSource: "admin" },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
};
