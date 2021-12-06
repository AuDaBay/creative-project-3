const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  title: String,
  description: String, 
  path: String,
  type: String,
});

const Item = mongoose.model('Item', itemSchema);


// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/hobbies', {
  useNewUrlParser: true
});

app.post('/api/games', async (req, res) => {
  console.log("We are here")
  const item = new Item({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
    type: "games"
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/dates', async (req, res) => {
    const item = new Item({
      title: req.body.title,
      description: req.body.description,
      path: req.body.path,
      type: "dates"
    });
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/projects', async (req, res) => {
    const item = new Item({
      title: req.body.title,
      description: req.body.description,
      path: req.body.path,
      type: "projects"
    });
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


app.get('/api/games', async (req, res) => {
  try {
    let items = await Item.find({type: "games"});
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/dates', async (req, res) => {
    try {
      let items = await Item.find({type: "dates"});
      res.send(items);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/projects', async (req, res) => {
    try {
      let items = await Item.find({type: "projects"});
      res.send(items);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.delete('/api/games/:id', async (req,res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

  app.delete('/api/dates/:id', async (req,res) => {
    try {
      await Item.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
});

    app.delete('/api/projects/:id', async (req,res) => {
        try {
          await Item.deleteOne({
            _id: req.params.id
          });
          res.sendStatus(200);
        } catch(error) {
          console.log(error);
          res.sendStatus(500);
        }
});

//edit api
app.put('/api/games/:id', async (req, res) => {
  console.log(req.body)
  const item = await Item.findOne( {
    _id: req.params.id
  });
  item.title = req.body.title;
  item.description = req.body.description;
  item.path = req.body.path
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/dates/:id', async (req, res) => {
    console.log(req.body)
    const item = await Item.findOne( {
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    item.path = req.body.path
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.put('/api/projects/:id', async (req, res) => {
    console.log(req.body)
    const item = await Item.findOne( {
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    item.path = req.body.path
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


app.listen(3001, () => console.log('Server listening on port 3001!'));
