//1. Find a Product by ID

 var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB" },
        { color: "blue", size: "128GB" }
      ],
      reviews: [
        { user: "Alice", rating: 5, comment: "Great product!" },
        { user: "Bob", rating: 4, comment: "Good value for money." }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch" },
        { color: "black", size: "13 inch" }
      ],
      reviews: [
        { user: "Charlie", rating: 4, comment: "Decent laptop." },
        { user: "David", rating: 5, comment: "Amazing performance!" }
      ]
    }
  };
  
  // Take product ID as input
  var productId = prompt("Enter product ID:");
  
  // Get the product object based on the ID
  var product = products[productId];
  
  // Output the product object or an error message if not found
  if (product) {
    console.log(product, null, 2);  // Format and print the product
  } else {
    console.log("Product not found.");
  }
  

//2. List All Product Titles

var products = {
    101: {
        id: 101,
        title: "Sony LED 40 inch",
        variations: ["Black", "White", "Silver"],
        reviews: ["Great picture quality", "Affordable", "Good sound"]
    },
    102: {
        id: 102,
        title: "Mobile",
        variations: ["64GB Storage", "128GB Storage", "6GB RAM"],
        reviews: ["Nice camera", "Battery lasts long", "Very smooth performance"]
    },
    103: {
        id: 103,
        title: "Bike",
        variations: ["Red", "Blue", "Black"],
        reviews: ["Good for commuting", "Comfortable", "Affordable"]
    }
};

// Loop through the products object and print each title
for (var productId in products) {
    if (products.hasOwnProperty(productId)) {
        console.log(products[productId].title);
    }
}

//3. Find Available Colors of a Product
// Sample data representing product information
var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB" },
        { color: "blue", size: "128GB" },
        { color: "red", size: "256GB" }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch" },
        { color: "black", size: "13 inch" },
        { color: "silver", size: "13 inch" }
      ]
    }
  };
  
  // Take product ID as input (simulated by a prompt in a browser environment)
  var productId = prompt("Enter product ID:");
  
  // Get the product object based on the ID
  var product = products[productId];
  
  // Output the available colors or an error message if not found
  if (product) {
    // Extract and print all unique colors from the variations
    var colors = product.variations.map(variation => variation.color);
    var uniqueColors = [...new Set(colors)]; // Remove duplicates
  
    uniqueColors.forEach(color => console.log(color));
  } else {
    console.log("Product not found.");
  }

 // 4. Get Total Quantity of a Product
 // Sample data representing product information
var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", quantity: 5 },
        { color: "blue", size: "128GB", quantity: 3 },
        { color: "red", size: "256GB", quantity: 6 }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch", quantity: 4 },
        { color: "black", size: "13 inch", quantity: 5 },
        { color: "silver", size: "13 inch", quantity: 3 }
      ]
    }
  };
  
  // Take product ID as input (simulated by a prompt in a browser environment)
  var productId = prompt("Enter product ID:");
  
  // Get the product object based on the ID
  var product = products[productId];
  
  // Calculate and output the total quantity of all variations or an error message if not found
  if (product) {
    const totalQuantity = product.variations.reduce((total, variation) => total + variation.quantity, 0);
    console.log(`Total Quantity: ${totalQuantity}`);
  } else {
    console.log("Product not found.");
  }

  //5. Filter Products with Low Stock
  // Sample data representing product information
var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", quantity: 5 },
        { color: "blue", size: "128GB", quantity: 3 },
        { color: "red", size: "256GB", quantity: 6 }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch", quantity: 1 },
        { color: "black", size: "13 inch", quantity: 5 },
        { color: "silver", size: "13 inch", quantity: 3 }
      ]
    },
    104: {
      id: 104,
      title: "Sony LED 40 inch",
      variations: [
        { color: "black", size: "40 inch", quantity: 0 },
        { color: "white", size: "40 inch", quantity: 10 }
      ]
    },
    105: {
      id: 105,
      title: "Bike",
      variations: [
        { color: "red", size: "medium", quantity: 1 },
        { color: "blue", size: "large", quantity: 4 }
      ]
    },
    106: {
      id: 106,
      title: "Washing Machine",
      variations: [
        { color: "white", size: "7kg", quantity: 3 },
        { color: "gray", size: "8kg", quantity: 2 }
      ]
    }
  };
  
  // Iterate over the products and check for variations with quantity < 2
  for (let productId in products) {
    const product = products[productId];
    const hasLowQuantityVariation = product.variations.some(variation => variation.quantity < 2);
  
    // If at least one variation has a quantity less than 2, print the product title
    if (hasLowQuantityVariation) {
      console.log(product.title);
    }
  }

  // 6. Find the Highest Rated Product
 // Sample data representing product information
