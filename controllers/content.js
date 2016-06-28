const Content = require('../models/Content');


exports.postContent = (req, res) => {

  var content = new Content({
    // id: '',
    title: req.body.title,
    body: req.body.editor,
    tag: req.body.tag,
    // timestamp: req.body.timestamp,
    // user: req.body.user
  });

  content.save(function(err, newContent){

    if(err){
      res.json('error');
    }

    res.json(newContent);
  });

};