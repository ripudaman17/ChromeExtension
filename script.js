fetch(" https://icanhazdadjoke.com/slack")
.then( response =>{
    if(response.status === 200){
        return response.json();
    }
}).then(data =>{
    const jokeText = data.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;
})