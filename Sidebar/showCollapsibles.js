document.onreadystatechange = function(e)
  {
      if (document.readyState === 'interactive')
      {
        var links = document.getElementsByTagName("a");
        for(var i=0, max=links.length; i<max; i++) {
            if(links[i].href == window.location.href)
              links[i].closest('.collapse').classList.add("show");
        }//dom is ready, window.onload fires later
      }
  };