function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

console.log(calculateDaysBetweenDates("01/01/2020", "01/01/2021"));
