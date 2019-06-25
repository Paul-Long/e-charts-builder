const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, './package.json'));
let packageJson = JSON.parse(content);

gulp.task('copy', function() {
  return gulp.src(['LICENSE', 'README.md']).pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
  packageJson.devDependencies = packageJson.dependencies;
  delete packageJson.dependencies;
  delete packageJson.scripts;
  packageJson.engines = {
    node: '>=8'
  };
  fs.writeFileSync(path.resolve(__dirname, './dist/package.json'), JSON.stringify(packageJson, null, 2));
});
