document.addEventListener("DOMContentLoaded", function() {
  const listColumn = document.getElementById("list-column");
  const detailColumn = document.getElementById("detail-column");
  const loadMoreBtn = document.getElementById("load-more-btn");

  let page = 1;
  const apiUrl = "https://dummyjson.com/products/search?q=bag" + page;


  async function fetchData() {
      try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }


  function displayData(data) {
      listColumn.innerHTML = "";
      data.forEach(item => {
          const block = document.createElement("div");
          block.classList.add("block");
          block.textContent = item.title; 
          block.addEventListener("click", () => displayDetail(item));
          listColumn.appendChild(block);
      });
  }


  function displayDetail(item) {
      detailColumn.innerHTML = "";
      const detailBlock = document.createElement("div");
      detailBlock.textContent = item.description;
      detailColumn.appendChild(detailBlock);
  }


  loadMoreBtn.addEventListener("click", async () => {
      page++;
      const newData = await fetchData(apiUrl + "&page=" + page);
      displayData(newData);
  });


  async function initialize() {
      const initialData = await fetchData();
      displayData(initialData);
  }

  initialize();
});
