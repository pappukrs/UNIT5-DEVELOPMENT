var movieArr=[
    {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },

        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
        {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },
]

localStorage.setItem("movieArr",JSON.stringify(movieArr));
console.log(JSON.parse(localStorage.getItem("movieArr")));
var filmArr=JSON.parse(localStorage.getItem("movieArr"));

function display(){
    filmArr.forEach((film) => {
        var div=document.createElement("div");
    
        var img=document.createElement("img");
        img.src=film.poster;
        var name=document.createElement("h1");
        name.innerText=film.name;
        var release_date=document.createElement("p");
        release_date.innerText="Realsed on:"+film.release_date;
       
        var rating=document.createElement("h1");
        rating.innerText="Rating:"+film.IMDb_rating;
        div.append(img,name,release_date,rating);
        document.querySelector('#filmContainer').append(div);
    });
}

display();