module.exports = function (err, req, res, next) {
  // Envia log do erro para o console do servidor (backend_app)
  console.error(err.message || err);

  // Retorna a resposta como JSON
  res.status(err.status || 500).send({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
