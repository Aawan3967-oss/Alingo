function load(service) {
  fetch(`/api/${service}/services`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("content").innerHTML =
        "<pre>"+JSON.stringify(data,null,2)+"</pre>";
    });
}
