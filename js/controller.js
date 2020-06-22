
 function submitBlogT(){
       $.ajax({
        type: "post",
        url: "http://localhost:8080/blog/",
        cache: false,    

        data:'title=' + $("#title").val() + "&description=" + $("#description").val() ,
        success: function(response){
            alert('Successfully uploaded blog..............');
        },
        error: function(){      
          alert('Error while request..');
        }
       });
      }
function loadDoc() {
        var url = "http://localhost:8080/blog/";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var data =JSON.parse(this.responseText); 
    for (var i = 0; i < data.length; i++) {
        var myObject = data[i];
      const newsapp = document.querySelector('#newsapp');
            html = `
            <h4 class="p-1">Title: ${myObject.title}</h4><br>
                        <p>${myObject.description}
                            </p>
        `;
        newsapp.innerHTML += html;
    }
    }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    }