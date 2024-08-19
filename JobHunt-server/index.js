const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express =  require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://jobhunt-c75ba.web.app',
  ],
  credentials: true,
  optionSuccessStatus: 200,
}

//middleware
app.use(cors(corsOptions))
// app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster0.onhj8vc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const cookieoptions = {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production'?true: false,
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        }

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const jobCollection = client.db("jobHunt").collection("jobPost")
    const appliedJobCollection = client.db("jobHunt").collection("appliedJob")

     // jwt generate
    app.post('/jwt', async (req, res) => {
      const email = req.body
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '365d',
      })
      res
        .cookie('token', token,cookieoptions )
        .send({ success: true })
    })

     // Clear token on logout
    app.get('/logout', (req, res) => {
      res
        .clearCookie('token', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          maxAge: 0,
        })
        .send({ success: true })
    })

    app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            

            const result = await jobCollection.findOne(query);
            res.send(result);
        })

    //job Posts
    app.get('/jobPosts',async(req,res) => {
      // const result = await jobCollection.find().toArray();
      let query = {};
      if (req.query?.email){
        query = { email: req.query.email };
      }
      const result = await jobCollection.find(query).toArray();
      res.send(result);
    })

    app.put('/jobPosts/:id', async (req, res) => {
      const id = req.params.id
      const jobPost=  req.body;
      const query = { _id: new ObjectId(id) }
       const options = { upsert: true }
       const updateDoc = {
        $set: {
          ...jobPost,
        },
      }
      const result = await jobCollection.updateOne(query, updateDoc, options)
      res.send(result)
    })

    app.post('/jobPosts', async (req, res) => {
      const jobPost=  req.body;
      let query ={};
      if(req.query?.email){
        query = {email: req.query.email}   
      }
      const result = await jobCollection.insertOne(jobPost)
      res.send(result);
    })

    app.delete('/jobPosts/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await jobCollection.deleteOne(query)
      res.send(result);

    })

    // Applied Jobs

    app.post('/appliedJobs', async (req, res) => {
  const appliedJob = req.body;

  // Insert applied job into appliedJobCollection
  const result = await appliedJobCollection.insertOne(appliedJob);

  // Increment applicantNumber in jobPost collection
  const query = { _id: new ObjectId(appliedJob._id) }; // Ensure appliedJob._id is a valid ObjectId string
  const updateDoc = { $inc: { applicantNumber: 1 } }; // Increment applicantNumber by 1
  await jobCollection.updateOne(query, updateDoc);

  res.send(result);
});

    app.get('/appliedJobs',async (req, res) => {
      const result = await appliedJobCollection.find().toArray()
      res.send(result);
    })

    app.get('/appliedJobs', async (req, res) => {
      
      let query = {};

      if (req.query?.email){
        query = { email: req.query.applicantEmail };
      }
      const result = await appliedJobCollection.find(query).toArray();
  res.send(result);
});

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req,res)=>{
    res.send('Car is running')
})

app.listen(port,() =>{
    console.log("car server is running")
})