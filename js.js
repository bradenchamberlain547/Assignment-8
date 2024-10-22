function repeats() {
    const line = document.getElementById("sentence").value;
    const amounts = parseInt(document.getElementById("amount").value);
    const output = document.getElementById("answer");

    output.innerHTML = '';

for (i = 0; i < amounts; i++){
    const newline = document.createElement('p');
    newline.textContent = line;
    output.appendChild(newline);
}
}