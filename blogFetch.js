fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          const blogList = document.getElementById("blog-list");
          data.forEach(blog => {
            const listItem = document.createElement("li");
            listItem.className = "blog";
            const thumbnail = document.createElement("img");
            thumbnail.src = `https://picsum.photos/seed/${blog.id}/400/300`;
            thumbnail.alt = `Thumbnail for blog ${blog.id}`;
            listItem.appendChild(thumbnail);
            const titleLink = document.createElement("a");
            titleLink.href = `blog.html?id=${blog.id}`;
            titleLink.innerHTML = `<h2>${blog.title}</h2>`;
            listItem.appendChild(titleLink);
            blogList.appendChild(listItem);
          });
        })
        .catch(error => console.error(error));