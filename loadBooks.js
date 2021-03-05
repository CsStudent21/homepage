/* Define my function */

function loadBooks() {
    let library = document.querySelector("#readinglist");

    for (let i = 0; i < 100; i++) { // I upload my books
        library.innerHTML += `<div class="col-4 col-4 col-4">
                                <div class="card" style="width: 18rem;">
                                    <img src="${books[i].img}" class="card-img-top" alt="Book Cover">
                                    <div class="card-body">
                                        <h5 class="card-title">${books[i].title}</h5>
                                        <p class="card-text">${books[i].author}</p>
                                        <a class="btn btn-info"> ${books[i].category} </a>
                                        <a href="${books[i].url}" class="btn btn-primary">${books[i].cta}</a>
                                    </div>
                                </div>
                            </div>` 
    }
}

/* In order to creat backtick in MacOS "ALT + \" */

let books = [
    {
        "img": "S1.jpg",
        "title": "Trust",
        "author": "Tarun Khanna",
        "url": "https://www.amazon.com/Trust-Foundation-Entrepreneurship-Developing-Countries/dp/1523094834/",
        "category": "Strategy",
        "cta": "Buy it",
    },

    {
        "img": "L1.jpg",
        "title": "How Will You Measure Your Life?",
        "author": "Clayton Christensen",
        "url": "https://www.amazon.com/How-Will-Measure-Your-Life/dp/0062102419/",
        "category": "Leadership",
        "cta": "Buy it",
    },

    {
        "img": "L4.jpg",
        "title": "Radical Candor",
        "author": "Kim Scott",
        "url": "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375/",
        "category": "Leadership",
        "cta": "Buy it",
    },
]

/* Load my Function */

loadBooks()