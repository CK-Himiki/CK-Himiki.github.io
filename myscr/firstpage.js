const m = document.querySelector('#menu-nawbar');
const bl = document.querySelector('#button-list');
const tb = document.querySelector('#tbl-bd');
function SetUsername(){
     /* ЗАПРОС В БАЗУ*/
     if (regis){
        document.querySelector('.username').textContent = 'Имя пользователя';
        TblFilling();
    }
    else
    {
        let tmp =document.getElementsByClassName('reg-onl');

        for (let i=0;i<tmp.length;i++) {
            console.log(tmp[i]);
            tmp[i].remove();
        }
        
        document.querySelector('.username').textContent = 'Гостевой режим';
        
    }
    let h = document.documentElement.offsetHeight;
    h-=  document.querySelector('.content').offsetHeight + document.querySelector('.footer').offsetHeight;
    console.log(h);
    document.querySelector('.footer').style['margin-top'] = h+"px";
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

async function TblFilling(){
    let html = "";
    let em=false;
    /* ЗАПРОС В БАЗУ*/
    if (em){
        let p = "AAAAAAAAAAAA"
        for(let i=0;i<4;i++){
            html+="<tr>";
            for(let j=0;j<5;j++){
                html+='<td data-toggle="tooltip" title="'
                html+= p+'">';
                html+=  p
                html+= '</td>';
            }
            html+="</tr>";
        }
        tb.emp='0';
    }
    else{
        let p = "<br>"
        for(let i=0;i<4;i++){
            html+="<tr>";
            for(let j=0;j<5;j++){
                html+='<td>'
                html+=  p
                html+= '</td>';
            }
            html+="</tr>";
        }
        em=false;
    }
    tb.innerHTML = html;
} 

let regis = true;
SetUsername();