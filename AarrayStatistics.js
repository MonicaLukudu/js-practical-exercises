const arrayStats = [20,70,80.75,54];
function ArrayStats(){
    let sum = 0;
    let average = 0;
    let min = arrayStats[0];
    let max = arrayStats[0];
    for (let i = 0; i < arrayStats.length; i++) {
        sum += arrayStats[i];

        if (min > arrayStats[i]) {
            min = arrayStats[i];
        }
        if (max < arrayStats[i]) {
            max = arrayStats[i];
        }
        average = sum / arrayStats.length;
    }
    return { sum, average, min, max };
}
const { sum, average, min, max } = ArrayStats();

console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Minimum: " + min);
console.log("Maximum: " + max);