var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", quantity: 5 },
        { color: "blue", size: "128GB", quantity: 3 }
      ],
      reviews: [
        { user: "Alice", rating: 5, comment: "Great product!" },
        { user: "Bob", rating: 4, comment: "Good value for money." }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch", quantity: 4 },
        { color: "black", size: "13 inch", quantity: 5 }
      ],
      reviews: [
        { user: "Charlie", rating: 3, comment: "Decent laptop." },
        { user: "David", rating: 5, comment: "Amazing performance!" }
      ]
    },
    104: {
      id: 104,
      title: "Washing Machine",
      variations: [
        { color: "white", size: "7kg", quantity: 3 },
        { color: "gray", size: "8kg", quantity: 2 }
      ],
      reviews: [
        { user: "Eva", rating: 2, comment: "Not good at all." },
        { user: "Frank", rating: 3, comment: "Works fine." }
      ]
    }
  };
  
  // Initialize variables to track the highest rated product
  var highestRatedProduct = null;
  var highestRating = 0;
  
  // Loop through each product to calculate the average rating and find the highest rated product
  for (var productId in products) {
    const product = products[productId];
  
    // Calculate the total rating
    var totalRating = 0;
    var totalReviews = product.reviews.length;
  
    // Sum the ratings of all reviews
    for (var i = 0; i < totalReviews; i++) {
      totalRating += product.reviews[i].rating;
    }
  
    // Calculate the average rating for the current product
    const averageRating = totalRating / totalReviews;
  
    // Compare with the highest rating found so far
    if (averageRating > highestRating) {
      highestRatedProduct = product;
      highestRating = averageRating;
    }
  }
  
  // Output the highest rated product
  if (highestRatedProduct) {
    console.log(`Highest Rated Product: ${highestRatedProduct.title}`);
  } else {
    console.log("No product reviews available.");
  }

  // 7. Filter Active Reviews for a Product
  // Sample data representing product information
var products = {
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", quantity: 5 },
        { color: "blue", size: "128GB", quantity: 3 }
      ],
      reviews: [
        { user: "Alice", rating: 5, status: true, comment: "Great product!" },
        { user: "Bob", rating: 4, status: false, comment: "Good value for money." },
        { user: "Ahmad", rating: 4.0, status: true, comment: "Very good product!" },
        { user: "Ali", rating: 5.0, status: true, comment: "Highly recommended!" }
      ]
    },
    103: {
      id: 103,
      title: "Laptop",
      variations: [
        { color: "gray", size: "15 inch", quantity: 4 },
        { color: "black", size: "13 inch", quantity: 5 }
      ],
      reviews: [
        { user: "Charlie", rating: 3, status: true, comment: "Decent laptop." },
        { user: "David", rating: 5, status: false, comment: "Amazing performance!" }
      ]
    }
  };
  
  // Iterate through each product and filter approved reviews
  for (var productId in products) {
    const product = products[productId];
    const approvedReviews = product.reviews.filter(review => review.status === true);
  
    // Output the approved reviews in the desired format
    approvedReviews.forEach(review => {
      console.log(JSON.stringify({
        user: review.user,
        rating: review.rating,
        comment: review.comment
      }));
    });
  }

  // 8. Find the Most Expensive Variation of Each Product
  // Sample data representing product information
var products = {
    101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { color: "black", size: "40 inch", price: 45000 },
        { color: "silver", size: "40 inch", price: 55000 },
        { color: "white", size: "40 inch", price: 50000 }
      ]
    },
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", price: 40000 },
        { color: "silver", size: "128GB", price: 55000 },
        { color: "gold", size: "256GB", price: 48000 }
      ]
    },
    103: {
      id: 103,
      title: "Bike",
      variations: [
        { color: "black", size: "medium", price: 45000 },
        { color: "red", size: "large", price: 50000 },
        { color: "blue", size: "small", price: 40000 },
        { color: "black", size: "large", price: 55000 }
      ]
    }
  };
  
  // Iterate through each product and find the most expensive variation
  for (var productId in products) {
    const product = products[productId];
  
    // Find the most expensive variation
    var mostExpensiveVariation = product.variations.reduce((expensive, variation) => {
      return variation.price > expensive.price ? variation : expensive;
    });
  
    // Output the product and the most expensive variation
    console.log(`Product ${product.id} = ${product.title} - ${mostExpensiveVariation.color} (${mostExpensiveVariation.price})`);
  }

  //9. Calculate Total Stock Value
  // Sample data representing product information
var products = {
    101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { color: "black", size: "40 inch", price: 45000, quantity: 5 },
        { color: "silver", size: "40 inch", price: 55000, quantity: 3 },
        { color: "white", size: "40 inch", price: 50000, quantity: 2 }
      ]
    },
    102: {
      id: 102,
      title: "Mobile",
      variations: [
        { color: "black", size: "64GB", price: 40000, quantity: 10 },
        { color: "silver", size: "128GB", price: 55000, quantity: 7 },
        { color: "gold", size: "256GB", price: 48000, quantity: 12 }
      ]
    },
    103: {
      id: 103,
      title: "Bike",
      variations: [
        { color: "black", size: "medium", price: 45000, quantity: 6 },
        { color: "red", size: "large", price: 50000, quantity: 4 },
        { color: "blue", size: "small", price: 40000, quantity: 8 },
        { color: "black", size: "large", price: 55000, quantity: 3 }
      ]
    }
  };
  
  // Calculate total stock value
  var totalStockValue = 0;
  
  for (var productId in products) {
    const product = products[productId];
    
    // Sum the value of each variation (price * quantity)
    product.variations.forEach(variation => {
      totalStockValue += variation.price * variation.quantity;
    });
  }
  
  // Output the total stock value
  console.log(`Total Stock Value: ${totalStockValue}`);
  