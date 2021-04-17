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
            console.log(apiData)
            if ( apiData.url.includes("youtube") ) {    // check if it's a video, pass it to the video rendering function
                showNasaVideo(apiData)
            } else showNasaPhoto(apiData)   // if it's a photo, pass it to the photo rendering function
        });
}

// display the photo in a web page
const showNasaPhoto = (photo) => {
    document.getElementById('date').innerText = photo.date;
    document.getElementById('title').innerText = photo.title;
    document.getElementById('explanation').innerText = photo.explanation;
    let imgFrame = document.createElement('img');
    imgFrame.setAttribute('src', photo.url);
    imgFrame.setAttribute('alt', "NASA photo of the day");
    document.body.appendChild(imgFrame).classList.add('img');
}

// display the video in a web page
const showNasaVideo = (video) => {
    document.getElementById('date').innerText = video.date;
    document.getElementById('title').innerText = video.title;
    document.getElementById('explanation').innerText = video.explanation;
    let vidFrame = document.createElement('iframe');
    vidFrame.setAttribute('src', video.url);
    vidFrame.setAttribute('alt', "NASA video of the day");
    vidFrame.style.width = "1024px";
    vidFrame.style.height = "768px";
    document.body.appendChild(vidFrame).classList.add('video');
}
