import Auth from '../utils/auth'
const host = 'http://localhost:5000/'

async function register (username, email, password) {
  const res = await window.fetch(host + 'auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })

  return res.json()
}

async function login (email, password) {
  const res = await window.fetch(host + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  return res.json()
}

async function fetchStats () {
  const res = await window.fetch(host + 'stats')
  return res.json()
}

async function fetchProducts () {
  const res = await window.fetch(host + 'pizza/all')
  return res.json()
}
  
async function createProduct (data) {
  const res = await window.fetch(host + 'pizza/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function editProduct (id, data) {
  const res = await window.fetch(host + `pizza/edit/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function deleteProduct (id) {
  const res = await window.fetch(host + `pizza/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function createReview (id, data) {
  const res = await window.fetch(host + `pizza/review/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function likeProduct (id) {
  const res = await window.fetch(host + `pizza/like/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function unlikeProduct (id) {
  const res = await window.fetch(host + `pizza/unlike/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function submitOrder (data) {
  const res = await window.fetch(host + 'orders/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function fetchUserOrders () {
  const res = await window.fetch(host + 'orders/user', {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return res.json()
}

async function fetchPendingOrders () {
  const res = await window.fetch(host + 'orders/pending', {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return res.json()
}

async function approveOrder (id) {
  const res = await window.fetch(host + `orders/approve/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}


async function fetchEmployees() {
  const res = await window.fetch(host + "employee/all");
  return res.json();
}

async function createEmployee(data) {
  const res = await window.fetch(host + "employee/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + Auth.getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function editEmployee(id, data) {
  const res = await window.fetch(host + `employee/edit/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + Auth.getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function deleteEmployee(id) {
  const res = await window.fetch(host + `employee/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "bearer " + Auth.getToken(),
    },
  });

  return res.json();
}

async function sendEmail (email,message) {
  await window.fetch(host + `contactus?from=${email}&message=${message}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  .catch((error) => {
    console.error(error)
})
}

async function approveEmail (to,id,price) {
  await window.fetch(host + `admin/orders/pending?to=${to}&id=${id}&price=${price}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  .catch((error) => {
    console.error(error)
})
}

export {
  register,
  login,
  fetchProducts,
  createProduct,
  editProduct,
  deleteProduct,
  fetchStats,
  createReview,
  likeProduct,
  unlikeProduct,
  submitOrder,
  fetchUserOrders,
  fetchPendingOrders,
  approveOrder,
  fetchEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
  sendEmail,
  approveEmail
}
