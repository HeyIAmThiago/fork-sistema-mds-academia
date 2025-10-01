const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  // Utiliza o pacote 'config' para obter a string de conexão,
  // que é o padrão neste projeto.
  const db = config.get("db");

  // mongoose.connect agora retorna uma Promise.
  mongoose
    .connect(db)
    .then(() => console.log(`✅ Conectado com sucesso ao MongoDB...`))
    .catch((err) =>
      console.error("❌ ERRO: Não foi possível conectar ao MongoDB.", err)
    );
};
