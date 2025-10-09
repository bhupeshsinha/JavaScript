const ACCESS_TOKEN = "jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4"; // Replace with your Unsplash key

const keyword = document.getElementById("keyword");
const allImg = document.getElementById("allImg");
const themeToggle = document.getElementById("themeToggle");

document.getElementById("btn").addEventListener("click", () => {
  const val = keyword.value.trim();
  if (!val) return alert("Please enter a keyword!");
  allImg.innerHTML = `<p class="loading">Loading images...</p>`;
  fetchImg(val);
});

async function fetchImg(val) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${val}&per_page=15&client_id=${ACCESS_TOKEN}`
    );
    const result = await response.json();
    displayImg(result);
  } catch (error) {
    allImg.innerHTML = `<p style="color:red;">Failed to fetch images 😢</p>`;
  }
}

function displayImg(res) {
  allImg.innerHTML = "";
  if (!res.results.length) {
    allImg.innerHTML = `<p style="text-align:center;">No images found 😔</p>`;
    return;
  }

  res.results.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("singleImg");
    div.innerHTML = `
      <div class="firstDiv">
        <img src="${data.user.profile_image.medium}" alt="${data.user.name}" class="userImg">
        <p class="userName">${data.user.name}</p>
      </div>
      <div class="secondDiv">
        <img src="${data.urls.regular}" alt="${data.alt_description || 'Image'}" class="mainImg">
        <p class="imgDes">${data.alt_description || 'No description'}</p>
      </div>
    `;
    allImg.appendChild(div);
  });
}

// Theme Toggle 🌗
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
