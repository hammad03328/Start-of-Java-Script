function RFS(callback) {
    setTimeout(function () {
        console.log("Ready For School at 8am");
        setTimeout(function () {
            console.log("Brushed Teeth and had Break-fast")
            callback();
        }, 5000);
    }, 2000);
}
function SOSB(callback) {
    setTimeout(function () {
        console.log("Sitting on School Bus")
        setTimeout(function () {
            console.log("Listened to music on the bus ride");
            callback();
        }, 5000)
    }, 1000)
}
function AC(callback) {
    setTimeout(function () {
        console.log("Attending Class")
        setTimeout(function () {
            console.log("Learned about math and science")
            callback();
        }, 5000)
    }, 200)
}
function RH(callback) {
    setTimeout(function () {
        console.log("Returning home")
        setTimeout(function () {
            console.log("Ate dinner and did homework")
            callback();
        }, 1000)
    }, 2000)
}

RFS(function () {
    SOSB(function () {
        AC(function () {
            RH(function () {
                console.log("Done")
            });
        });
    });
});