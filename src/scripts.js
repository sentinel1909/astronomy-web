// this app uses the JavaScript fetch() method to pull the photo (or video)
// of the day from the NASA public astronomy API.  The photo (or video)
// is then displayed in a simple web page.

window.onload = () => {
    nasaPhotoApi();
}

// fetch() the data, returns in json format
const nasaPhotoApi = () => {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=lsULnkmChaJlS3fZO85M3cnGA8TFCAm2peEfd9QS';
    fetch(url)
        .then(response => response.json())
        .then(apiData => {
            if ( apiData.url.includes("youtube") ) {    // check for the word "youtube" in the url that's returned from the api data
                showText(apiData)
                showVideo(apiData)       // if the word "youtube" is there, it means there's video and needs to be rendered differently   
            } else {
                showText(apiData)
                showPhoto(apiData)   // if it's a photo, pass it to the photo rendering function
        }})
        .catch((error) => {                             // catch an error and log it to console if the NASA api is down
            console.log("Could not load data today")
        })
};

// display the text in the web page
const showText = (apiData) => {
    document.getElementById('date').innerText = apiData.date
    document.getElementById('title').innerText = apiData.title
    document.getElementById('explanation').innerText = apiData.explanation
};


// display the photo in the web page
const showPhoto = (apiData) => {
    let imgFrame = document.createElement('img')
    imgFrame.setAttribute('src', apiData.url)
    imgFrame.setAttribute('alt', "NASA photo of the day")
    document.body.appendChild(imgFrame).classList.add('img')
};

// display the video in the web page
const showVideo = (apiData) => {
    let vidFrame = document.createElement('iframe')
    vidFrame.setAttribute('src', apiData.url)
    vidFrame.setAttribute('alt', "NASA video of the day")
    vidFrame.style.width = "1024px"
    vidFrame.style.height = "768px"
    document.body.appendChild(vidFrame).classList.add('video')
};
