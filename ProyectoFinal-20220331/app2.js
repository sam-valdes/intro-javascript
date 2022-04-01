//versión2

//Datos de las cuentas
const Accounts = [
    {
      name: 'Maria',
      password:'1111',
      balance: 520, 
    },
    {
      name: 'Paula',
      password: '2222',
      balance:'650',
    },
    {
      name: 'Ana',
      password: '3333',
      balance:380,
    },
    {
      name: 'Elena',
      password: '4444',
      balance:850,
    },
    {
      name: 'Lola',
      password: '5555',
      balance:520,
    }
  ];

  
let Users=[]
for(var i =0 ; i <Accounts.length; i++){
Users.push(Accounts[i].name)
}
let Passwords=[]
for(var i =0 ; i <Accounts.length; i++){
Passwords.push(Accounts[i].password)
}

let Bal=[]
for(var i =0 ; i <Accounts.length; i++){
Bal.push(Accounts[i].balance)
}


function createCookie(name, value, mnts) {
  var expires;
  if (mnts) {
      var date = new Date();
      date.setTime(date.getTime() + (mnts * 60 * 1000)); // getTime() returns miliseconds. casting into minutes
      expires = "; expires=" + date.toUTCString();
  }
  else {
      expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start, c_end));
      }
  }
  return "";
}

//f(x) sam

usuario="";
saldo=0;

function login(form){
  
  if (Users.includes(form.u.value)) {
      if (form.n.value==Accounts[Users.indexOf(form.u.value)].password) {
          location="main.html";
          usuario=form.u.value;
          saldo=Accounts[Users.indexOf(form.u.value)].balance;
          
          //alert('Bienvenido '+usuarioprint+' tu saldo es '+saldoprint)
          alert('Bienvenido '+usuario+' :)')

          //createCookie("ck_usuario", usuario, 10); //expires after 10 minutes
          //createCookie("ck_saldo", saldo.toString(), 10); //expires after 10 minutes

          sessionStorage.setItem('ck_usuario', usuario);
          sessionStorage.setItem('ck_saldo', saldo.toString());

      } else {
          alert("NIP Incorrecto");
      }
  } else {
      alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
      
      
  }
  //usuario='sam2';
  
}


//f(X) buena
// function login(form){
  
  
//   if (Users.includes(form.u.value)) {
//       if (form.n.value==Accounts[Users.indexOf(form.u.value)].password) {
//           location="main.html";
//           k=Users.indexOf(form.u.value)
//           usuario=form.u.value;
//           saldo=Accounts[Users.indexOf(form.u.value)].balance;
//           alert('Bienvenido '+usuario+' tu saldo es '+saldo)

//       } else {
//           alert("NIP Incorrecto");
//       }
//   } else {
//       alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
      
      
//   }
//   usuario='sam';
  
// }



        // function login(form){
        //     if (Users.includes(form.u.value)) {
        //         if (form.n.value==Accounts[Users.indexOf(form.u.value)].password) {
        //             alert('Bienvenido',form.u.value);
        //             location="main.html";
        //             usuario=form.u.value;
        //             saldo=Accounts[Users.indexOf(form.u.value)].balance;
                    

        //         } else {
        //             alert("NIP Incorrecto");
        //         }
        //     } else {
        //         alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
                
                
        //     }
        // }
          
        //Funciones para redireccionar a otras pantallas

function login_go(){
  location="login.html";
  
}

function withdraw_go(){
  location="withdraw.html"
}
function deposit_go(){
  location="deposit.html"
}

function inicio_go(){
  location="inicio.html"
}
function balance_go(){
  location="balance.html"
}

function main_go(){
  location="main.html"
}




function withdraw(form, limitMin = 10){
  let withdrawQ = form.w.value;
  let saldofinal = saldo;
  
  if (saldo>limitMin) {
      if (saldo-limitMin>=withdrawQ) {
          location="withdraw2.html";
          saldofinal=saldo-withdrawQ;
          //user1=form.u.value;
      } else {
          let atxt = "El saldo no es suficiente para realizar un retiro y mantener el saldo mínimo de $"+ limitMin+". Por favor intente con otra cantidad.";
          alert(atxt);
      }
  } else {
      alert("Lo sentimos, esta cuenta no tiene el saldo mínimo requerido para realizar retiros.");
      
      
  }
  saldo=saldofinal;
  sessionStorage.setItem('ck_saldo', saldo.toString());
  
}

//Función depósito


function deposit(form, limitMax = 990){
  let depositQ = Number(form.d.value);
  let saldofinal = saldo;
  
  if (saldo<limitMax) {
      if (saldo+depositQ <= limitMax) {
          saldofinal=saldo+depositQ;
          location="balance.html";
          
      } else {
        let atxt = "El depósito supera el monto máximo de $"+limitMax+" que puede tener una cuenta. Por favor intente con otra cantidad.";
          alert(atxt);
      }
  } else {
      alert("Lo sentimos, esta cuenta está en el saldo máximo permitido por lo que no se pueden realizar depósitos.");
      
      
  }
  saldo=saldofinal;
  sessionStorage.setItem('ck_saldo', saldo.toString());
  
}

//usuario = getCookie("ck_usuario");
//usuario = sessionStorage.getItem('ck_usuario');
//let objetivoUsuario = document.getElementById('usuarioprint');
//objetivoUsuario.innerHTML = usuario;

//saldo = Number(getCookie("ck_saldo"));
saldo = Number(sessionStorage.getItem('ck_saldo'));
let objetivoSaldo = document.getElementById('saldoprint');
objetivoSaldo.innerHTML = saldo;

// document.getElementById("usuarioprint").innerHTML = usuario;
// document.getElementById("saldoprint").innerHTML = saldo;