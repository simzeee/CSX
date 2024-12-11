let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ["Aaron", "Barbara", "Chris"];
  // Add code here
  setTimeout(() => callback(database[id]));
}

// Also add code here

const storeData = (data) => {
  dataReceived = data;
  console.log(dataReceived);
};

ajaxSimulate(1, storeData);
