var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')


const db = require('./Models/db')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

db()

// Set the views directory and the view engine
app.set('views', path.join(__dirname, 'views'));  // Assuming your Pug files are inside 'views' directory
app.set('view engine', 'pug');  // Use Pug for rendering views


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


authenticate = async(req,res,next)=>{
  const authHeader = req.headers['authorization']
  const token =authHeader && authHeader.split(' ')[1]
  if(token ==  null) return res.status(401).json({message:"no token"})


jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{

  if(err)return res.status(401).json({message:"invalid token"})

    // req.user  = user

    // req.user_id = user_id
    // req.user_id = user._id
    req.user = user.user.email; 
    console.log(req.user,"is here");
    
    next()
}) 
}

app.use('/', indexRouter);
app.use('/api/users', usersRouter); // Base route for all user-related routes
app.use('/api/blog',authenticate,blogRouter)
// app.use('/signup', usersRouter);
// app.use('/login',usersRouter)
// app.use('/login', usersRouter);

// function authenticate(req,res,next){


// }




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Port configuration
var port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;
