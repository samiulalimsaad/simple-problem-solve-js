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

console.log(oddFriend(["aa", "bb", "cc", "ddd"]));
console.log(oddFriend(["aas"]));
