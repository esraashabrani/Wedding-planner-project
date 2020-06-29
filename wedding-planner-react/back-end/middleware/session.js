const app = require('../server');
const session = require('client-sessions');
var postData = require('../../database/schemas');

//client sessions
app.use(
  sessions({
    cookieName: 'session',
    secret: 'weddingplanningapp',
    duration: 30 * 60 * 1000 //30 minutes
  })
);

//smart user middleware
app.use((req, res, next) => {
  if (!(req.session && req.session.useID)) {
    return next();
  }
  postData.User.findById(req.session.userId, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next();
    }

    user.password = undefined;

    req.user = user;
    res.locals.user = user;

    next();
  });
});
