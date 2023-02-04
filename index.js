const starsE1= document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray =["red","orange","lightblue","lightgreen","green"];

updateRating(0);

starsE1.forEach((starE1, index) => {
    starE1.addEventListener("click",() => {
        updateRating(index)
    });
});

function updateRating(index){
    starsE1.forEach((starE1, idx)=>{
        if(idx< index+1){
            starE1.classList.add("active");
        }else{
            starE1.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    });
}