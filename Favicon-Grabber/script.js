
    const isValidURL=(string) =>{
      var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return (res !== null)
    }

    const startIT= () =>{

      var myurl = document.querySelector("#urltext").value;

      if (myurl == "") {

        alert("Please Enter URL");

      }

      else if (myurl !== "" && isValidURL(myurl) == true) {
        grabFAV();
      }

      else {
        alert("Please Enter Valid URL");
      }

    }

    const grabFAV = () =>{
      var myurl = document.querySelector("#urltext").value;
      var myimg = document.querySelector("#theimg");
      var mysize = document.querySelector("#size").value;
      var duckapi = "https://icons.duckduckgo.com/ip3/";
      var gapi = "https://s2.googleusercontent.com/s2/favicons?domain=";
      if (mysize == "default") {
        var h1 = "https://";
        var h2 = "http://";

        myurl = myurl.replace(h1, "");
        myurl = myurl.replace(h2, "");

        myimg.src = duckapi + myurl + ".ico";
      }

      else if (mysize == "16") {

        myimg.src = gapi + myurl + "&sz=16";
      }

      else if (mysize == "32") {

        myimg.src = gapi + myurl + "&sz=32";
      }

      else if (mysize == "48") {

        myimg.src = gapi + myurl + "&sz=48";
      }

      else if (mysize == "64") {

        myimg.src = gapi + myurl + "&sz=64";
      }

      else if (mysize == "128") {

        myimg.src = gapi + myurl + "&sz=128";
      }
    }
