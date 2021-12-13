const User = require("../model/User");
const Post = require("../model/Post");

module.exports = {
  async listarUsuario(req, res) {
    return res.json(await User.find());
  },

  async cadastrar(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(409).send({ erro: "Email já cadastrado!" });
      } else {
        const user = new User(req.body);
        user.save();
        return res.status(201).send();
      }
    } catch (error) {
      console.log(error);
    }
  },

  async entrar(req, res) {
    const user = req.body;
    const { email } = req.body;
    const dbuser = await User.findOne({ email });

    try {
      if (!dbuser) {
        return res.status(409).send({ error: "Usuário não cadastrado!" });
      }

      if (dbuser.email === user.email && dbuser.password === user.password) {
        return res.status(200).send(dbuser.login);
      } else {
        return res.status(409).send({ error: "Email ou Senha Incorreta" });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
