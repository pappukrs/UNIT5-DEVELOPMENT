var movieArr=[
    {name:"The Batman",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:8.2
        },

        {name:"K.G.F:Chapter 2",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:9.6
        },
        {name:"RRR",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:9.9
        },
        {name:"JERSEY",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:7.9
        },
        {name:"Fantastic Beasts",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:6.6
        },
        {name:"BEAST",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:6.9
        },
        {name:"GANGUBAI KATHIAWADI",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:7.0
        },
        {name:"Sonic the Hedgehog 2",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:7.0
        },
        {name:"Operation Romeo",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:8.1
        },
        {name:"The Kashmir files",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:8.3
        },
        {name:"Supreme Motherhood",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:9.1
        },
        {name:"Superstar",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:4.8
        },
        {name:"King Richard",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:7.5
        },
        {name:"Doctor strange in the Multiverse",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:4.9
        },
        {name:"PUSHPA",
        release_date:"22 MARCH 2022",
        poster:"https://cdn.pixabay.com/photo/2016/12/27/10/07/dc-comics-1933663__340.png",
        IMDb_rating:10
        },

]

localStorage.setItem("movieArr",JSON.stringify(movieArr));
// console.log(JSON.parse(localStorage.getItem("movieArr")));
var filmArr=JSON.parse(localStorage.getItem("movieArr"));


// sorting key
document.querySelector("#sort-lh").addEventListener("click",LTH);
document.querySelector("#sort-hl").addEventListener("click",HTL);
function LTH(){
    // window.reload();
    filmArr.sort((a,b)=>{
        return Number((a.IMDb_rating)) - Number((b.IMDb_rating));
    })
    console.log(filmArr);
    display(filmArr);
}

function HTL(){
    // window.reload();
    filmArr.sort((a,b)=>{
        return Number((b.IMDb_rating)) - Number((a.IMDb_rating));
    })
    console.log(filmArr);
    display(filmArr);
}

function display(filmArr){
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
        // document.querySelector('#filmContainer').innerHTML="";

        document.querySelector('#filmContainer').append(div);
    });
}

display();