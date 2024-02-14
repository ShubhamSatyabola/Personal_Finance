// function for logging user

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8000/users?email=" + email);
    const data = await response.json();

    // password verification as we dont have an legit backend right now

    if (data.length > 0) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Invalid Credentials" });
      }
    } else {
      reject({ message: "user not Found" });
    }
  });
}



export function logoutUser(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
