// const path = require("path")
import path from "path";

const getExt = path.extname(
 "C:\Users\Cloud\Desktop\HTML\html\index.\html");
console.log(getExt);

console.log(
    path.basename(
        "C:\\Users\\Cloud\\Desktop\\HTML\\html\\index.html"
    )
);

console.log(
    path.dirname(
        "C:\\Users\\Cloud\\Desktop\\HTML\\html\\index.html"
    )
);






// path.posix
// path.format
// path.join
// path.isAbsolute
// path.normalize
// path.delimiter
// path.parse
// path.toNamespacedPath  