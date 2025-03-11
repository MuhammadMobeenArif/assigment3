
  // 1. Find a Product by ID
const productDB = {
  101: {
      id: 101,
      title: "Laptop",
      variations: [
          { color: "Black", size: "15 inch" },
          { color: "Silver", size: "14 inch" }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great laptop!" },
          { user: "Bob", rating: 5, comment: "Absolutely love it!" }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch" },
          { color: "Blue", size: "5.5 inch" }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." },
          { user: "David", rating: 4, comment: "Good value for money." }
      ]
  },
  103: {
      id: 103,
      title: "Tablet",
      variations: [
          { color: "White", size: "10 inch"},
          { color: "Black", size: "9.7 inch" }
 ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Perfect tablet for work and play." }
      ]
  }
};


function getProductById(productId) {
  return productDB[productId] ||"Tablet or Mobile not found.";
}

const productId = parseInt(prompt("Enter product ID: "));
const prodcutDB= getProductById(productDB);
if (productId!== "Product not found.") {
  console.log(productDB, null, 2);
} else {
  console.log(product);
}

// 2. List All Product Titles

const productsDB = {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch" },
          { color: "Silver", size: "42 inch" }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great TV!" }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch" },
          { color: "Blue", size: "5.5 inch" }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium" },
          { color: "Red", size: "Large" }
      ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Great bike for mountain trails." }
      ]
  }
};

function printProductTitles() {
  for (const productId in productId) {
      if (productsDB.hasOwnProperty(productId)) {
          console.log(productsDB[productId].title);
      }
  }
}
//3. Find Available Colors of a Product
const producDB = {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch" },
          { color: "Silver", size: "42 inch" }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great TV!" }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch" },
          { color: "Blue", size: "5.5 inch" }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium" },
          { color: "Red", size: "Large" }
      ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Great bike for mountain trails." }
      ]
  }
};


function printProductColors(productId) {
  const product = productsDB[productId];
  
  if (product) {
      const colors = product.variations.map(variation => variation.color);
      colors.forEach(color => console.log(color.toLowerCase()));
  } else {
      console.log("Product not found.");
  }
}

//4. Get Total Quantity of a Product

const produDB = {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch", quantity: 5 },
          { color: "Silver", size: "42 inch", quantity: 3 }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great TV!" }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch", quantity: 7 },
          { color: "Blue", size: "5.5 inch", quantity: 4 }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium", quantity: 3 },
          { color: "Red", size: "Large", quantity: 2 }
      ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Great bike for mountain trails." }
      ]
  }
};


function printTotalQuantity(productId) {
  const product = productsDB[productId];
  
  if (product) {
      const totalQuantity = product.variations.reduce((total, variation) => total + variation.quantity, 0);
      console.log(`Total Quantity: ${totalQuantity}`);
  } else {
      console.log("Product not found.");
  }
}


//5. Filter Products with Low Stock

const prodDB = {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch", quantity: 5 },
          { color: "Silver", size: "42 inch", quantity: 3 }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great TV!" }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch", quantity: 1 },  
          { color: "Blue", size: "5.5 inch", quantity: 4 }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium", quantity: 0 }, 
          { color: "Red", size: "Large", quantity: 2 }
      ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Great bike for mountain trails." }
      ]
  },
  104: {
      id: 104,
      title: "Tablet",
      variations: [
          { color: "White", size: "10 inch", quantity: 10 },
          { color: "Black", size: "9.7 inch", quantity: 8 }
      ],
      reviews: [
          { user: "John", rating: 5, comment: "Perfect tablet!" }
      ]
  }
};


function printProductsWithLowStock() {
  for (const productId in productId) {
      const product = productsDB[productId];
   
      const lowStockVariation = product.variations.some(variation => variation.quantity < 2);
      
      if (lowStockVariation) {
          console.log(product.title);
      }
  }
}


//6. Find the Highest Rated Product

const proDB= {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch" },
          { color: "Silver", size: "42 inch" }
      ],
      reviews: [
          { user: "Alice", rating: 4, comment: "Great TV!" },
          { user: "Bob", rating: 5, comment: "Amazing picture quality." }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch" },
          { color: "Blue", size: "5.5 inch" }
      ],
      reviews: [
          { user: "Charlie", rating: 3, comment: "It's okay, could be better." },
          { user: "David", rating: 4, comment: "Good value for money." }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium" },
          { color: "Red", size: "Large" }
      ],
      reviews: [
          { user: "Eva", rating: 5, comment: "Great bike for mountain trails." }
      ]
  }
};

