let imgDiv = document.getElementById("imgDiv");

let btn = document.getElementById("btn");

let title = document.getElementById("title");
let sub = document.getElementById("sub");
let content = document.getElementById("content");
let hdPic = document.getElementById("hd");
let readMore = document.getElementById("readMore");

let cardbody = document.getElementById("cardBody");

let data = fetch(
  "https://api.nasa.gov/planetary/apod?api_key=0sCvikBtG1tq4OfoZIWExWb0nbHJqPefnk7XWVL2"
);
data
  .then((data) => data.json())
  .then((imgData) => {
    imgDiv.setAttribute("style", `background-image: url(${imgData.url});`);
    hdPic.setAttribute("href", `${imgData.hdurl}`);
    document.body.append(imgData);
    title.innerText = imgData.title;
    sub.innerText = imgData.date;
    readMore.innerText = imgData.explanation;
    // content.innerText = imgData.explanation.slice(0, 100);
    content.innerHTML = `
    ${imgData.explanation.slice(0, 100)} 
    <a   data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
        Read More
    </a>
    
    `;
    readMore.innerText = imgData.explanation;
  });

function getdate() {
  imgDiv.removeAttribute("style");
  let date = document.getElementById("date").value;
  console.log(date);
  let data = fetch(
    `https://api.nasa.gov/planetary/apod?api_key=0sCvikBtG1tq4OfoZIWExWb0nbHJqPefnk7XWVL2&date=${date}`
  );
  data
    .then((data) => data.json())
    .then((imgData) => {
      imgDiv.setAttribute("style", `background-image: url(${imgData.url});`);
      document.body.append(imgData);
      hdPic.setAttribute("href", `${imgData.hdurl}`);
      document.body.append(imgData);
      title.innerText = imgData.title;
      sub.innerText = imgData.date;
      //content.innerText = imgData.explanation.slice(0, 100);
      content.innerHTML = `
    ${imgData.explanation.slice(0, 100)} 
    <a   data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
        Read More
    </a>
    
    `;
    readMore.innerText = imgData.explanation;
    });
}
