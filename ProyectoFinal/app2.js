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

  //subarrays
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


//f(x) sam

var saldo=520;
var usuario ;

function login(form,usuario,saldo){
  
  
  if (Users.includes(form.u.value)) {
      if (form.n.value==Accounts[Users.indexOf(form.u.value)].password) {
          location="main.html";
          k=Users.indexOf(form.u.value)
          user1=form.u.value;
          saldo=Accounts[Users.indexOf(form.u.value)].balance;
          alert('Bienvenido '+usuario+' tu saldo es '+saldo)

      } else {
          alert("NIP Incorrecto");
      }
  } else {
      alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
      
      
  }
  usuario=user1;
  
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


//print        

        let objetivo = document.getElementById('saldoprint');
        
        objetivo.innerHTML = (usuario); 
        let objetivo2 = document.getElementById('usuarioprint');
        objetivo2.innerHTML = Number(usuario); 


//Función retiro


function withdraw(form,withdrawQ,saldo){
  
  
  if (Number(saldo)>=10) {
      if (Number(saldo)-10>=withdrawQ) {
          location="withdraw2.html";
          saldofinal=saldo-wq
          user1=form.u.value;
      } else {
          alert("El saldo no es suficiente para realizar un retiro y mantener el saldo mínimo de 10. Por favor intente con otra cantidad.");
      }
  } else {
      alert("Lo sentimos, esta cuenta no tiene el saldo mínimo requerido para realizar retiros.");
      
      
  }
  saldo=saldofinal;
  
}

//Función depósito


function deposit(form,depositQ,saldo){
  
  
  if (Number(saldo)>=10) {
      if (Number(saldo)-10>=depositQ) {
          saldofinal=saldo+depositQ;
          location:"balance.html";
          
      } else {
          alert("El depósito supera el monto máximo de $990 que puede tener una cuenta. Por favor intente con otra cantidad.");
      }
  } else {
      alert("Lo sentimos, esta cuenta está en el saldo máximo permitido por lo que no se pueden realizar depósitos.");
      
      
  }
  saldo=saldofinal;
  
}