function anaToVori(ana) {
    if (typeof ana !== "number") return "ana must be a number";
    if (ana < 0) return "ana must be a positive number";
    return ana / 16;
}

function pandaCost(singara = 0, somuca = 0, jilapi = 0) {
    if (
        typeof singara !== "number" ||
        typeof somuca !== "number" ||
        typeof jilapi !== "number"
    )
        return "please check the parameter correctly.\nsingara, somucha, jilapi must be a number";
    if (singara < 0 || somuca < 0 || jilapi < 0)
        return "please check the parameter correctly.\nsingara, somucha, jilapi must be a positive number";
    const singaraPricePerPiece = 7;
    const somucaPricePerPiece = 10;
    const jilapiPricePerPiece = 15;
    return (
        singaraPricePerPiece * singara +
        somucaPricePerPiece * somuca +
        jilapiPricePerPiece * jilapi
    );
}

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

function oddFriend(friends = []) {
    let oddFriendName = "";
    if (typeof friends === "object" && friends.length >= 0) {
        for (const friend of friends) {
            if (friend.length % 2 === 1) {
                oddFriendName = friend;
                return oddFriendName;
            }
        }
        if (oddFriend.length === 0) return "Hurrah! there is no odd friends";
    }
    return "only array acceptable";
}
