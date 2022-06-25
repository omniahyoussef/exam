
//varrbile
let MovesData ='';
let disPlay = document.getElementById('display');
let moviesDisc = document.getElementById('allMovies');
let moviesName = document.getElementById('word');
let Divs = ``;
let SearchDivs =``;


//call function 

DisplayData();



moviesName.addEventListener('keyup', function(){
  searchName(getData());
})


//Search function 

async function searchName(resultsData){
  MovesData = await resultsData;
for(i=0; i< MovesData.length; i++){
 
  if (MovesData[i].title.toLowerCase().includes(moviesName.value.toLowerCase()) ) {
    SearchDivs += `
    <div class=" col-md-4  mb-3">
    <div class="item position-relative overflow-hidden">
      <img src="https://image.tmdb.org/t/p/w500/${MovesData[i].poster_path} " class="w-100 rounded-1"  alt="">
      <div class= "layer rounded-1 text-center  text-dark  position-absolute bottom-0  overflow-hidden">
        <div class="content-text position-relative translate-middle-y top-50">
          <h2>${MovesData[i].title}</h2>
          <p>${MovesData[i].overview}</p>
          <p>rate: 7</p>
          <p>${MovesData[i].release_date}</p>
        </div>

      </div>
    </div>



  </div>
    
    `
  } 
}

disPlay.innerHTML= SearchDivs;
hover();

}


//item hover
function hover(){
  $('.item').mouseenter(function(e){
    let x=e.currentTarget.children[1]
     
     x.classList.add('h-100')
   })
   $('.layer').mouseleave(function(){
     $('.layer').removeClass('h-100')
   })
   //nav bar li color 
   $('.nav-category').addClass('text-white');
   //nav bar li hover
   $('.nav-category').mouseenter(function(){
    $(this).addClass('text-danger');
    $(this).removeClass('text-white');
   })
   $('.nav-category').mouseleave(function(e){
    let x= e.target;
    x.classList.remove('text-danger');
    x.classList.add('text-white');
   })
}



// sid bar event 

$('#sBtn').click(function(e){
 

  if($('.demo').offset().left > 0){
    $('.demo').css({
      left:0,
    })
  }else{
    $('.demo').css({
      left:$('.offcanvas-body').outerWidth(),
    })
  }


});

///get data 
async function getData(){
  let info = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
  let data = await info.json();
  resultsData = data.results

  return resultsData;

};

//Display data 

async function DisplayData(){
  let MovesData= await  getData();
 


  for( i=0 ; i< MovesData.length ;i++){
   
   let title;
  if (MovesData[i].title == undefined) {
    title = MovesData[i].name;

  } else {
    title= MovesData[i].title

  }
  
    Divs += `
    
    
    <div class=" col-md-4  mb-3">
    <div class="item position-relative overflow-hidden">
      <img src="https://image.tmdb.org/t/p/w500/${MovesData[i].poster_path} " class="w-100 rounded-1"  alt="">
      <div class= "layer rounded-1 text-center  text-dark  position-absolute bottom-0  overflow-hidden">
        <div class="content-text position-relative translate-middle-y top-50">
          <h2>${title}</h2>
          <p>${MovesData[i].overview}</p>
          <p>rate: 7</p>
          <p>${MovesData[i].release_date}</p>
        </div>

      </div>
    </div>



  </div>
    
    
    
    
    
  
    `
  }
  disPlay.innerHTML= Divs;
 
  hover();
};





///validtion
let userName = document.getElementById('name');
let userNamealert = document.getElementById('namealert');
let userEmail = document.getElementById('email');
let userEmailalert = document.getElementById('emailalert');
let userPhone = document.getElementById('phone');
let userPhonealert = document.getElementById('phonealert');
let userAdg = document.getElementById('age');
let userPass = document.getElementById('password');
let userPassalert = document.getElementById('passwordalert');
let userRePass = document.getElementById('rePassword');
let userRePassalert = document.getElementById('repasswordalert');
let SubBtn = document.getElementById('subBtn');
let SubDone = document.getElementById('subDone');
let alertDanger = $('.alert-danger');
  let Nregx =  /^[A-Z]{0,1}[a-z]{1,10}$/;
  let emaRegx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let phonRegx =/^[01][2|0|1|5][0-9]{9}$/;
  let passRegx =/^[a-z]{8,}[0-9]{0,1}$/;
///name

function nameValid(){
  if (Nregx.test(userName.value ) && userName != '') {
    userNamealert.classList.add('d-none');
    SubBtn.removeAttribute('disabled', '')


    return true
    
  } else {
   userNamealert.classList.remove('d-none');
   SubBtn.setAttribute('disabled', '', '');

   return false; 
    
  }
};

userName.addEventListener('blur',function(){

  nameValid();

});


//email
function emailValid(){
  if (emaRegx.test(userEmail.value)&& userEmail!='') {
    userEmailalert.classList.add('d-none');
    SubBtn.removeAttribute('disabled', '')

    return true
  } else {
   userEmailalert.classList.remove('d-none');
   SubBtn.setAttribute('disabled', '');

   return false; 
    
  }
};
userEmail.addEventListener('blur',function(){

  emailValid();

});
//phone 
function phoneValid(){
  if (phonRegx.test(userPhone.value) && userPhone!='') {
    userPhonealert.classList.add('d-none');
    SubBtn.removeAttribute('disabled', '')

    return true
  } else {
   userPhonealert.classList.remove('d-none');
   SubBtn.setAttribute('disabled', '');

   return false; 
    
  }
};
userPhone.addEventListener('blur',function(){

  phoneValid();

});
///password
function passValid(){
  if (passRegx.test(userPass.value) &&  userPass!= '') {
    userPassalert.classList.add('d-none');
    SubBtn.removeAttribute('disabled', '');

    return true
  } else {
   userPassalert.classList.remove('d-none');
   SubBtn.setAttribute('disabled', '');

   return false; 
    
  }
};
userPass.addEventListener('blur',function(){

  passValid();

});
///repassword
function repassValid(){
  if ( userPass.value == userRePass.value && userRePass!='') {
    userRePassalert.classList.add('d-none');
    SubBtn.removeAttribute('disabled', '')

    return true
  } else {
   userRePassalert.classList.remove('d-none');
   SubBtn.setAttribute('disabled', '');

   return false; 
    
  }
};
userRePass.addEventListener('blur',function(){
  repassValid();

});







SubBtn.addEventListener('click', function(){
  console.log(nameValid() && emailValid() && phoneValid() && passValid() && repassValid())
  if(nameValid() && emailValid() && phoneValid() && passValid() && repassValid()){
    SubDone.classList.remove('d-none');
    SubBtn.removeAttribute('disabled', '')
  }else{
    SubBtn.setAttribute('disabled', '');
    $('subrong').removeClass('d-none');
  
  }
})
