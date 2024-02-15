// A mock function to mimic making an async request for data
export function fetchTransactions() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/transactions/");
    const data = await response.json();
     console.log(data)
    resolve({ data });
  });
}

export function postTransactions(transactionData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/transactions/", {
        method: "POST",
        body: JSON.stringify(transactionData),
        headers: { "content-type": "application/json" },
      });
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteTransactions(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8000/transactions/" + id, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      });
      // console.log(response);
      const data = await response.json();

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}