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




