const Content = require('../models/Content');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {

  Content.find({}, function(err, content){

    if (req.user) {
      return res.render('account/loggedin',{
        title: 'Loggedin',
        content: content
      });
    }
    res.render('home', {
      title: 'Home',
      content: content

    });

  });
};

/**
 * GET /
 * About page.
 */
 exports.about = (req, res) => {
  res.render('about', {
    title: 'About us'
  });
};

/**
 * POST /
 *  new blog contents
 */


exports.postContent = (req, res) => {

  var content = new Content({
    // id: '',
    title: req.body.title,
    body: req.body.editor,
    tag: req.body.tag
    // timestamp: req.body.timestamp,
    // user: req.body.user
  });

  content.save(function(err, newContent){

    if(err){
      res.json('error');
    }

    res.redirect("/");


  });


};

// exports.myposts = (req, res) => {
//   res.render('myposts', {
//     title: 'My posts'
//   });

// }








