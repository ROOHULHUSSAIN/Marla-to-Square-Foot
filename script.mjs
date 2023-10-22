function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.getElementById("conversionType").value;
    let result = 0;

    if (conversionType === "marlaToSquareFoot") {
        result = value * 272.25; // 1 Marla = 272.25 square feet
    } else if (conversionType === "squareFootToMarla") {
        result = value / 272.25; // 1 square foot = 1/272.25 Marla
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}