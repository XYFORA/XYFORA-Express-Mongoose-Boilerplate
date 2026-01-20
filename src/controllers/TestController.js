import Test from "../models/Test.js";

const index = async (req, res) => {

    try {

        const tests = await Test.find().sort({ createdAt: -1 });

        res.json(tests);

    } catch (err) {

        console.error(err);

        res.status(500).json({ message: "Server Error" });

    }

};

const store = async (req, res) => {

    try {

        const { data } = req.body;

        if (!data) {

            return res.status(400).json({ message: "Data Is Required" });

        }

        const newTest = await Test.create({ data: data });

        res.status(201).json({ message: "Test Created", test: newTest });

    } catch (err) {

        console.error(err);

        res.status(500).json({ message: "Server Error" });

    }

};

export default { index, store };