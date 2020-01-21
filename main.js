
function setActive(type) {
    console.log(type);

    let myActiveItem = document.querySelector('.projects-nav button.active');

    if (myActiveItem) {
        myActiveItem.classList.remove('active');
    }

    let myListItems = document.querySelectorAll('.projects-nav button');


    let myCards = document.querySelectorAll('.card-box');

    for (let i = 0; i < myCards.length; i++) {
        const card = myCards[i];
        card.style.display = 'none';
    }

    switch (type) {
        case 'marketing':
            myListItems[0].classList.add('active');

            let myMarketingCards = document.querySelectorAll('.card-box.marketing')
            for (let i = 0; i < myMarketingCards.length; i++) {
                const card = myMarketingCards[i];
                card.style.display = 'block';
            }
            break;
        case 'development':
            myListItems[1].classList.add('active');

            let myDevelopmentCards = document.querySelectorAll('.card-box.developer')
            for (let i = 0; i < myDevelopmentCards.length; i++) {
                const card = myDevelopmentCards[i];
                card.style.display = 'block';
            }
            break;
        case 'design':
            myListItems[2].classList.add('active');

            let myDesignCards = document.querySelectorAll('.card-box.designer')
            for (let i = 0; i < myDesignCards.length; i++) {
                const card = myDesignCards[i];
                card.style.display = 'block';
            }
            break;
        default:
            break;
    }

}

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);
function showSidebar() {
    let mySidebar = document.querySelector('.sidebar');
    mySidebar.style.width = '100%';
}

function closeSidebar() {
    let mySidebar = document.querySelector('.sidebar');
    mySidebar.style.width = '0';
}
