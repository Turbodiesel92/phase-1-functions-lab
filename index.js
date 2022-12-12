
function distanceFromHqInBlocks(pickupLocation) {
    const scuberHeadquarters = 42
    if (scuberHeadquarters - pickupLocation > 0) {
        return scuberHeadquarters - pickupLocation
    } else {
        return (scuberHeadquarters - pickupLocation) * -1
    }
}




function distanceFromHqInFeet(pickupLocation) {
    const distance = distanceFromHqInBlocks(pickupLocation)
    return distance * 264
}




function distanceTravelledInFeet(pickupLocation, dropOffLocation) {
    if (dropOffLocation - pickupLocation > 0) {
        return (dropOffLocation - pickupLocation) * 264
    } else {
        return (dropOffLocation - pickupLocation) * -264
    }
}


function calculatesFarePrice(pickupLocation, dropOffLocation) {
    const distance = distanceTravelledInFeet(pickupLocation, dropOffLocation)
    const shortDistance = 400
    const mediumDistance = 2000
    const longDistance = 2500
    const rate = parseFloat(.02).toFixed(2)
    if (distance <= shortDistance) {
        return 0
    } else if (distance > shortDistance && distance <= mediumDistance) {
        return (distance - shortDistance) * rate
    } else if (distance > mediumDistance && distance <= longDistance){
        return 25
    } else if (distance > longDistance){
        return 'cannot travel that far'
    }
}



// function calculatesFarePrice(distance) {
//     } else if (distance > shortDistance) {
//         return (distance * num1)
//     } else if (distance > mediumDistance) {
//         return '25 dollars'
//     } else if (distance > longDistance) {
//         return 'cannot travel that far'
//     }
