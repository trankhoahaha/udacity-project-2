const myToken = "Sz4S/lsI753/r2ZTpTpLGzp5k5z8jNDO";

const authenticateRequest = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).send("Unauthorized: Missing token!");
  }

  const [authType, token] = authHeader.split(" ");

  if (authType !== "Bearer" || token !== myToken) {
    return res.status(401).send("Unauthorized: Invalid token!");
  }

  next();
};

export default authenticateRequest;
