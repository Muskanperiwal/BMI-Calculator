const form = document.querySelector('form');
// const age = parseInt(document.querySelector('#age').value)   // ese humne yahan pr esliye nhi likha kyunki page reload ya load hote hi empty data fill ho jaayega or submit krte wkt empty value aayega 

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    // const age = parseInt(document.querySelector('#age').value);
    // const height = parseInt(document.querySelector('#height').value);
    // const weight = parseInt(document.querySelector('#weight').value);
    const age = Number(document.querySelector('#age').value);
    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(age==="" || age < 0 || isNaN(age) ){
        results.innerHTML=`Please Give a Valid Age ${age}`;
    } else if(height==="" || height < 0 || isNaN(height) ){
        results.innerHTML= `Please Give a Valid Height ${height}`;
    } else if(weight==="" || weight < 0 || isNaN(weight) ){
        results.innerHTML=`Please Give a Valid Weight ${weight}`;
    } 
    
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML= `<span> Your BMI is-: ${bmi} </span>`


    if(bmi<18.6 ){
        results.innerHTML += `<p>You are Under Weight. Please Eat some healthy food</p>`
    }else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML += `<p>You Weight is perfect.</p>`
    }else if(bmi > 24.9){
        results.innerHTML += `<p>You are Over Weight. Please maintain your Diet</p>`
    }else{ 
        results.innerHTML += `<p>Input invalid </p>`
    }
})
