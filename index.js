    function table() {
        let table = document.querySelector("input").value;
        let table_length = document.getElementById('tablelength').value;
        let div = document.querySelector('.head')

        let index;
        for (index = 1; index <= table_length; index++) {
            div.innerHTML += `${table} x ${index} = ${table * index} <br>`       
            
            

            }
    }


