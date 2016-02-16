# division-zero
Covers the development of the website available @ division-zero.org

No buildscripts available yet.

Required:

browserify + uglifyify

/js browserify -g uglifyify scripts.js -c -o scripts.min.js

less + clean-css

/css less --no-color style.less --clean-css="--s1" 
