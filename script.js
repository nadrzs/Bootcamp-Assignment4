const fetchData = async() => {
    try {
        const data = document.getElementById("input-data").value 

        const getData = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${data}`, {
            headers: {
                'X-RapidAPI-Key': 'fa6d231446mshaba90736705026cp1f32e5jsn29344c431257',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        })

        const parsing = await getData.json()

        console.log(parsing)
        const activeCases = document.getElementById("active-cases-text")
        const newCases = document.getElementById("new-cases-text")
        const recoveredCases = document.getElementById("recovered-cases-text")
        const totalCases = document.getElementById("total-cases-text")
        const deathsTotal = document.getElementById("total-deaths-text")
        const totalTests = document.getElementById("total-tests-text")

        activeCases.innerHTML = parsing.response[0].cases.active
        if(!parsing.response[0].cases.active) {
            activeCases.innerHTML = "No Data"
        }

        newCases.innerHTML = parsing.response[0].cases.ne
        if(!parsing.response[0].cases.new) {
            newCases.innerHTML = "No Data"
        }

        recoveredCases.innerHTML = parsing.response[0].cases.recovered
        if(!parsing.response[0].cases.recovered) {
            recoveredCases.innerHTML = "No Data"
        }

        totalCases.innerHTML = parsing.response[0].cases.total
        if(!parsing.response[0].cases.total) {
            totalCases.innerHTML = "No Data"
        }

        deathsTotal.innerHTML = parsing.response[0].deaths.total
        if(!parsing.response[0].cases.deaths) {
            deathsTotal.innerHTML = "No Data"
        }

        totalTests.innerHTML = parsing.response[0].tests.total
        if(!parsing.response[0].tests.total) {
            totalTests.innerHTML = "No Data"
        }


    } catch (error) {
        console.log(error)
    }   
}