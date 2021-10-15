//Getiing the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if(month<10)
        return `0${month}`;
    else
        return month;
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day<10)
        return `0${day}`;
    else
        return day;
};

const getCurrentHour = () => {
    const hour= new Date().getHours();
    if(hour<10)
        return `0${hour}`;
    else
        return hour;
};

const getCurrentMinutes = () => {
    const minutes = new Date().getMinutes();
    if( minutes<10)
        return `0${minutes}`;
    else
        return minutes;
};

//Current day/month/year
const currentyear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Current hour : minutes
export const currentTime = `${getCurrentHour()}:${getCurrentMinutes()}`;

export const currentDate = `${currentyear}-${currentMonth}-${currentDay}`;