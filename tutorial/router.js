function route(handle, pathname, reponse, postData) {
  console.log("About to route a request for "+pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname](reponse, postData);
  }
  else{
    console.log("No request handler found for " + pathname);
    reponse.writeHead(404, {"Content-Type": "text/plain"});
    reponse.write("404 Not Found");
    reponse.end();
  }
}

exports.route = route;