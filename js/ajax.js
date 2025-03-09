

$(function() {


    $.ajax({
        url: 'https://67cd9f8d125cd5af75785297.mockapi.io/posts',
        method: 'GET',
        success: function(data) {
            let blogContainer = $('#blog-container');
            data.forEach(post => {
                let blogCard = `
                    <div class="col-md-4">
                        <div class="card blog-card">
                            <img src="${post.img}" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <p class="text-muted">${post.date}</p>
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.description}</p>
                                <a href="${post.link}" target="_blank" class="text-danger">See More</a>
                            </div>
                        </div>
                    </div>
                `;
                blogContainer.append(blogCard);
            });
        },
        error: function(err) {
            console.log("Error fetching data:", err);
        }
    });


   
});
