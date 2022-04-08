

function picnicBudget(persons = 0) {
    if (typeof persons !== "number") return "total persons must be a number";
    if (persons < 0) return "persons must be a positive number";
    let cost = 0;

    if (persons <= 100) return persons * 5000;
    if (persons > 100 && persons <= 200) {
        cost = 5000 * 100;
        persons -= 100;
        cost += 4000 * persons;
        return cost;
    }
    cost = 5000 * 100;
    persons -= 100;
    cost += 4000 * 100;
    persons -= 100;
    cost += 3000 * persons;
    return cost;
}

console.log(picnicBudget(-99));
