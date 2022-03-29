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



        // function login(form){
        //     if (Users.includes(form.u.value)) {
        //         if (form.n.value=Accounts[Users.indexOf(form.u.value)].password) {
        //             location="principal.html";
        //         } else {
        //             alert("NIP Incorrecto");
        //         }
        //     } else {
        //         alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
        //         location="index2.html";
        //     }
        // }
                


        //sam
        function login(form){
            for(var i = 0 ; i < Accounts.length; i++){
              if(form.u.value = Accounts[i].name){
                if(form.n.value = Accounts[i].password){
                  location = "principal.html";
                } else{
                  alert("NIP Incorrecto");
                }
              } 
            }
            if(location != "principal.html"){
              alert("Usuario no encontrado. Favor de comunicarse al 5533445500");
              location="index2.html";
            }
          }