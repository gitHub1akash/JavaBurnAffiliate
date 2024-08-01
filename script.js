document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle('active');
    });
});



// customer reviews 
const reviews = [
    {
        text: "Java Burn has been a game-changer for me. I've lost 10 pounds in the last month without changing my diet or exercise routine.",
        author: "John Doe",
        image: "./img/customers/JohnDoe.jpg"
    },
    {
        text: "The best part about Java Burn is that it's tasteless and doesn't affect the flavor of my coffee. Plus, it's all natural!",
        author: "Michael Brown",
        image: "./img/customers/MichaelBrown.jpg"
    },
    {
        text: "I've tried many weight loss supplements, but Java Burn is the only one that actually worked for me. Highly recommend!",
        author: "Alice Johnson",
        image: "./img/customers/AliceJohnson.jpg"
    },
    {
        text: "I love how easy it is to use Java Burn with my morning coffee. It gives me energy and keeps me feeling full all day.",
        author: "John Smith",
        image: "./img/customers/JohnSmith.jpg"
    },
    {
        text: "Java Burn not only helps with weight loss, but it also gives me a steady boost of energy throughout the day.",
        author: "Sarah Wilson",
        image: "./img/customers/SarahWilson.jpg"
    }
];

let currentReviewIndex = 0;

const reviewImageElement = document.querySelector(".review-image");
const reviewTextElement = document.querySelector(".review-text");
const reviewAuthorElement = document.querySelector(".review-author");
const reviewElement = document.querySelector(".review");

function displayReview(index) {
    // Add transition effect
    reviewElement.classList.remove("active");
    setTimeout(() => {
        reviewImageElement.src = reviews[index].image;
        reviewTextElement.textContent = reviews[index].text;
        reviewAuthorElement.textContent = `- ${reviews[index].author}`;
        reviewElement.classList.add("active");
    }, 500); // Match this duration with the CSS transition time
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentReviewIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReview(currentReviewIndex);
});

// Display the first review on initial load
displayReview(currentReviewIndex);

// Auto-scroll functionality
function autoScrollReviews() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReview(currentReviewIndex);
}

// Set interval for auto-scrolling every 3 seconds (3000 milliseconds)
setInterval(autoScrollReviews, 5000);
