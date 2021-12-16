/*store blog data to object {...}
store object to arrays [...]
render array to html </>*/
let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);

  let blog = {
    title: title,
    content: content,
    image: image,
    author: "Danu Prasetyo",
    postAt: new Date(),
  };

  blogs.push(blog);

  //looping
  //for (let i = 0; i < 10; i++) {}

  console.log(blog);

  renderBlog();
}
//cara manipulasi tag HTML
function renderBlog() {
  let contentContainer = document.getElementById("contents");
  //cara manipulasi tag menjadi button dll
  //contentContainer.innerHTML = "<button>Belajar manipulasi tag button</button>";
  contentContainer.innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
    <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">
            ${blogs[i].title}
            </a>
          </h1>
          <div class="detail-blog-content">
          ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right; font-size: 15px; color: grey">
          ${getDistanceTime(blogs[i].postAt)}
            </div>
        </div>
      </div>`;
  }
}

//menampilkan kapan waktu data tersebut di upload/post
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getFullTime(time) {
  let date = time.getDate(); //tanggal = getDate()
  let monthIndex = time.getMonth(); //bulan = getMonth()
  let year = time.getFullYear(); //tahun = getFullYear()
  let hours = time.getHours(); //jam = getHours()
  let minutes = time.getMinutes(); //menit = getMinutes()
  let seconds = time.getSeconds(); //detik = getSeconds()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes}:${seconds} WIB`;
  return fullTime;
}
//menampilkan berapa lama post tersebut sudah diupload
function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost;

  //convert waktu
  let milliseconds = 1000; //milliseconds in 1 seconds
  let secondsInHours = 3600; //Second in 1 hours
  let hoursInDay = 23; //hours in 1 day

  let distanceDay = Math.floor(distance / (milliseconds * secondsInHours * hoursInDay));

  //method membulatkan nilai koma
  //distanceDay = Math.floor(distanceDay);

  //pengecekan jika jarak lebih dari sama dengan 1(sehari)
  if (distanceDay >= 1) {
    return `${distanceDay} days ago`;
  } else {
    //convert milliseconds to hours (jika kurang dari 1 hari)
    let distanceHours = Math.floor(distance / (1000 * 60 * 60));
    if (distanceHours >= 1) {
      return `${distanceHours} hours ago`;
    } else {
      //convert to minute (jika kurang dari 1 jam)
      let distanceMinutes = Math.floor(distance / (1000 * 60));
      if (distanceMinutes >= 1) {
        return ` ${distanceMinutes} minutes ago`;
      } else {
        //convert to second (jika kurang dari 1 menit)
        let distanceSeconds = Math.floor(distance / 1000);
        console.log(distanceSeconds);
        return `${distanceSeconds} seconds ago`;
      }
    }
  }
}
getDistanceTime();

//fungsi setInnterval = dy akan mengeksekusi program terus menerus tiap waktu
setInterval(() => {
  renderBlog();
}, 1000);
