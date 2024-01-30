// Define objects
var obj1 = { name: "person 1", age: 5 };
var obj2 = { age: 5, name: "person 1" };

// Extract and sort keys for obj1 and obj2
var sortedKeys1 = Object.keys(obj1).sort();
var sortedKeys2 = Object.keys(obj2).sort();

// Convert objects to JSON strings using the sorted keys
var jsonStr1 = JSON.stringify(obj1, sortedKeys1);
var jsonStr2 = JSON.stringify(obj2, sortedKeys2);

// Compare JSON strings
if (jsonStr1 === jsonStr2) {
    console.log("The JSON objects are equivalent.");
} else {
    console.log("The JSON objects are not equivalent.");
}
