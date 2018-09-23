const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express()

// mongoDB
var mongoose = require('mongoose');
var Question = require('./models.js').Question



var config = {
  apiKey: "AIzaSyAn_1ljl18uTo-2fuOLeT5aMXNmAwGU47U",
  authDomain: "software-engineering-project-1.firebaseapp.com",
  databaseURL: "https://software-engineering-project-1.firebaseio.com",
  projectId: "software-engineering-project-1",
  storageBucket: "software-engineering-project-1.appspot.com",
  messagingSenderId: "495472687615"
}


mongoose.connect("mongodb://browngineerz:cocomo12@ds261332.mlab.com:61332/questionable", function(err) {
  if(err) console.log('There was an error', err);
  else console.log('Connected :)');
});

// HBS setup
const hbs = require('express-handlebars')({
  defaultLayout: 'main',
  extname: '.hbs'
});

app.engine('hbs', hbs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('homePage')
})

app.get('/student-questions', function(req, res) {
    // query mongodb for questions
    Question.find({}, function(error, questions) {
        questionArray = questions.map(function(questionObject) {
            return questionObject.question
        })
    res.render('studentQuestions', {questions: questionArray})
    })
})

app.post('/auth', function(req, res) {
    const auth = firebase.auth()
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, password)
})

app.get('/teacher-login', function(req, res) {
    res.render('loginPage')
})

app.get('/student-questions', function(req, res) {
    // query mongodb for questions
    Question.find({}, function(error, questions) {
        questionArray = questions.map(function(questionObject) {
            return questionObject.question
        })
    res.render('studentQuestions', {questions: questionArray})
    })

})

app.post('/submit-question', function(req, res) {
    const question = req.body.question
    const newQuestion = new Question({question: question, answer: ''})
    newQuestion.save()
    res.send(200)

})

app.post('/answer-question', function(req, res) {

})


app.listen('3000', function() {
  console.log('Server listening on port 3000!');
})
