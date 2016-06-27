/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  if (req.user) {
    return res.render('account/loggedin',{
      title: 'Loggedin'
    });
  }
  res.render('home', {
    title: 'Home'
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




