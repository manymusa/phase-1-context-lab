/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employeeArr) {
    return {
        'firstName': employeeArr[0],
        'familyName': employeeArr[1],
        'title': employeeArr[2],
        'payPerHour': employeeArr[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
}

function createEmployeeRecords(employeesArr){
    return employeesArr.map(employeeArr => createEmployeeRecord(employeeArr))
}

function createTimeInEvent(dateStamp){
    const dateAndTime = dateStamp.split(' ');
    this.timeInEvents.push({
        'type': 'TimeIn',
        'hour': parseInt(dateAndTime[1], 10),
        'date': dateAndTime[0]
    })
    return this
}

function createTimeOutEvent(dateStamp){
    const dateAndTime = dateStamp.split(' ');
    this.timeOutEvents.push ({
        'type': 'TimeOut',
        'hour': parseInt(dateAndTime[1], 10),
        'date': dateAndTime[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    for(let i = 0; i < this.timeInEvents.length; i++){
        if(this.timeInEvents[i].date === date && this.timeInEvents[i].date){
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100
        }
    }
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray,firstName){
    let match = undefined;
    srcArray.find(employee => {
        if(employee.firstName === firstName){
            match = employee;
         }
    })
    return match
}

function calculatePayroll(employessArr){
    let wagesArr = employessArr.map(employee => allWagesFor.call(employee))
    return wagesArr.reduce((total,wage) => total += wage,0)
}