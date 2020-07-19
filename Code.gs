  // var groupName = 'YourGroupName'    //remove comment if required

function onFormSubmit() {
  
  var ss= SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getActiveSheet();  
  var lastRow = sheet.getLastRow(); 
  
  var  B = sheet.getRange(lastRow, 2, 1, 1).getValue();   //Column having First Name
  var  C = sheet.getRange(lastRow, 3, 1, 1).getValue();   //Column having Last Name
  var  D = sheet.getRange(lastRow, 4, 1, 1).getValue();   //Column having Email 
  var  E = sheet.getRange(lastRow, 5, 1, 1).getValue();   //Column having Address 
  var  F = sheet.getRange(lastRow, 6, 1, 1).getValue();   //Column having Phone number 
  var  G = sheet.getRange(lastRow, 7, 1, 1).getValue();   //Column having Comments 
    
  var contacts = ContactsApp.createContact(B, C, D);  
  
  var address = contacts.addAddress(ContactsApp.Field.HOME_ADDRESS,E);
  var phone = contacts.addPhone(ContactsApp.Field.MOBILE_PHONE, F);
  var notes = contacts.setNotes(G); 
  
  // Remove the comment if Group feature is required

  /*
  var group = ContactsApp.getContactGroup(groupName);
  var id = group.getId();
  if(!id){
    
    var group = ContactsApp.createContactGroup(groupName);
    
  }
  var addedToGroup = contacts.addToGroup(group);      
  
  */
}
