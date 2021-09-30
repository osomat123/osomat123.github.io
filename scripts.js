const doggo = document.querySelector('.pics');

function addImage(src)
{
    const img = document.createElement("img");

    if(src === '')
    {
        img.src = './loading.gif';
        img.alt = "Loading...";
    }
    else
    {
        img.src = src;
        img.alt = "Loading...";        
    }

    img.className = "doggo-image"
    doggo.appendChild(img);
}

function addNewDoggo() {
    let breed = document.querySelector(".select").value;
    let url;

    if(doggo.firstChild !== null)
                doggo.removeChild(doggo.firstChild);
            
    addImage('');

    if(breed === "")
        url = "https://dog.ceo/api/breeds/image/random";
    else
        url = `https://dog.ceo/api/breed/${breed}/images/random`;

        const promise = fetch(url);
        promise
        .then(function(response){            
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse){
            doggo.removeChild(doggo.firstChild);
            addImage(processedResponse.message);
        });
}

document.querySelector('.button').addEventListener('click', addNewDoggo);