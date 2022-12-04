let saveEl = document.getElementById("save-el")
let amt = document.getElementById("count")
let count = 0

function increment() {
    count += 1
    amt.textContent = count
    console.log("Count: " + count)
    
}

function save() {
    console.log(count)
    saveEl.textContent += count + " - "
    amt.textContent = 0
    count = 0

}