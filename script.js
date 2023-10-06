const inputDay = document.getElementById("Day")
        const inputMonth = document.getElementById("Month")
        const inputYear = document.getElementById("Year")
        const button = document.getElementById("button")
        const reday = document.querySelector(".result-day")
        const remonth = document.querySelector(".result-month")
        const reyear = document.querySelector(".result-years")
        const input = document.querySelectorAll(".input")
        let form = document.getElementById("form")
        const currentDate = new Date
       /* const currentMonth = currentDate.getMonth()
        const currentDay = currentDate.getDay() */
        const currentYear = currentDate.getFullYear()
        
      
         
           form.addEventListener("submit"  ,(e)=> {
            let userDay = 31 - inputDay.value
            // inputDay.value = " "
             let userMonth = 12 - inputMonth.value
             //inputMonth.value = " "
             let userYear = currentYear - inputYear.value
             e.preventDefault()
             if (inputMonth.value === "" || inputMonth.value === null || inputDay.value === "" || inputDay.value === null || inputYear.value === "" || inputYear.value === null){
                  return
            }
             else{
               reday.innerHTML = userDay + " -"+ "Day"
               remonth.innerHTML = userMonth + " -"+ "Month"
               reyear.innerHTML = userYear + " -"+ "Year"
               inputMonth.value = ""
               inputDay.value = ""
               inputYear.value = ""
             }
          })
          