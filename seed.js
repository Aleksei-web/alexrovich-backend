const mongoose = require("mongoose");
const { DATABASE } = require("./config");
const sha256 = require("sha256");
const User = require('./models/user')

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
	.then(() => {
		return new User({name: 'admin', password: sha256('password')}).save()
	})
	.then(user => mongoose.disconnect())
	.catch((err) => console.log(`DB CONNECTION ERR ${err}`))


