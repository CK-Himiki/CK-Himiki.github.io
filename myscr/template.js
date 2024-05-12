const m = document.querySelector('#menu-nawbar');
const bl = document.querySelector('#button-list');
function SetUsername(){
    document.querySelector('.username').textContent = 'Гостевой режим';

    
}
function MenuOpen(){
   // const ab = document.querySelector('#list-act-button');
   if ( bl.style.display == 'block') {
        console.log(1, bl.style.display);
        bl.style.display = '';
        m.style.background= 'rgba(255, 255, 255, 0.2)';
        return;
    }
   
    if ( bl.style.display == '') {
        console.log(3, bl.style.display);
        bl.style.display = 'block';
        m.style.background= 'rgba(255, 255, 255, 0.6)';
    return;
    }
    //ab.style.color = '#38b3e3';
}

SetUsername();