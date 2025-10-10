// const ACCESS_TOKEN = "jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4"; // Replace with your Unsplash key

// const keyword = document.getElementById("keyword");
// const allImg = document.getElementById("allImg");
// const themeToggle = document.getElementById("themeToggle");

// document.getElementById("btn").addEventListener("click", () => {
//   const val = keyword.value.trim();
//   if (!val) return alert("Please enter a keyword!");
//   allImg.innerHTML = `<p class="loading">Loading images...</p>`;
//   fetchImg(val);
// });

// async function fetchImg(val) {
//   try {
//     const response = await fetch(
//       `https://api.unsplash.com/search/photos?query=${val}&per_page=15&client_id=${ACCESS_TOKEN}`
//     );
//     const result = await response.json();
//     displayImg(result);
//   } catch (error) {
//     allImg.innerHTML = `<p style="color:red;">Failed to fetch images 😢</p>`;
//   }
// }

// function displayImg(res) {
//   allImg.innerHTML = "";
//   if (!res.results.length) {
//     allImg.innerHTML = `<p style="text-align:center;">No images found 😔</p>`;
//     return;
//   }

//   res.results.forEach((data) => {
//     const div = document.createElement("div");
//     div.classList.add("singleImg");
//     div.innerHTML = `
//       <div class="firstDiv">
//         <img src="${data.user.profile_image.medium}" alt="${data.user.name}" class="userImg">
//         <p class="userName">${data.user.name}</p>
//       </div>
//       <div class="secondDiv">
//         <img src="${data.urls.regular}" alt="${data.alt_description || 'Image'}">
//         <div class="img-overlay">${data.alt_description || 'Untitled'}</div>
//       </div>
//     `;
//     allImg.appendChild(div);
//   });
// }

// // THEME TOGGLE 🌗
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
// });

const ACCESS_TOKEN = "jxTWcfzcIQb-V2t3Z6mANMt7I7hl7XcefBhKGRTk4W4"; // Replace with your Unsplash key

const keyword = document.getElementById("keyword");
const allImg = document.getElementById("allImg");
const themeToggle = document.getElementById("themeToggle");

// Pagination elements
let currentPage = 1;
const perPage = 12;
let lastQuery = "";

const pagination = document.createElement("div");
pagination.id = "pagination";
pagination.style.display = "flex";
pagination.style.justifyContent = "center";
pagination.style.gap = "15px";
pagination.style.margin = "30px 0";
document.querySelector(".wrapper").appendChild(pagination);

const prevBtn = document.createElement("button");
prevBtn.textContent = "⬅ Previous";
prevBtn.className = "pagination-btn";
prevBtn.disabled = true;

const nextBtn = document.createElement("button");
nextBtn.textContent = "Next ➡";
nextBtn.className = "pagination-btn";

pagination.appendChild(prevBtn);
pagination.appendChild(nextBtn);

// Search button click
document.getElementById("btn").addEventListener("click", () => {
  const val = keyword.value.trim();
  if (!val) return alert("Please enter a keyword!");
  lastQuery = val;
  currentPage = 1;
  fetchImg(val, currentPage);
});

// Fetch images
async function fetchImg(query, page = 1) {
  try {
    allImg.innerHTML = `<p style="grid-column:1/-1; text-align:center;">Loading images...</p>`;
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_TOKEN}`
    );
    const result = await response.json();
    displayImg(result);
    updatePagination(result.total);
  } catch (error) {
    allImg.innerHTML = `<p style="color:red; text-align:center;">Failed to fetch images 😢</p>`;
  }
}

// Display images
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
        <img src="${data.urls.regular}" alt="${data.alt_description || 'Image'}">
        <div class="img-overlay">${data.alt_description || 'Untitled'}</div>
      </div>
    `;
    allImg.appendChild(div);
  });
}

// Pagination update
function updatePagination(totalResults) {
  const totalPages = Math.ceil(totalResults / perPage);
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages;
}

// Pagination button clicks
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchImg(lastQuery, currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  fetchImg(lastQuery, currentPage);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme Toggle 🌗
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
