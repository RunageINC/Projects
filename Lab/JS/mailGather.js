const getEmail = (input) => {
  const mail = input || "";

  const domain = mail.split("@")[1] || "";

  switch (domain) {
    case "pldt.com":
      return "PLDT";
    case "gcash.com":
      return "GCash";
    case "maya.ph":
      return "Maya";
    case "bpi.com.ph":
      return "BPI";
    case "meridianpay.com":
      return "Meridian";
    case "ucla.edu":
      return "HablaMexico"; // Testing Dan
    default:
      return "Unknown Partner";
  }
};

console.log(getEmail("arthurgomesdmc@Gmail.com"));
console.log(getEmail("dancool@ucla.edu"));
console.log(getEmail("someone@gcash.com"));
