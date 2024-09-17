function distanceFromHqInBlocks(blockNumber){
    if(blockNumber > 42){
        return  blockNumber - 42
    }
    else{
        return 42 - blockNumber 
    }
}

function distanceFromHqInFeet(feetNumber){
    const feet = distanceFromHqInBlocks(feetNumber)
    const feetPerBlock = 264
    return feet * feetPerBlock
}


function distanceTravelledInFeet(start, destination) {
    const  blocks = 264;
    const blocksTravelled = Math.abs(destination - start)
    const feetTravelled = blocksTravelled * blocks
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25; 
    } else if (distance > 400) {
        return (distance - 400) * 0.02; 
    } else {
        return 0; 
    }
}
    