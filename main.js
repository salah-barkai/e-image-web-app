const page_connexion = document.querySelector('.contenaire-formulaire'); 
const pseudo = document.querySelector(".Pseudo"); // Utilisez querySelector si vous avez un seul élément avec cette classe
const password_connexion = document.querySelector('.password'); // Utilisez querySelector si vous avez un seul élément avec cette classe
const btn_connexion = document.querySelector('.btn_connection'); // Utilisez querySelector car il ne semble y avoir qu'un seul élément avec cette classe
const form_connexion = document.querySelector(".formulaire"); // Utilisez querySelector car il ne semble y avoir qu'un seul élément avec cette classe
const btn_inscription =document.querySelector('.btn_inscription');
const dashbord = document.querySelector('.dashbord');
const btn_dashbord = document.querySelector('#btn_dash');
const btn_emploi = document.querySelector('.emploi_text');
const affiche_emploi = document.querySelector('.emploi_dashbord');
const petit_dashbord = document.querySelector('.main');
const btnemploi_menu_dash = document.querySelector('.emploi');
const note_affiche = document.querySelector('.note_dashbord');
const btnnote_main_dash = document.querySelector('.etudiant_text');
const btnnote_menu_dash=document.querySelector('.notes');
const emploi_fc1 = document.querySelector('#emploi_fc1');
const btn_fc1= document.querySelector('#btn_fc1');
const fc2 = document.querySelector('#emploi_fc2');
const btn_fc2= document.querySelector('#btn_fc2');
const lp = document.querySelector('#emploi_lp');
const btn_lp= document.querySelector('#btn_lp');
const sri1 = document.querySelector('#emploi_sri1');
const btn_sri1= document.querySelector('#btn_sri1');
const sri2 = document.querySelector('#emploi_sri2');
const btn_sri2= document.querySelector('#btn_sri2');
const btn_notefc1= document.querySelector('#btn_notefc1');
const note_fc1 = document.querySelector('#note_fc1');
const btn_notefc2= document.querySelector('#btn_notefc2');
const note_fc2 = document.querySelector('#note_fc2');
const btn_notelp= document.querySelector('#btn_notelp');
const note_lp= document.querySelector('#note_lp');
const note_sri1= document.querySelector('#note_sri1');
const btn_notesri1=document.querySelector('#btn_notesri1');
const note_sri2=document.querySelector('#note_SRI2');
const btn_notesri2=document.querySelector('#btn_notesri2');
const btn_message= document.querySelector('.message_text');
const message = document.querySelector('#envoyer_message');
const btn_message_dashbord=document.querySelector('#contacter');


function page_change(){
    form_connexion.addEventListener('submit', (event) => {
        event.preventDefault();
        if (pseudo.value==='salah' && password_connexion.value === "12345"){
            page_connexion.style.display = 'none';
            dashbord.style.display ='block';
        };
    });
};

function envoyer_message_dash(){
    btn_message_dashbord.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='block';
    });
};

function envoyer_message(){
    btn_message.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='block';
    });
};



function afficher_notefc1(){
    btn_notefc1.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="block";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};
function afficher_notefc2(){
    btn_notefc2.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="block";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};

function afficher_notelp(){
    btn_notelp.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="block";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};

function afficher_notesri1(){
    btn_notesri1.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='block';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};

function afficher_notesri2(){
    btn_notesri2.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='block';
        message.style.display='none';
    });
};


function afficher_emploi_fc1(){
    btn_fc1.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='block';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};

function afficher_emploi_fc2(){
    btn_fc2.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='block';
        lp.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
    });
};

function afficher_emploi_lp(){
    btn_lp.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='block';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
        
    });
};

function afficher_emploi_sri1(){
    btn_sri1.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='block';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
        
    });
};
function afficher_emploi_sri2(){
    btn_sri2.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='none';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri2.style.display='block';
        sri1.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
        
    });
};

function afficher_note(){
   btnnote_main_dash.addEventListener('click', ()=>{
        petit_dashbord.style.display='none';
        note_affiche.style.display='block';  
        affiche_emploi.style.display= 'none';
        emploi_fc1.style.display='none';
        lp.style.display='none';
        fc2.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display="none";
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    })
};

function affichermenu_note(){
    btnnote_menu_dash.addEventListener('click', ()=>{
         petit_dashbord.style.display='none';
         note_affiche.style.display='block';  
         affiche_emploi.style.display= 'none';
         emploi_fc1.style.display='none';
         fc2.style.display='none';
         lp.style.display='none';
         sri1.style.display='none';
         sri2.style.display='none';
         note_fc1.style.display="none";
         note_fc2.style.display="none";
         note_lp.style.display="none";
         note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
     })
 };

function afficher_emploi_menu(){
    btnemploi_menu_dash.addEventListener('click', ()=>{
        petit_dashbord.style.display= 'none';
        affiche_emploi.style.display= 'block';
        note_affiche.style.display='none'; 
        emploi_fc1.style.display='none';
        fc2.style.display='none'; 
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display='none';
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    });
};
function afficher_emploi(){
    btn_emploi.addEventListener('click', () =>{
        petit_dashbord.style.display= 'none';
        affiche_emploi.style.display= 'block';
        note_affiche.style.display='none';  
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display='none';
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    })
};
 
function afficher_dashbord (){
    btn_dashbord.addEventListener('click', ()=>{
        petit_dashbord.style.display ='block';
        affiche_emploi.style.display= 'none';
        note_affiche.style.display='none';  
        emploi_fc1.style.display='none';
        fc2.style.display='none';
        lp.style.display='none';
        sri1.style.display='none';
        sri2.style.display='none';
        note_fc1.style.display="none";
        note_fc2.style.display="none";
        note_lp.style.display='none';
        note_sri1.style.display='none';
        note_sri2.style.display='none';
        message.style.display='none';
    })
};

function afficher_page_inscription(){
     btn_inscription.addEventListener('click', ()=>{
        page_connexion.style.display = 'none';
        page_inscription.style.display= 'block';
        const nom = document.querySelector('.nom');
        const prenom = document.querySelector('.prenom');
        const password = document.querySelector('.password_inscription');
        const confirmation = document.querySelector('.confirmation_inscription');
        
        nom =nom.value;
        prenom= prenom.value;
        password= password.value;
        confirmation =confirmation.value;

        if (true){
            alert('Inscription confirmé..!');
        }
        else{
            alert('veuillez remplir les champs....!');
        };
        
     });
};

page_change();
afficher_page_inscription();
afficher_dashbord();
afficher_emploi();
afficher_emploi_menu();
afficher_note();
affichermenu_note();
afficher_emploi_fc1();
afficher_emploi_fc2();
afficher_emploi_lp();
afficher_emploi_sri1();
afficher_emploi_sri2();
afficher_notefc1();
afficher_notefc2();
afficher_notelp();
afficher_notesri1();
afficher_notesri2();
envoyer_message();
envoyer_message_dash();