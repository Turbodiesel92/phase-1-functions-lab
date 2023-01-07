const headquarters = 42

function distanceFromHqInBlocks(pickupLocation) {
    let blocks = (pickupLocation - headquarters)
    if(blocks >= 0) {
        return blocks
    } else {
        return blocks * -1
    }
}

function distanceFromHqInFeet(pickupLocation) {
    const distance = distanceFromHqInBlocks(pickupLocation)
    return distance * 264
}

function distanceTravelledInFeet(start, destination){
    const distance = (destination - start) * 264
    return (distance >= 0) ? distance : distance * -1
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    const shortDistance = 400
    const mediumDistance = 2000
    const longDistance = 2500

    if(distance <= shortDistance) {
        return 0
    } else if(distance > shortDistance && distance <= mediumDistance) {
        return (distance - shortDistance) * .02
    } else if(distance > mediumDistance && distance <= longDistance) {
        return 25
    } else {
        if(distance >= longDistance) {
            return 'cannot travel that far'
        }
    }

}