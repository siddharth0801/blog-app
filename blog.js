const urlParams = new URLSearchParams(window.location.search);
      const blogId = urlParams.get("id");
      if(blogId){
      fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(response => response.json())
        .then(blog => {
          const blogContent = document.getElementById("blog-content");
          blogContent.innerHTML = `
            <img style="display: block; margin: 0 auto;" src="https://picsum.photos/seed/${blog.id}/400/300" alt="Thumbnail for blog ${blog.id}">
            <h2 style="text-align: center;">${blog.title}</h2>
            <p>${blog.body}</p>
          `;
        })
        .catch(error => console.error(error));
      } 
      else {
        const errorElement = document.getElementById("blog-content");
        errorElement.textContent = 'Blog ID not found!!';
      }