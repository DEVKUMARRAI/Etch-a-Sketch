const Grid=document.querySelector('.Grid')
const colors=document.querySelectorAll('.colors')
let Selected_color;
colors.forEach((col)=>{
    col.addEventListener('click',()=>{
       console.log(col.id)
    })
    })
for (let i = 0; i < 60; i++) {
    const grid = document.createElement('div');
    grid.style.border = '2px solid white';
    grid.style.height = 'auto';
    grid.style.flex = '1 1 8.33vw';
    grid.style.transition = 'all 0.35s linear';
    Grid.appendChild(grid);
    grid.addEventListener("mouseenter",()=>{
        grid.style.background= `${Selected_color}`;
    })
}

