const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    // Populate product <select>
    const select = document.querySelector('#product');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      select.appendChild(option);
    });
  
    // Range slider display logic
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("r");
    if (range && rangevalue) {
      const displayRatingValue = () => {
        rangevalue.innerHTML = range.value;
      };
      range.addEventListener('change', displayRatingValue);
      range.addEventListener('input', displayRatingValue);
    }
  
    // Review count logic (stored but not displayed)
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
  
    // Count is updated but not shown on the page
  });
   