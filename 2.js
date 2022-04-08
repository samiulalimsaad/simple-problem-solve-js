function pandaCost(singara = 0, somuca = 0, jilapi = 0) {
    if (
        typeof singara !== "number" ||
        typeof somuca !== "number" ||
        typeof jilapi !== "number"
    )
        return "please check the parameter correctly.\nsingara, somucha, ljilapi must be a number";
    if (singara < 0 || somuca < 0 || jilapi < 0)
        return "please check the parameter correctly.\nsingara, somucha, ljilapi must be a positive number";
    const singaraPricePerPiece = 7;
    const somucaPricePerPiece = 10;
    const jilapiPricePerPiece = 15;
    return (
        singaraPricePerPiece * singara +
        somucaPricePerPiece * somuca +
        jilapiPricePerPiece * jilapi
    );
}

console.log(pandaCost(1, 2, 3));
