// An HTML page can add a module by using a < script > tag with the special type = "module" attribute:

// Note: this module import behaves like a 'defer' script load.

<script type="module" src="index.js"></script>

// Index.js
import package from 'module-name'


// Modules are fetched using CORS. This means that if you reference scripts from other domains,// they must have a valid CORS header that allows cross-site loading 
// (like Access-Control-Allow-Origin: *)
