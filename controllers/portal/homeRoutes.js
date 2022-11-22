const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    res.render('portal/homepage', {
      logged_in: req.session.logged_in,
      layout: 'portal'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/portal');
    return;
  }

  res.render('portal/login', {
    layout: 'portal'
  });
});

module.exports = router;
