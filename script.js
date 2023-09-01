let boxes = document.querySelectorAll(".box");

window.onload = function () {
    setTimeout(() => {
        load_bars();
    }, 1000);
};

function load_bars() {
    boxes.forEach((box) => {
        let line = box.querySelector(".line");
        let increasing_percentage = box.querySelector(".increasing_percentage");
        let total_percentage = box.querySelector(".total_percentage");

        let p = 0;
        let my_interval = setInterval(() => {
            p++;
            line.style.width = p + "%";
            increasing_percentage.innerHTML = p + "%";
            if (increasing_percentage.innerHTML == total_percentage.innerHTML) {
                clearInterval(my_interval);
            }
        }, 25);
    });
}

/* If you have any problem or work like college project, doubt... related html css javascript 
                         (Web Development, Web Design) then remember the name ASHUTOSH PYTHON
                      share your query on instagram, email, and many more on my social handle
                                                                            Thank You! #Jayho */
