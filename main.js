function includeHeaderFooter() {
    // Fetch the header file
    var headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'header.html', true);
    headerRequest.onload = function() {
      if (headerRequest.status >= 200 && headerRequest.status < 400) {
        // Insert the header HTML into the header <div> element
        var headerDiv = document.getElementById('header');
        headerDiv.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.send();
    
    // Fetch the footer file
    var footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.onload = function() {
      if (footerRequest.status >= 200 && footerRequest.status < 400) {
        // Insert the footer HTML into the footer <div> element
        var footerDiv = document.getElementById('footer');
        footerDiv.innerHTML = footerRequest.responseText;
      }
    };
    footerRequest.send();
  }
  
  includeHeaderFooter();

  