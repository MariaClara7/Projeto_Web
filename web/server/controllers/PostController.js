const User = require("../model/User");
const Post = require("../model/Post");

module.exports = {
    async listarPostagens(req, res) {
        return res.json(await Post.find());
    },

    async postar(req, res) {
        try {
            const newComment = new Post(req.body);
            newComment.save();

            return res.status(201).send();
        } catch (error) {
            console.log(error);
        }
    },

    async buscar(req, res) {
        const { author } = req.body;
        const dtbauthor = await Post.find({ author });

        try {
            if (await Post.find({ author })) {
                return res.status(201).send({ dtbauthor });
            } else {
                return res.status(409).send();
            }
        } catch (error) {
            console.log(error);
        }
    },
};
