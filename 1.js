function anaToVori(ana) {
    if (typeof ana !== "number") return "ana must be a number";
    if (ana < 0) return "ana must be a positive number";
    return ana / 16;
}
console.log(anaToVori('10'));
