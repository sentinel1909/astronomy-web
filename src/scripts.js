// this app uses the JavaScript fetch() method to pull the Photo
// of the day from the NASA public astronomy API.  The Photo
// is then displayed in a simple web page.

window.onload = () => {
    nasaPhotoApi()
}

const nasaPhotoApi = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=lsULnkmChaJlS3fZO85M3cnGA8TFCAm2peEfd9QS')
     .then((response) => {
         return response.json()
     }).then((data) => {
         console.log(data)
         showNasaPhotoData(data)
     })
}

showNasaPhotoData = (photo) => {
    document.getElementById('date').innerText = photo.date
    document.getElementById('title').innerText = photo.title
    document.getElementById('explanation').innerText = photo.explanation
    let image = document.createElement('img')
    image.setAttribute('src', photo.url)
    document.body.appendChild(image)
}
