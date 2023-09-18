document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  var tags = document.getElementById('tags').value;

  var post = {
    title: title,
    body: body,
    // Add Tags
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('Post created:', data);
    
    document.getElementById('postForm').reset();
    var responseDiv = document.getElementById('response');
    responseDiv.innerText="Created Blog Successfully!!";
    responseDiv.style.backgroundColor = '#90EE90';
    responseDiv.style.padding = '10px';
    responseDiv.style.border = '1px solid #ccc';
  })
  .catch(function(error) {
    console.error('Error:', error);

    var responseDiv = document.getElementById('response');
    responseDiv.innerText=error;
    responseDiv.style.backgroundColor = 'red';
    responseDiv.style.padding = '10px';
    responseDiv.style.border = '1px solid #ccc';
  });
});

// function addImageInput() {
//   var imageInputsDiv = document.getElementById("imageInputs");
//   var newImageInput = document.createElement("div");
//   newImageInput.classList.add("form-group");
//   newImageInput.innerHTML = `<label>Image Link:</label>
//             <input type="text" class="form-control" name="imageLink[]" required>`;
//   imageInputsDiv.appendChild(newImageInput);
// }