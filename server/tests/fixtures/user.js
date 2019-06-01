// Register
export const validRegisterFixture = [
    {
        email: 'iknagod@gmail.com',
        firstname: 'Ikenna',
        lastname: 'James',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },
    {
        email: 'processenv@gmail.com',
        firstname: 'Process',
        lastname: 'Talktrue',
        password: 'jamespass',
        address: '15, onikolobo street, GRA, Abeokuta'
    },
    {
      email: 'admin@gmail.com',
      firstname: 'Process',
      lastname: 'Talktrue',
      password: 'adminpass',
      address: '15, onikolobo street, GRA, Abeokuta',
      isAdmin: true
    }
];

export const inValidRegisterFixture = [
    // undefined email 0
    {
        firstname: 'John',
        lastname: 'James',
        password: 'jamespass',
        address: 'jamespass'
    },
    
    // spaced email 1
    {
      email: 'jja mes@gmail.com',
      firstname: 'John',
      lastname: 'James',
      password: 'jamespass',
      address: '12, joriondo street, Lagos'
    },

    // invalid email format 2
    {
      email: 'jjamesgmail.com',
      firstname: 'John',
      lastname: 'James',
      password: 'jamespass',
      address: '23, rondle avenue, Lagos'
    },
    // Existing email 3
    {
      email: 'iknagod@gmail.com',
      firstname: 'John',
      lastname: 'James',
      password: 'jamespass',
      address: '23, randle street, Lagos'
    },

    // Firstname
    // undefined firstname 4
    {
        email: 'babnla@gmail.com',
        lastname: 'James',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },
    // spaced firstname 5
    {
        email: 'donbabj@gmail.com',
        firstname: 'Ike nna',
        lastname: 'James',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },
    // short firstname length 6
    {
        email: 'iknababa@gmail.com',
        firstname: 'I',
        lastname: 'James',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },

    // lastname
    // undefined lastname 7
    {
        email: 'jekyll@gmail.com',
        firstname: 'Ikenna',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },
    // lastname space 8
    {
        email: 'jacintha@gmail.com',
        firstname: 'Ikenna',
        lastname: 'Jam es',
        password: 'jamespass',
        address: '14 ketu street,Lagos'
    },
    
    // Password
    // undefined password 9
    {
        email: 'iknagod@gmail.com',
        firstname: 'Ikenna',
        lastname: 'James',
        address: '14 ketu street,Lagos'
    },
    // short password 10
    {
        email: 'seller@gmail.com',
        firstname: 'Ikenna',
        lastname: 'James',
        password: 'js',
        address: '14 ketu street,Lagos'
    },
    // address
    // undefined address 11
    {
        email: 'iknagod@gmail.com',
        firstname: 'Ikenna',
        lastname: 'James',
        password: 'Kembewoi'
    }
];

// Login
export const inValidLoginFixture = [
    // no email/empty email 0
    {
      password: 'jamiejesss'
    },
  
    // email not found in the db 1
    {
      email: 'jossyoloye@gmail.com',
      password: 'jossyboy'
    },
  
    // no password/empty password 2
    {
      email: 'iknagod@gmail.com'
    },
    // password not in db 3
    {
      email: 'iknagod@gmail.com',
      password: 'lasiselenu'
    }
  ];
  