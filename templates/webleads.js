const WebLead = data => {
  return `<prospect> <id sequence="01" source="Schedule Pop-up"></id> <requestdate></requestdate> <vehicle interest="buy" status="used"> <year>${data.year}</year> <make>${data.make}</make> <model>${data.model}</model> <stock>${data.stockNumber}</stock> </vehicle> <customer> <contact> <name part="full">${data.name}</name> <email>${data.email}</email> <phone>${data.phone}</phone> </contact> <timeframe> <description>Preferred Appointment TimeSelect Date: ${data.date}Select Time: ${data.time}</description></timeframe><comments>Customer Scheduled appointment on ${data.date} at ${data.time}</comments> </customer> <vendor> <contact> <vendorname>DC Motors</vendorname> <email>sam@gromarketing.io</email> </contact> </vendor> <provider> <name part="full">Gro Marketing</name> <email>sam@gromarketing.io</email> <phone>503-841-3317</phone> </provider></prospect>`;
};

module.exports = { WebLead };
