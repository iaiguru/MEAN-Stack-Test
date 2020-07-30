module.exports = (req, res, next) => {
  res.success = function (data) {
    this.status(200).json({
      status: "success",
      data,
    });
  };
  res.error = function (data) {
    this.status(200).json({
      status: "error",
      data,
    });
  };
  next();
};
