/**
 * Would love to use cssgrace:
 * https://github.com/cssdream/cssgrace
 * but it seems to have issues working
 * with my preferred SVG support method
 */
var gulp = require('gulp'),
    sendmail = require('gulp-mailgun');

gulp.task('sendmail', function () {
  gulp.src('email.html') // Modify this to select the HTML file(s)
  .pipe(sendmail({
    key: 'key', // Enter your Mailgun API key here
    sender: 'from',
    recipient: 'to',
    subject: 'This is a test email'
  }));
});

// Default Task
gulp.task('default', ['sendmail']);
