const main = document.querySelector(".main"); 
const catEmojis = ["🐱", "😺", "😸", "😹", "😻", "😼", "😽"];
const totalCats = 40;

const sizes = ['1rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem', '4rem'];

setTimeout(() => {
  for (let i = 0; i < totalCats; i++) {
    const cat = document.createElement("div");
    cat.className = "cat";
    cat.innerText = catEmojis[Math.floor(Math.random() * catEmojis.length)];

    cat.style.left = Math.random() * 80 + "vw";
    cat.style.top = Math.random() * 80 + "vh";
    cat.style.animationDuration = Math.random() * 5 + 6 + "s"; // Duration varies for each cat
    cat.style.animationDelay = "0s"; 

    cat.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];

    main.appendChild(cat);
  }
}, 50);
