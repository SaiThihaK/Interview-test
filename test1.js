	
// Test 1:
// const depths = ["depth1", "depth2", "depth3" ... "depthLast" ];
// const lastVar = "hello"

// // convert depths to:
// const expectResult = {
//     depth1: {
//         depth2: {
//             depth3: {
//                 ... 
//                 depthLast: "hello"
//             }
//         }
//     }
// }

const depths = ["depth1", "depth2", "depth3", "depthLast"];
let lastVar = "hello";

const buildNestedObject =(depths, lastVar)=> {

    let result = {};
    let current = result;

    for (let i = 0; i < depths.length - 1; i++) {

        current[depths[i]] = {};
        current = current[depths[i]];
    }


    current[depths[depths.length - 1]] = lastVar;

    return result;
}

const expectResult = buildNestedObject(depths, lastVar);
console.log(expectResult);


