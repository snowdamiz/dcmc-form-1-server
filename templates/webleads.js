const WebLead = data => {
  return `<prospect> <id sequence="01" source="Schedule Pop-up"></id> <requestdate></requestdate> <vehicle interest="buy" status="used"> <year></year> <make></make> <model></model> <stock>${data.productID}</stock> </vehicle> <customer> <contact> <name part="full">${data.name}</name> <email>${data.email}</email> <phone>${data.phone}</phone> </contact> <timeframe> <description>Preferred Appointment TimeSelect Date: ${data.date}Select Time: ${data.time}</description></timeframe><comments>Pick location: ${data.address}, Beverage: ${data.beverage}, Comments: ${data.comment}</comments> </customer> <vendor> <contact> <vendorname>DC Motors</vendorname> <email>sam@gromarketing.io</email> </contact> </vendor> <provider> <name part="full">Gro Marketing</name> <email>sam@gromarketing.io</email> <phone>503-841-3317</phone> </provider></prospect>`;
};

module.exports = { WebLead };
