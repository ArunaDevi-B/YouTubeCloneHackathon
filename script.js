let apiKey = "AIzaSyBrW5__YL1Ppn4zKD6d3P9TukuZC-hEtp4";
let channelUrl = "https://www.googleapis.com/youtube/v3/channels?";
let videoUrl = "https://www.googleapis.com/youtube/v3/videos?";

let container = document.querySelector(".container");

fetch(
  videoUrl +
    new URLSearchParams({
      key: apiKey,
      part: "snippet",
      chart: "mostPopular",
      maxResult: 40,
      regionCode: "IN",
    })
)
  .then((result) => result.json())
  .then((data) => {
    data.items.forEach((item) => {
      {
        channelIcon(item);
      }
    });
  })
  .catch((error) => console.log(error));

let channelIcon = (video_data) => {
    console.log(video_data.snippet.channelId);
  fetch(
    channelUrl +
      new URLSearchParams({
        key: apiKey,
        part: "snippet",
        id: video_data.snippet.channelId
      })
  )
    .then((result) => result.json())
    .then((data) => {
      video_data.thumbnail = data.items[0].snippet.thumbnails.default.url;
      videoCard(video_data);
    });
};

let videoCard = (data) => {
  container.innerHTML += ` 
    <div class="video" onclick="location.href= 'https://youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <div class="content">
        <img src="${data.thumbnail}" class="channel-icon" alt="">
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
    </div>
</div>`;
};

let inputBox=document.querySelector('.inputBox');
let button=document.querySelector('.buttonSearch');
let searchUrl="https://www.youtube.com/results?search_query=";

button.addEventListener('click',()=>{
    if(inputBox.value.length){
        location.href= searchUrl + inputBox.value;
    }
})

let subscriberCount=document.getElementById('subscriberId');
let videoCount=document.getElementById('videoCount');
let viewCount=document.getElementById('viewCount');

let getData=(channelId)=>{
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data["items"][0].statistics.subscriberCount);
        console.log(data["items"][0].statistics.videoCount);
        console.log(data["items"][0].statistics.viewCount);


        subscriberCount.value = data["items"][0].statistics.subscriberCount;
        videoCount.value = data["items"][0].statistics.videoCount;
        viewCount.value = data["items"][0].statistics.viewCount;
       

    })
}
getData();


let btn1=document.getElementById('btn1')
   let inputBox1=document.getElementById('inputbox1')

   btn1.addEventListener('click',()=>{
       let channelId=inputBox1.value;
       getData(channelId)
   })

   let options1=document.querySelector('.filter-options1')
   let options2=document.querySelector('.filter-options2')
   let options3=document.querySelector('.filter-options3')
   let options4=document.querySelector('.filter-options4')
   let options5=document.querySelector('.filter-options5')
   let options6=document.querySelector('.filter-options6')
   let options7=document.querySelector('.filter-options7')
   let options8=document.querySelector('.filter-options8')
   let options9=document.querySelector('.filter-options9')



   options1.addEventListener('click', ()=>{
    //    console.log(options1.innerHTML);
    //    console.log(options1.value);
    location.href = searchUrl + options1.value;
   })

   options2.addEventListener('click',()=>{
    location.href = searchUrl + options2.value
   })

   options3.addEventListener('click',()=>{
    location.href = searchUrl + options3.value
   })

   options4.addEventListener('click',()=>{
    location.href = searchUrl + options4.value
   })

   options5.addEventListener('click',()=>{
    location.href = searchUrl + options5.value
   })

   options6.addEventListener('click',()=>{
    location.href = searchUrl + options6.value
   })

   options7.addEventListener('click',()=>{
    location.href = searchUrl + options7.value
   })

   options8.addEventListener('click',()=>{
    location.href = searchUrl + options8.value
   })

   options9.addEventListener('click',()=>{
    location.href = searchUrl + options9.value
   })
