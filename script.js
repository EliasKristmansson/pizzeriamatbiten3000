function hoverMenuItemEnter(variable){
    variable.style.backgroundColor = "#501805";
}

function hoverMenuItemLeave(variable){
    variable.style.backgroundColor = "#6a1a00";
}

function inputFocus(variable) {
    variable.style.backgroundColor = "rgb(207, 207, 207)";
}

function inputBlur(variable) {
    variable.style.backgroundColor = "white";
}

var menuItems = document.querySelectorAll('.dropdownMenuDiv');

menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        hoverMenuItemEnter(item);
    });

    item.addEventListener('mouseout', function() {
        hoverMenuItemLeave(item);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function updateCheckout(currListItems) {
        var checkoutInner = document.querySelector(".checkoutInner");
        checkoutInner.innerHTML = "";

        currListItems.forEach(function(item) {
            var div = document.createElement("div");
            div.textContent = item;

            var trashIcon = document.createElement("img");
            trashIcon.setAttribute('src', 'img/trash.png');
            trashIcon.setAttribute('alt', 'Soptunna för att indikera ta bort');
            trashIcon.setAttribute('class', 'remove');

            trashIcon.addEventListener("click", function() {
                var index = currListItems.indexOf(item);
                if (index > -1) {
                    currListItems.splice(index, 1);
                    updateCheckout(currListItems);
                }
            });

            div.appendChild(trashIcon);
            checkoutInner.appendChild(div);
        });
    }

    var allListItems = document.querySelectorAll("li");
    var currListItems = [];

    allListItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var selectedItem = item.textContent.trim();
            currListItems.push(selectedItem);
            updateCheckout(currListItems);
        });
    });

    document.getElementById("checkoutButton").addEventListener("click", function() {
        var checkoutInner = document.querySelector(".checkoutInner");
        checkoutInner.innerHTML = "";

        if (currListItems.length > 0){
            alert("Tack för din beställning!");
        }
        else {
            alert("Du behöver lägga till rätter.");
        }
        currListItems = [];
    });
});