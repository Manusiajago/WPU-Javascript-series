// ambil input
const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

//kalau kosong alert
// kalau ada isinya -> palindrome

btn.addEventListener('click', () => {
    let text = input.value;

    if (text === "") {
        alert("Please input a value")
        return;
    }

    // menyimpan original text
    let originalText = text;

    let cleanText = text.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // membalikan ke str
    let reversed = cleanText.split("").reverse().join("");

    if (cleanText === reversed) {
        result.textContent = `${originalText} is a palindrome`;
    } else {
        result.textContent = `${originalText} is not a palindrome`;
    }
})