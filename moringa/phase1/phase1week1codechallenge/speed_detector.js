// Speed Detector
function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPerOverSpeed = 1;
    const maxDemeritPoints = 12;

    if (speed < 70) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Demerit Points: ${demeritPoints}`);
        }
    }
}

speedDetector(5);
