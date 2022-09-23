
export function CalculateDuration(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"]

    const words = date.split(" ");
    var monthStart = 0;
    for (let i = 0; i < months.length; i++) {
        if (words[0] === months[i]) monthStart = i+1;
    }
    var yearStart = parseInt(words[1]);

    if (words[2] !== "-") return date; 

    var monthLast = new Date().getMonth()+1;
    var yearLast = new Date().getFullYear();
    if (words[3] === "Present") {
    } else {
        for (let i = 0; i < months.length; i++) {
            if (words[3] === months[i]) monthLast = i+1;
        }
        yearLast = parseInt(words[4]);
    }

    var yearDiff = yearLast-yearStart;
    var monthDiff = monthLast-monthStart;
    if (monthDiff == 0) { return date + " ‧ " + yearDiff + (yearDiff > 1 ? " years":" year"); }
    if (monthDiff < 0) { 
        monthDiff = (12-monthStart)+monthLast;
        yearDiff = yearDiff-1;
    }
    if (yearDiff == 0) {
        return date + " ‧ " + monthDiff + (monthDiff > 1 ? " months":" month");
    }

    return date + " ‧ " + yearDiff + (yearDiff > 1 ? " years":" year") + " " + monthDiff + (monthDiff > 1 ? " months":" month");
}