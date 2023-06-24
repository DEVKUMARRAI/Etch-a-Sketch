const Grid=document.querySelector('.Grid')
const colors=document.querySelectorAll('.colors')
const reset_button=document.querySelector('#reset');
let Selected_color;

colors.forEach((col)=>{
    col.addEventListener('click',()=>{
       let selected_div=document.querySelector(`#${col.id}`)
       let computed_style=window.getComputedStyle(selected_div);
       Selected_color=computed_style.backgroundColor;
    })
    })
for (let i = 0; i < 60; i++) {
    const grid = document.createElement('div');
    reset_button.addEventListener('click',()=>{
        for (let i = 0; i < 60; i++) {
            grid.style.background= 'black';
            Selected_color='black';
        }
    })
    grid.style.border = '2px solid white';
    grid.style.height = 'auto';
    grid.style.flex = '1 1 8.33vw';
    grid.style.transition = 'all 0.35s linear';
    Grid.appendChild(grid);
    grid.addEventListener("mouseenter",()=>{
        grid.style.background= `${Selected_color}`;
    })
}

