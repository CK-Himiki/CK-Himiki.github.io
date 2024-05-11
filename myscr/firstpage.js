const m = document.querySelector('#menu-nawbar');
const bl = document.querySelector('#button-list');
console.log(0, (bl.style.display));

function MenuOpen(){
   // const ab = document.querySelector('#list-act-button');
   console.log(0, bl.style.display);
   if ( bl.style.display == 'block') {
        console.log(1, bl.style.display);
        bl.style.display = '';
        m.style.background= 'rgba(255, 255, 255, 0.5)';
        console.log(2, bl.style.display);
        return;
    }
    if ( bl.style.display == '') {
        console.log(3, bl.style.display);
        bl.style.display = 'block';
        m.style.background= 'rgba(255, 255, 255, 0.7)';
        console.log(4, bl.style.display);
    return;
    }
    //ab.style.color = '#38b3e3';
}