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
        let books;
        try {
            books = await db.collection('books').find().sort().toArray()
        } catch (error) {
            return console.log(error);
        }
        if(!books) {
            return res.status(500).json({message: 'Internal Server Error'})
        }
        return res.status(200).json({ message: books })
    }
    else if(req.method === 'POST') {
        const {name, description, imgUrl} = req.body
        if(!name && name.trim()==='' && !description && description.trim()==='' && !imgUrl && imgUrl.trim()==='') {
            return res.status(422).json({message: 'Invalid Data'})
        }
        const newBook = {
            name,
            description,
            imgUrl,
            // id: Date.now()
        }
        let generatedBook
        try {
            generatedBook = await db.collection('books').insertOne(newBook)
        } catch (error) {
            return console.log(error);
        }
        // const data = getData()
        // data.push(newBook)
        // const filePath = path.join(process.cwd(), 'data', 'books.json')
        // fs.writeFileSync(filePath, JSON.stringify(data))
        return res.status(201).json({ message: 'New book added.', book: newBook });
    }
}

export default handler