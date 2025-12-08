const isActive = false;
const isCompleted = true;

console.log(`And operator: ${isActive && isCompleted}`);
console.log(`Or operator: ${isActive || isCompleted}`);
console.log(`Not operator: ${!isActive}`);
console.log(`Xor operator: ${isActive ^ isCompleted}`);

const age = 18;
const canVote = age >= 18;
console.log(`Can vote: ${canVote}`);

if (isActive && isCompleted) {
    console.log("User is active");
} else if (isCompleted) {
    console.log("User is completed");
} else {
    console.log("User is not active, completed");
}

// what is false
var value = 0 || null || undefined || "" || '' || false;
console.log(value);
console.log(value == false);