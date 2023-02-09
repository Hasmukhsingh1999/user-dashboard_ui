const sideMenu = document.querySelector("aside");

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  // document.querySelector('body').style.color = '#f6f6f9';
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

const Orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85631",
    paymentStatus: "Due",
    shipping: "Pending",
  },

  {
    productName: "LARVENDER KF102 DRONE",
    productNumber: "36378",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },

  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending",
  },

  {
    productName: "Drone with Camera Drone",
    productNumber: "96996",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },

  {
    productName: "GPS 4k Drone",
    productNumber: "22821",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

// let str = ' ';

Orders.forEach(function (val) {
  const tr = document.createElement("tr");

  const trContent = `<td>${val.productName}</td>
    <td>${val.productNumber}</td>
    <td>${val.paymentStatus}</td>
    <td class="${
      val.shipping === "Declined"
        ? "danger"
        : val.shipping === "pending"
        ? "warning"
        : "primary"
    }">${val.shipping}</td>
    <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
