import axios from "axios"
import userModel from "../models/userModel.js" // ✅ Fixed typo userMOdel
import FormData from 'form-data' // ✅ Fixed import name

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body
        const user = await userModel.findById(userId)

        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        if (user.creditBalance === 0 || user.creditBalance < 0) { // ✅ Fixed userMOdel → user
            return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
        }

        const formData = new FormData() // ✅ Fixed variable name
        formData.append('prompt', prompt)

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                ...formData.getHeaders() // ✅ Added headers
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })
        res.json({ success: true, message: "Image Generated", creditBalance: user.creditBalance - 1, resultImage })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
};