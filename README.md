# Contacts from Google Form

This file will help you to modify the script accrding to your requirements.
Further information  can be found at,
- https://developers.google.com/apps-script/reference/contacts
- https://developers.google.com/apps-script/reference/spreadsheet

For any changes and for request, please contact here.

### Permissions
The permissions are required as the scripts work as a 3rd party entity and for general user it is just a random code which might cause issues.
Here I am using Contacts and Spreadsheet commands and so 2 / 3 required permissions are required to be accepted.  The permission sare updated by Google and so might change from time to time.

### Process
The script is triggered when a form is submitted. It gets the values from the spreadshspreadsheet from the last row of the *active sheet *. These values are then saved as variables ( here as Column Names i.e. B, C, D). 

The function ***getRange(lastRow, 2, 1, 1).getValue()*** has the following parameters,
getRange( rowNumber , columnNumber , numberOfRowsToSelect , numberOfColumnsToSelect)

[Reference here](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangerow,-column,-numrows,-numcolumns)

Once all data is fetched, the contact creation function is called.

### Modifications 
Here the columns used, 

| Column Title  | Column Label   | Spreadsheet Label   |
| :------------: | :------------: | :------------: |
| First Name  | B  | 2  |
| Last Name  | C  | 3  |
| Email ID  | D  | 4  |

If Other columns are used, they have to be referred accordingly in the script.

### Addition of Group Feature 
To have a specific group for your form contacts, you can enable the grouping by un commenting the code where i'ts mentioned.
You can then enter your specfic group name as per requirement in *line 1*
