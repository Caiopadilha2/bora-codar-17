// app.innerHTML = 'mudar'

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function render() {
    let output = ''

    let currentMonth = new Date().getMonth();
    // 0 = Jan, 1 = Fev, 2 = Março
    const thisMonth = months[currentMonth];
    //    Mai      = months[4]


    for(let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class=${active}>${month}</div>`
    }

    return output;
};

app.querySelector("main").innerHTML = render();
app.querySelector("header span").innerHTML = new Date().getFullYear();


// const span = app.querySelector("header span");

// span.addEventListener("click", () => {
//     console.log("cliquei")
// }) 

// const voltar = document.getElementById("back")
// const avancar = document.getElementById("next")