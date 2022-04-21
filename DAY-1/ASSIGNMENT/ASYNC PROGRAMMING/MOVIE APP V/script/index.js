var movieArr=[
    {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.2/10"
        },

        {name:"K.G.F:Chapter 2",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"9.6/10"
        },
        {name:"RRR",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"9.9/10"
        },
        {name:"JERSEY",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"7.9/10"
        },
        {name:"Fantastic Beasts",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"6.6/10"
        },
        {name:"BEAST",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"6.9/10"
        },
        {name:"GANGUBAI KATHIAWADI",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"7.0/10"
        },
        {name:"Sonic the Hedgehog 2",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"7.0/10"
        },
        {name:"Operation Romeo",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.1/10"
        },
        {name:"The Kashmir files",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"8.3/10"
        },
        {name:"Supreme Motherhood",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"9.1/10"
        },
        {name:"Superstar",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"4.8/10"
        },
        {name:"King Richard",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"7.5/10"
        },
        {name:"Doctor strange in the Multiverse",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"4.9/10"
        },
        {name:"PUSHPA",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:"10/10"
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