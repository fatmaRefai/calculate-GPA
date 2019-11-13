function calculateGPA(arr) {
    var sum = 0,averageGPA;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'A+') {
            sum += 4.0;
        }
        else if (arr[i] === 'A' || arr[i] === 'A-') {
            sum += 3.8;
        }
        else if (arr[i] === 'B+') {
            sum += 3.5;
        }
        else if (arr[i] === 'B' || arr[i] === 'B-') {
            sum += 3.2;
        }
        else if (arr[i] === 'C+') {
            sum += 2.8;
        }
        else if (arr[i] === 'C' || arr[i] === 'C-') {
            sum += 2.5;
        }
        else if (arr[i] === 'D+') {
            sum += 2.2;
        }
        else if (arr[i] === 'D' || arr[i] === 'D-') {
            sum += 2.0;
        }
        else if (arr[i] === 'F') {
            sum += 0;
        }
    }

    averageGPA = sum / arr.length;
    document.write("Your GPA is ",averageGPA);

    return sum;
} 

calculateGPA(['A','A+','B','C+','A-','D+']);