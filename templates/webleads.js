const WebLead = data => {
return `<prospect status="new"><id sequence="1" source="GroMarketing"></id><requestdate>2019-12-03T18:17:03-0500</requestdate><vehicle interest="buy" status="used"><id></id><year></year><make></make><model></model><vin></vin><stock></stock><odometer></odometer><price type="quote" currency="USD"></price><finance><method></method><amount /></finance></vehicle><customer><contact><name part="first" type="individual">${data.name}</name><name part="last" type="individual">${data.name}</name><email preferredcontact="1">${data.email}</email><phone type="voice" time="nopreference" preferredcontact="0">${data.phone}</phone><address><street line="1"></street><city></city><regioncode></regioncode><postalcode></postalcode><country>US</country></address></contact><timeframe><description>Preferred Appointment TimeSelect Date: ${data.date}Select Time: 13:00:00</description></timeframe><comments>Test Drive Appointment on ${data.time}</comments></customer><vendor><vendorname></vendorname><contact><address><street line="1"></street><city></city><regioncode></regioncode><postalcode></postalcode><country>US</country></address></contact></vendor><provider><id sequence="1" source="GroMarketing"></id><name part="full" type="business">GroMarketing</name><service></service><url></url><email preferredcontact="1"></email><phone type="voice" time="nopreference" preferredcontact="0"></phone><contact><name part="full" type="business"></name><email preferredcontact="1"></email><phone type="voice" time="nopreference" preferredcontact="0"></phone><address><street line="1"></street><city></city><regioncode></regioncode><postalcode></postalcode><country>US</country></address></contact></provider></prospect>`;
};

module.exports = { WebLead };