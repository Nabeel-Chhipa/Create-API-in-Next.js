// import fs from 'fs'
// import path from 'path'
import mongodb, { MongoClient } from 'mongodb'

// function getData() {
//     const filePath = path.join(process.cwd(), 'data', 'books.json')
//     const fileData = fs.readFileSync(filePath)
//     const data = JSON.parse(fileData)
//     return data
// }

async function handler(req, res) {

    const client = await MongoClient.connect('mongodb+srv://admin:admin1234@cluster0.zzb8yrf.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('books')

    if(req.method === 'GET') {
        // const data = getData()
        const books = await db.collection('books').find().sort().toArray()
        if(!books) {
            return res.status(500).json({message: 'Internal Server Error'})
        }
        return res.status(200).json({ message: books })
    }
    else if(req.method === 'POST') {
        const {name, description, imgUrl} = req.body
        const newBook = {
            name,
            description,
            imgUrl,
            // id: Date.now()
        }
        const generatedBook = await db.collection('books').insertOne(newBook)
        // const data = getData()
        // data.push(newBook)
        // const filePath = path.join(process.cwd(), 'data', 'books.json')
        // fs.writeFileSync(filePath, JSON.stringify(data))
        return res.status(201).json({ message: 'New book added.', book: newBook });
    }
}

export default handler