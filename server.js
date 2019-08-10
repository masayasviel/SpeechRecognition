const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    const url = req.url; //リクエストからURLを取得
    const tmp = url.split("."); //splitで . で区切られた配列にする 
    const ext = tmp[tmp.length - 1]; //tmp配列の最後の要素(外部ファイルの拡張子)を取得
    const path = "." + url; //リクエストされたURLをサーバの相対パスへ変換する
    switch(ext){
        case "js": //拡張子がjsならContent-Typeをtext/javascriptにする
            fs.readFile(path, (err, data)=>{
                res.writeHead(200, {"Content-Type":"text/javascript"});
                res.end(data, "utf-8");
            });
            break;
        case "/": //拡張子が/(index.html)だった場合はindex.htmlを返す
            fs.readFile("./index.html", (err, data)=>{
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data, "utf-8");
            })
        break;
    }
}).listen(3000);

console.log("server start");