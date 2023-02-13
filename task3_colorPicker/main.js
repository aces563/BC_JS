const form = document.querySelector('form');

const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const colorInfo = document.querySelector('#color-info');

const directions = document.querySelectorAll('input[name="direction"]');

let dirValue;
const bgGenerator = () => {
    
    console.log(directions)

    for (const item of directions){
        if (item.checked){
            dirValue = item.value
            colorInfo.textContent = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`
        }

    }



    console.log('color one', color1.value);
    console.log('color two', color2.value);
    document.body.style.background = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`
}



form.addEventListener('change', bgGenerator);