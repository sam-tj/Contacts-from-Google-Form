function onFormSubmit() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var lastRow = sheet.getLastRow();

  var givenName = sheet.getRange(lastRow, 2, 1, 1).getValue(); //Column having First Name
  var familyName = sheet.getRange(lastRow, 3, 1, 1).getValue(); //Column having Last Name
  var email = sheet.getRange(lastRow, 4, 1, 1).getValue(); //Column having Email
  var address = sheet.getRange(lastRow, 5, 1, 1).getValue(); //Column having Address
  var phone = sheet.getRange(lastRow, 6, 1, 1).getValue(); //Column having Phone number
  var bibliography = sheet.getRange(lastRow, 7, 1, 1).getValue(); //Column having Comments

  var contactStructure = {
    names: [
      {
        givenName: givenName,
        familyName: familyName,
      },
    ],
    emailAddresses: [
      {
        //"type": "work",
        value: email,
      },
    ],
    phoneNumbers: [
      {
        //"type": "home",
        value: phone,
      },
    ],
    addresses: [
      {
        //"type": "home",
        formattedValue: address,
      },
    ],
    biographies: [
      {
        value: bibliography,
      },
    ],
  };
  
  createContact = People.People.createContact(contactStructure);
}
