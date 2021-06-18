import React, { useState } from 'react'

export default function Verify ({enterSite}){
    const [success, setSuccess] = useState(false)
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear()
    const currentMonth = currentTime.getMonth()+1
    const currentDay = currentTime.getDate()
    const isLegalToDrink = (yearEntered, monthEntered, dayEntered) => {
        let monthNumber 
        if (monthEntered === 'January'){monthNumber = 1}
        if (monthEntered === 'February'){monthNumber = 2}
        if (monthEntered === 'March'){monthNumber = 3}
        if (monthEntered === 'April'){monthNumber = 4}
        if (monthEntered === 'May'){monthNumber = 5}
        if (monthEntered === 'June'){monthNumber = 6}
        if (monthEntered === 'July'){monthNumber = 7}
        if (monthEntered === 'August'){monthNumber = 8}
        if (monthEntered === 'September'){monthNumber = 9}
        if (monthEntered === 'October'){monthNumber = 10}
        if (monthEntered === 'November'){monthNumber = 11}
        if (monthEntered === 'December'){monthNumber = 12}
        let yearsAgo = parseInt(currentYear-yearEntered)
        let monthsAgo = parseInt(currentMonth-monthNumber)
        let daysAgo = parseInt(currentDay-dayEntered)
        
        if(yearsAgo > 21)
            // return `Is legal to drink... is ${yearsAgo} years old.`
            enterSite('home')
        else if (yearsAgo < 21)
            // return `Is ${yearsAgo} years old, which is younger than 21...IS NOT ALLOWED TO DRINK!`
            enterSite('verify')
        else if (yearsAgo === 21)
            if (monthsAgo === 0)
                if (daysAgo < 0 )
                    // return `Sorry, needs to wait a few more days before drinking.`
                    enterSite('verify')
                else
                    // return 'Is recently 21'
                    enterSite('home')
            else if (monthsAgo<0)
                // return `Is 20 years old. Turns 21 this year in ${monthsAgo}`
                enterSite('verify')
            else if (monthsAgo > 0) 
                // return `Is 21 years old. No need to check for the day. monthsAgo: ${monthsAgo}`
                enterSite('home')
            
    }
    const [monthChosen, setMonthChosen] = useState('January')
    const changeMonth = (x) => setMonthChosen(x)
    const [dayChosen, setDayChosen] = useState('1')
    const [yearChosen, setYearChosen] = useState('2021')
    
    let years = []
    for (let i = currentYear-110; i < currentYear; i++) {
        years.push(i+1)
    }
    years = years.reverse()
    let days = []
    for (let i = 0; i < 31; i++) {
        days.push(i+1)
    }
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    return(
        
       <div className="verify">
           <div className="top-background"></div>
           <div className="verification-app">
               <div className="logo"></div>
                <h1>WELCOME <br/>to<br/> GLADIATOR BREWING</h1>
               
                <form>
                    <select 
                        onChange={(e)=> {
                            const selectedMonth = e.target.value
                            setMonthChosen(selectedMonth)
                        }}
                    >
                        {months.map(month => (
                        <option 
                        key={month} 
                        value={month} 
                        >
                        {month}
                        </option>))}
                    </select>

                    <select 
                        onChange={(e)=> {
                            const selectedDay = e.target.value
                            setDayChosen(selectedDay)
                        }}
                    >
                        {days.map(day => (
                        <option 
                        key={day} 
                        value={day} 
                        >
                        {day}
                        </option>))}
                    </select>

                    <select 
                        onChange={(e)=> {
                            const selectedYear = e.target.value
                            setYearChosen(selectedYear)
                        }}
                    >
                        {years.map(year => (
                        <option 
                        key={year} 
                        value={year} 
                        >
                        {year}
                        </option>))}
                    </select>
                </form>
                <button className="enter-site-btn"
                onClick={
                    ()=>{
                        // alert(currentMonth+' '+currentDay+', '+currentYear)
                        isLegalToDrink(yearChosen, monthChosen, dayChosen)}
                }  
               >
                   ENTER
                </button>
               
           </div>
           <div className="bottom-background"></div>
           
       </div>
    )
}