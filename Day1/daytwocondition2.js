function runTest() {
    switch (testing) {
        case 'sanity':
            console.log("Sanity done")
            break
        case 'smoke':
            console.log("smoke done")
            break
        case 'regression':
            console.log("regression done")
        default:
    }
}
testing = "regression"
//console.log(testing)
runTest()