function calculateAverageRating(reviews) {
  const totalRating = reviews.reduce((total, review) => total + review.rating, 0);
  return totalRating / reviews.length;
}


function printHighestRatedProduct() {
  let highestRatedProduct = null;
  let highestRating = 0;
  
  for (const productId in productId) {
      const product = productsDB[productId];
      const averageRating = calculateAverageRating(product.reviews);
      
   
      if (averageRating > highestRating) {
          highestRatedProduct = product;
          highestRating = averageRating;
      }
  }
  
  if (highestRatedProduct) {
      console.log(`Highest Rated Product: ${highestRatedProduct.title}`);
  } else {
      console.log("No products with ratings available.");
  }
}




//7. Filter Active Reviews for a Product

const prod= {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch" },
          { color: "Silver", size: "42 inch" }
      ],
      reviews: [
          { user: "Ahmad", rating: 4.0, comment: "Great TV!", status: true },
          { user: "Ali", rating: 5.0, comment: "Amazing picture quality.", status: true },
          { user: "Sam", rating: 3.0, comment: "Good, but a little pricey.", status: false }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch" },
          { color: "Blue", size: "5.5 inch" }
      ],
      reviews: [
          { user: "Charlie", rating: 3.0, comment: "It's okay, could be better.", status: false },
          { user: "David", rating: 4.0, comment: "Good value for money.", status: true }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium" },
          { color: "Red", size: "Large" }
      ],
      reviews: [
          { user: "Eva", rating: 5.0, comment: "Great bike for mountain trails.", status: true }
      ]
  }
};


function printApprovedReviews(productId) {
  const product = productId[productId];
  
  if (product) {
      
      const approvedReviews = product.reviews.filter(review => review.status === true);
      
      if (approvedReviews.length > 0) {
          approvedReviews.forEach(review => {
              console.log(JSON.stringify(review));
          });
      } else {
          console.log("No approved reviews for this product.");
      }
  } else {
      console.log("Product not found.");
  }
}




//8. Find the Most Expensive Variation of Each Product


const pro= {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch", price: 45000 },
          { color: "Silver", size: "42 inch", price: 55000 },
          { color: "Red", size: "50 inch", price: 50000 }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch", price: 30000 },
          { color: "Blue", size: "5.5 inch", price: 25000 },
          { color: "Silver", size: "6 inch", price: 55000 }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium", price: 55000 },
          { color: "Red", size: "Large", price: 45000 }
      ]
  }
};


function printMostExpensiveVariation() {
  for (const productId in productsDB) {
      const product = productsDB[productId];
      

      const mostExpensiveVariation = product.variations.reduce((maxVariation, currentVariation) => {
          return currentVariation.price > maxVariation.price ? currentVariation : maxVariation;
      });

      console.log(`Product ${productId} = ${product.title} - ${mostExpensiveVariation.color} (${mostExpensiveVariation.price})`);
  }
}
//9. Calculate Total Stock Value

const prDB = {
  101: {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
          { color: "Black", size: "40 inch", price: 45000, quantity: 10 },
          { color: "Silver", size: "42 inch", price: 55000, quantity: 8 },
          { color: "Red", size: "50 inch", price: 50000, quantity: 6 }
      ]
  },
  102: {
      id: 102,
      title: "Mobile",
      variations: [
          { color: "Red", size: "6 inch", price: 30000, quantity: 12 },
          { color: "Blue", size: "5.5 inch", price: 25000, quantity: 15 },
          { color: "Silver", size: "6 inch", price: 55000, quantity: 5 }
      ]
  },
  103: {
      id: 103,
      title: "Bike",
      variations: [
          { color: "Black", size: "Medium", price: 55000, quantity: 7 },
          { color: "Red", size: "Large", price: 45000, quantity: 10 }
      ]
  }
};

function printTotalStockValue() {
  let totalStockValue = 0;

  for (const productId in productsDB) {
      const product = productsDB[productId];

 
      const productValue = product.variations.reduce((total, variation) => {
          return total + (variation.price * variation.quantity);
      }, 0);

 
      totalStockValue += productValue;
  }

  console.log(`Total Stock Value: ${totalStockValue}`);
}

