



    
const CheckDate = (firstDate,SecondDate) =>{
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    
        return diffDays
}


module.exports = CheckDate