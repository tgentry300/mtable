const table = document.createElement("table")
for (let i = -1; i <= 10; i++) {
    const row = document.createElement("tr")
    table.appendChild(row)
    for (j = -1; j <= 10; j++) {
        const cell = document.createElement("td")
        if (i < 0 && j < 0) {
            cell.textContent = "X"
        } else if (i < 0) {
            cell.textContent = String(j)

        } else if (j < 0) {
            cell.textContent = String(i)
        } else {
            cell.textContent = String(j * i)
        }
        row.appendChild(cell)
    }

}

document.getElementById("container").appendChild(table)