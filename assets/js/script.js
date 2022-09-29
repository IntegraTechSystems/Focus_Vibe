var titleSocial = document.getElementById('divSocialTitle');
var titleCultural = document.getElementById('divCulturalTitle');
var titleMental = document.getElementById('divMentalTitle');

window.addEventListener('scroll', function(){
    var header = document.querySelector(".navbar");
    var scrollTop = window.innerHeight/3;
    let titleS= titleSocial.getBoundingClientRect().top;
    console.log('title: '+titleS);
    
    let titleC= titleCultural.getBoundingClientRect().top;
   
    let titleM= titleMental.getBoundingClientRect().top;
   

    header.classList.toggle("abajo", window.scrollY>0);

    if(titleS < 530){
        socialAnimation();
    }
   
    if(titleC < 530){
        culturalAnimation();
    }

    if(titleM <500){
        mentalAnimation();
    }
})

function words_animate_add(words){
    document.getElementById(words).classList.add('div-title-revers');
}

function words_animate_remove(words){
    document.getElementById(words).classList.remove('div-title-revers');
}

function titleAnimation(){
    document.getElementById('title_one').classList.add('div-title-revers');
    setTimeout(function(){words_animate_add('title_two')}, 200);
    setTimeout(function(){words_animate_add('title_three')}, 400);
    setTimeout(function(){words_animate_add('title_four')}, 600);
    setTimeout(function(){words_animate_add('title_five')}, 800);
    setTimeout(function(){words_animate_add('title_six')}, 1000);
    setTimeout(function(){words_animate_add('title_seven')}, 1200);
    setTimeout(function(){words_animate_add('title_eigth')}, 1400);
    setTimeout(function(){words_animate_add('title_nine')}, 1600);

}

setTimeout(titleAnimation, 1000)


/////funcion social


function socialAnimation(){
    document.getElementById('social_one').classList.add('div-title-revers');
    setTimeout(function(){words_animate_add('social_two')}, 200);
    setTimeout(function(){words_animate_add('social_three')}, 400);
    setTimeout(function(){words_animate_add('social_four')}, 600);
    setTimeout(function(){words_animate_add('social_five')}, 800);
    setTimeout(function(){words_animate_add('social_six')}, 1000);
    setTimeout(function(){words_animate_add('social_seven')}, 1200);
    setTimeout(function(){words_animate_add('social_eigth')}, 1400);
}



//////cultural function


function culturalAnimation(){
    document.getElementById('cultural_one').classList.add('div-title-revers');
    setTimeout(function(){words_animate_add('cultural_two')}, 200);
    setTimeout(function(){words_animate_add('cultural_three')}, 400);
    setTimeout(function(){words_animate_add('cultural_four')}, 600);
    setTimeout(function(){words_animate_add('cultural_five')}, 800);
    setTimeout(function(){words_animate_add('cultural_six')}, 1000);
    setTimeout(function(){words_animate_add('cultural_seven')}, 1200);
    setTimeout(function(){words_animate_add('cultural_eigth')}, 1400);
}

// setTimeout(culturalAnimation, 1000)

///////mental function


function mentalAnimation(){
    document.getElementById('mental_one').classList.add('div-title-revers');
    setTimeout(function(){words_animate_add('mental_two')}, 200);
    setTimeout(function(){words_animate_add('mental_three')}, 400);
    setTimeout(function(){words_animate_add('mental_four')}, 600);
    setTimeout(function(){words_animate_add('mental_five')}, 800);
    setTimeout(function(){words_animate_add('mental_six')}, 1000);
    setTimeout(function(){words_animate_add('mental_seven')}, 1200);
    setTimeout(function(){words_animate_add('mental_eigth')}, 1400);
}
function modal_content(title, content){
    let bodyModal=document.getElementById('modal_body');
    let headerModal=document.getElementById('modal_header');
    bodyModal.innerText= content;
    headerModal.innerHTML= title;

}

const information =[{
    title: 'EMBARAZOS NO DESEADOS',
    content:`Para nadie es un secreto que
    esta es una gran problemática en latinoamerica ya que
    muchas adolescentes quedan embarazadas a temprana
    edad y se le ejerce presión por tenerlo y amarlo.`,
},
{
    title: 'CONSUMO DE ALCOHOL Y DROGAS',
    content:` Esto se puede desatar
    por problemas sociales como los medios de comunicación
    ya que se ha comprobado que los medios de comunicación
    al promocionar este tipo de bebidas hacen que influya
    sobre las decisiones de los jóvenes, aunque toca tener en
    cuenta que una cosa es experimentar y otra muy diferente
    abusar de este tipo de bebidas. Cuando se abusa de este
    tipo de sustancias puede ser perjudicial para la salud.`,
},
{
    title: 'ACOSO SEXUAL',
    content:`Este es un problema grave ya que es algo
    cotidiano que hombre y mujeres se les ejerza acoso
    callejero aunque en mujeres es mas cotidiano a hombres
    también les suele pasar y es algo de mal gusto y que se ha
    marcado mucho en la sociedad.`,
},
{
    title: 'PRESION SOCIAL',
    content:`La presión social se ve mucho en la
    sociedad de hoy en día y mas en los adolescentes ya que las
    malas influencias ejercen presión social para que losadolescentes hagan algo que en realidad ellos no están de
    acuerdo pero por presión lo terminan haciendo .`,
}
]

console
function modal_open(){
    $('#modal_cards').modal('show'); 
}
// document.getElementById('btn_uno').addEventListener('click', );
// document.getElementById('btn_uno').click = function(){modal_content(information[0].bgimg,information[0].title, information[0].content)
// };
document.getElementById('btn_1').addEventListener('click',function(){
    modal_open()
    modal_content(information[0].title, information[0].content)
} );
document.getElementById('btn_2').addEventListener('click',function(){
    modal_open()
    modal_content(information[1].title, information[1].content)
} );
document.getElementById('btn_3').addEventListener('click',function(){
    modal_open()
    modal_content(information[2].title, information[2].content)
} );
document.getElementById('btn_4').addEventListener('click',function(){
    modal_open()
    modal_content(information[3].title, information[3].content)
} );
