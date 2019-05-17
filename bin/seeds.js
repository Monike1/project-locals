const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb://localhost/locals', { useNewUrlParser: true });
// const Celebrity = require('../models/celebrity');
const User = require('../models/user');

const users = [
  {
    username: 'Alice123',
    email: 'alice123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3083 BL',
    street: 'Zuiplein Hoog',
    posts: [ 
     ObjectId("5cdc0b1f093ebcef16dae7ee"),
     ObjectId("5cdc0b1f093ebcef16dae7ef"),
     ObjectId("5cdc0b1f093ebcef16dae7f0"),
     ObjectId("5cdc0b1f093ebcef16dae7f1"),
     ObjectId("5cdc0b1f093ebcef16dae7f2"),
     ObjectId("5cdc0b1f093ebcef16dae7f3"),
     ObjectId("5cdc0b1f093ebcef16dae7f4"),
     ObjectId("5cdc0b1f093ebcef16dae7f5"),
     ObjectId("5cdc0b1f093ebcef16dae7f6"),
     ObjectId("5cdc0b1f093ebcef16dae7f7")
   ],
    password: 'passwordalice'
  },
  
  {
    username: 'Tom123',
    email: 'tom123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3011 EA',
    street: 'Leuvehaven',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae7f8"), 
    ObjectId("5cdc0b1f093ebcef16dae7f9"), 
    ObjectId("5cdc0b1f093ebcef16dae7fa"), 
    ObjectId("5cdc0b1f093ebcef16dae7fb"), 
    ObjectId("5cdc0b1f093ebcef16dae7fc"), 
    ObjectId("5cdc0b1f093ebcef16dae7fd"), 
    ObjectId("5cdc0b1f093ebcef16dae7fe"), 
    ObjectId("5cdc0b1f093ebcef16dae7ff"), 
    ObjectId("5cdc0b1f093ebcef16dae800"),
    ObjectId("5cdc0b1f093ebcef16dae801")
    ],
    password: 'passwordtom'
  },
  
  {
    username: 'Mary123',
    email: 'mary123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3012 AA',
    street: 'Coolsingel',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae802"),
    ObjectId("5cdc0b1f093ebcef16dae803"),
    ObjectId("5cdc0b1f093ebcef16dae804"),
    ObjectId("5cdc0b1f093ebcef16dae805"),
    ObjectId("5cdc0b1f093ebcef16dae806"),
    ObjectId("5cdc0b1f093ebcef16dae807"),
    ObjectId("5cdc0b1f093ebcef16dae808"),
    ObjectId("5cdc0b1f093ebcef16dae809"),
    ObjectId("5cdc0b1f093ebcef16dae80a"),
    ObjectId("5cdc0b1f093ebcef16dae80b")
    ],
    password: 'passwordmary'
  },
  {
    username: 'Sam123',
    email: 'sam123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3012 AA',
    street: 'Leuvehaven',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae80c"),
    ObjectId("5cdc0b1f093ebcef16dae80d"),
    ObjectId("5cdc0b1f093ebcef16dae80e"),
    ObjectId("5cdc0b1f093ebcef16dae80f"),
    ObjectId("5cdc0b1f093ebcef16dae810"),
    ObjectId("5cdc0b1f093ebcef16dae811"),
    ObjectId("5cdc0b1f093ebcef16dae812"),
    ObjectId("5cdc0b1f093ebcef16dae813"),
    ObjectId("5cdc0b1f093ebcef16dae814"),
    ObjectId("5cdc0b1f093ebcef16dae815")
    ],
    password: 'passwordsam'
  },
  {
    username: 'George123',
    email: 'george123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3013 AJ',
    street: 'Stationsplein',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae816"),
    ObjectId("5cdc0b1f093ebcef16dae817"),
    ObjectId("5cdc0b1f093ebcef16dae818"),
    ObjectId("5cdc0b1f093ebcef16dae819"),
    ObjectId("5cdc0b1f093ebcef16dae81a"),
    ObjectId("5cdc0b1f093ebcef16dae81b"),
    ObjectId("5cdc0b1f093ebcef16dae81c"),
    ObjectId("5cdc0b1f093ebcef16dae81d"),
    ObjectId("5cdc0b1f093ebcef16dae81e"),
    ObjectId("5cdc0b1f093ebcef16dae81f")
    ],
    password: 'passwordgeorge'
  },
  {
    username: 'granny123',
    email: 'granny123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3013 AJ',
    street: 'Stationsplein',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae820"),
    ObjectId("5cdc0b1f093ebcef16dae821"),
    ObjectId("5cdc0b1f093ebcef16dae822"),
    ObjectId("5cdc0b1f093ebcef16dae823"),
    ObjectId("5cdc0b1f093ebcef16dae824"),
    ObjectId("5cdc0b1f093ebcef16dae825"),
    ObjectId("5cdc0b1f093ebcef16dae826"),
    ObjectId("5cdc0b1f093ebcef16dae827"),
    ObjectId("5cdc0b1f093ebcef16dae828"),
    ObjectId("5cdc0b1f093ebcef16dae829")
    ],
    password: 'passwordgranny'
  },
  {
    username: 'mike123',
    email: 'mike123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3013 AL',
    street: 'Weena',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae82a"),
    ObjectId("5cdc0b1f093ebcef16dae82b"),
    ObjectId("5cdc0b1f093ebcef16dae82c"),
    ObjectId("5cdc0b1f093ebcef16dae82d"),
    ObjectId("5cdc0b1f093ebcef16dae82e"),
    ObjectId("5cdc0b1f093ebcef16dae82f"),
    ObjectId("5cdc0b1f093ebcef16dae830"),
    ObjectId("5cdc0b1f093ebcef16dae831"),
    ObjectId("5cdc0b1f093ebcef16dae832"),
    ObjectId("5cdc0b1f093ebcef16dae833")
    ],
    password: 'passwordmike'
  },
  {
    username: 'ferry123',
    email: 'ferry123@gmail.com',
    city: 'Rotterdam',
    zipcode: '3012 GP',
    street: 'Karel Doormanstraat',
    posts: [ 
    ObjectId("5cdc0b1f093ebcef16dae834"),
    ObjectId("5cdc0b1f093ebcef16dae835"),
    ObjectId("5cdc0b1f093ebcef16dae836"),
    ObjectId("5cdc0b1f093ebcef16dae837"),
    ObjectId("5cdc0b1f093ebcef16dae838"),
    ObjectId("5cdc0b1f093ebcef16dae839"),
    ObjectId("5cdc0b1f093ebcef16dae83a"),
    ObjectId("5cdc0b1f093ebcef16dae83b"),
    ObjectId("5cdc0b1f093ebcef16dae83c"),
    ObjectId("5cdc0b1f093ebcef16dae83d")
    ],
    password: 'passwordferry'
  }
  
];

User.deleteMany().then(res => {

  User.insertMany(users, (err, docs) => {
    if (err) {
      throw err;
    }
    console.log(docs)
    // docs.forEach((user) => {
    //   console.log(user.name)
    // });
    mongoose.connection.close();
  });

})


//Run the seed file with node to seed your database.