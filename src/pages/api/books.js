import fs from 'fs'
import path from 'path'

function getData() {
    const filePath = path.join(process.cwd(), 'data', 'books.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    return data
}

function handler(req, res) {
    if(req.method === 'GET') {
        const data = getData()
        console.log(data)
        return res.status(200).json({ message: data })
    }
    else if(req.method === 'POST') {
        const {name, description, imgUrl} = req.body
        const newBook = {
            id: Date.now(),
            name,
            description,
            imgUrl
        }
        const data = getData()
        data.push(newBook)
        return res.status(201).json({ message: 'New book added.', book: newBook });
    }
}

export default handler