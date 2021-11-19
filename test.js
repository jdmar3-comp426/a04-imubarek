const Database = require('better-sqlite3');
var db = require("./database.js") ; 

require("md5") ; 

//db.prepare("DELETE FROM userinfo WHERE user='admin'") ; 
db.prepare("INSERT INTO userinfo (user, pass) VALUES ('admin2','bdc8b9c894da5168059e00ebffb9077'), ('test2','9241818c20435c6672dac2c4b6e6c071')") ; 
all = db.prepare("DELETE from userinfo WHERE id=2") ; 
all = db.prepare("SELECT * from userinfo").all() ;

console.log(all) ;  