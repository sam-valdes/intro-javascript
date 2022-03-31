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


//f(x) sam
var usuario='sam'
var saldo=1

        function login(form){
            if (Users.includes(form.u.value)) {
                if (form.n.value==Accounts[Users.indexOf(form.u.value)].password) {
                    location="main.html";
                    usuario=form.u.value;
                    saldo=Accounts[Users.indexOf(form.u.value)].balance;
                    alert('Bienvenido',usuario,'tu saldo es ',saldo)

                } else {
                    alert("NIP Incorrecto");
                }
            } else {
                alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
                
                
            }
        }
                
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


        

        let objetivo = document.getElementById('saldoprint');
        objetivo.innerHTML = Number(saldo); 
        let objetivo2 = document.getElementById('usuarioprint');
        objetivo2.innerHTML = Number(usuario); 

        // document.getElementById("usuarioprint").innerHTML = usuario;
        // document.getElementById("saldoprint").innerHTML = saldo;