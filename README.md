# YouTube Playlist
A simple playlist of videos from YouTube API
## Instructions to run the App
* Download the zip file from this repo
* Uzip and cd into the folder
* Make sure nodeJS is installed in your system
* Run node app.js and you should see a message 'Server is running at http://localhost:8080'
* Open browser and go to URL Server is running at http://localhost:8080
* The default selected Atrist is displayed
* Check out the top music of other atrist using the dropdown
## Design Decisions
* This is a Node JS based simple and easy to use application
* Express JS is used to create a server listening on a specific port
* Some node modules are used to hit the Youtube API and fetch the JSON object
* The JSON object is parsed on the server side and a new object with required fields is created
* This new object is sent to the client side where jQuery is used to retrieve the data and populate the HTML
* A default value from the dropdown is used to get the first result
* The dropdown is monitored for any chnages and as soon as a change is made the API is hit again to fetch appropriate results
* Top 5 results from Youtube are diplayed as videos
* A UI is kept simple and clean with a easy scroll option to see all the videos on the page
* A list is displayed on the right side naming all the top videos by that particular artist and giving quick link to that video when clicked
* This list is also dynamically generated and changes as search value is changed. Has a link to that named video for easy access.
* The dropdown and listView are kept fixed so that users can get easy access to switch artist while scrolling down
* As soon as the value in dropdown is changed the listView and the videos get updated instantly
* The heading has a animation effect which keeps on running infinitely to make it get attention
* Each video has a heading with a minimal opacity background and bold tiles to make the UX look better
* a simple background image fills the page and gives a better look and feel
