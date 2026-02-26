let listItems = document.querySelectorAll("ul li");

listItems.forEach(function(item) {
    item.textContent = "Hello world!";
});

let button = document.getElementById("showNameBtn");

button.onmousedown = function() {
    button.textContent = "Шумейко Тетяна";
};
