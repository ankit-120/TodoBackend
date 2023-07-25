import { User } from "../models/userModel.js"

export const getAllUser = async (req, res) => {

    const users = await User.find({})

    res
        .status(200)
        .json({
            success: true,
            users
        })
}

export const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    const users = await User.create({
        name,
        email,
        password
    })

    res
        .status(201)
        .json({
            success: true,
            message: "User registered successfully"
        })
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    res
        .status(200)
        .json({
            success: true,
            user
        })
}
