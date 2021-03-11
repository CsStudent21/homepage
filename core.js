function loadBAbooks(){
    let shelf = document.querySelector("#businessAnalyticsList");
    for(let i = 0; i < BAbooks.length; i++) {
        shelf.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${BAbooks[i].img}" class="card-img-top" alt="The Innovator's Dilemma">
                                <div class="card-body">
                                    <h5 class="card-title">The Innovator's Dilemma </h5>
                                    <p class="card-text">Clayton M. Christensen, 1997</p>
                                    <a href="https://www.amazon.com/Innovators-Dilemma-Technologies-Management-Innovation/dp/142219602X/" class="btn btn-primary">Buy it</a>
                                    <span class="read"></span>
                                </div>
                            </div>`
    }
};



let BAbooks = [
    {
        "img" : "core/BA1core.jpg",
        
    },
]

document.addEventListener("DOMContentLoaded",loadBAbooks);

document.addEventListener("DOMContentLoaded", function(){
    let x = document.querySelectorAll(".read")
    for(let i = 0; i < x.length; i++ ){
      x[i].innerHTML = `<button type="button" class="btn btn-success">Read</button>`
    }
  });