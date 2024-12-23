// Product Data
const products = [
    {
      id: 1,
      title: "Medical Mask",
      description: "A three-layer protective mask for respiratory safety.",
      price: 10.99,
      image: "Mask.jpg",
    },
    {
      id: 2,
      title: "Medical Gloves",
      description: "High-quality latex gloves for medical use.",
      price: 10.49,
      image: "glovesgood.jpeg",
    },
    {
      id: 3,
      title: "Digital Thermometer",
      description: "Accurate and easy-to-use thermometer for temperature measurement.",
      price: 29.99,
      image: "thermo.jpg",
    },
    {
      id: 4,
      title: "Alcohol Sanitizer",
      description: "Hand sanitizer with 70% alcohol for effective disinfection.",
      price: 6.99,
      image: "alco.jpg",
    },
    {
      id: 5,
      title: "First Aid Kit",
      description: "A kit containing essential medical emergency supplies.",
      price: 20.0,
      image: "first-aid-kit.jpg",
    },
    {
        id: 6,
        title: "Medical Mask",
        description: "A three-layer protective mask for respiratory safety.",
        price: 4.99,
        image: "maskwhite.jpeg",
      },
      {
        id: 7,
        title: "Medical Gloves",
        description: "High-quality latex gloves for medical use.",
        price: 5.49,
        image: "gloves.jpg",
      },
      {
        id: 8,
        title: "Digital Thermometer",
        description: "Accurate and easy-to-use thermometer for temperature measurement.",
        price: 19.99,
        image: "termo.jpeg",
      },
      {
        id: 9,
        title: "Alcohol Sanitizer",
        description: "Hand sanitizer with 70% alcohol for effective disinfection.",
        price: 8.99,
        image: "co.jpg",
      },
      {
        id: 10,
        title: "First Aid Kit",
        description: "A kit containing essential medical emergency supplies.",
        price: 50.0,
        image: "firstkit.jpg",
      },
      {
        id: 11,
        title: "Medical Mask",
        description: "A three-layer protective mask for respiratory safety.",
        price: 2.99,
        image: "blackmask.jpg",
      },
      {
        id: 12,
        title: "Medical Gloves",
        description: "High-quality latex gloves for medical use.",
        price: 5.49,
        image: "glo.png",
      },
      {
        id: 13,
        title: "Digital Thermometer",
        description: "Accurate and easy-to-use thermometer for temperature measurement.",
        price: 25.99,
        image: "termo2.jpeg",
      },
      {
        id: 14,
        title: "Alcohol Sanitizer",
        description: "Hand sanitizer with 70% alcohol for effective disinfection.",
        price: 5.65,
        image: "detol.jpg",
      },
      {
        id: 15,
        title: "First Aid Kit",
        description: "A kit containing essential medical emergency supplies.",
        price: 40.0,
        image: "firstkitgif.gif",
      },
      {
        id: 16,
        title: "Medical Mask",
        description: "A three-layer protective mask for respiratory safety.",
        price: 14.99,
        image: "nicemask.jpg",
      },
      {
        id: 17,
        title: "Medical Gloves",
        description: "High-quality latex gloves for medical use.",
        price: 9.49,
        image: "orangegloves.jpg",
      },
      {
        id:18,
        title: "Digital Thermometer",
        description: "Accurate and easy-to-use thermometer for temperature measurement.",
        price: 9.99,
        image: "thermometer.jpg",
      },
      {
        id:19,
        title: "Alcohol Sanitizer",
        description: "Hand sanitizer with 70% alcohol for effective disinfection.",
        price:2.49,
        image: "alcohol.jpg",
      },
      {
        id: 20,
        title: "First Aid Kit",
        description: "A kit containing essential medical emergency supplies.",
        price: 100.0,
        image: "largekit.jpg",
      },
  ];
  

const mostSales = [products[0], products[2], products[4]]; // Top-selling products

// Render Products
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('#products .row', products);
  renderProducts('#sales-products', mostSales);
});

// Function to Render Products
function renderProducts(containerSelector, productList) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = '';
  productList.forEach(product => {
    const productCard = `
      <div class="col-md-4">
        <div class="card h-100 text-center">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="fw-bold text-primary mt-auto">$${product.price}</p>
            <a href="#" class="btn btn-primary"><i class="fas fa-info-circle"></i> View Details</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += productCard;
  });
}



// JavaScript for toggling Dark Mode



// JavaScript for toggling Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check for saved mode in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      enableDarkMode();
    }
  
    darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    function enableDarkMode() {
      body.classList.add('dark-mode');
      document.querySelectorAll('nav, footer, .card, form, header, #about, #contact').forEach((el) => {
        el.classList.add('dark-mode');
      });
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
      localStorage.setItem('darkMode', 'enabled');
    }
  
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      document.querySelectorAll('nav, footer, .card, form, header, #about, #contact').forEach((el) => {
        el.classList.remove('dark-mode');
      });
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  
  
