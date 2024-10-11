const main = document.querySelector(".main"); 
const catEmojis = ["🐱", "😺", "😸", "😹", "😻", "😼", "😽"];
const totalCats = 40;

const sizes = ['1rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem', '4rem'];

setTimeout(() => {
  for (let i = 0; i < totalCats; i++) {
    const cat = document.createElement("div");
    cat.className = "cat";
    cat.innerText = catEmojis[Math.floor(Math.random() * catEmojis.length)];

    // Random position - limit to 90vw
    cat.style.left = Math.random() * 80 + "vw"; // Changed from 100 to 90
    cat.style.top = Math.random() * 80 + "vh";
    cat.style.animationDuration = Math.random() * 5 + 6 + "s"; // Duration varies for each cat
    cat.style.animationDelay = "0s"; // Set delay to 0 for all cats

    // Assign random size from predefined categories
    cat.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];

    main.appendChild(cat);
  }
}, 50);
