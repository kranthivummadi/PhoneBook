# PhoneBook
Phone Book, added adding and searching functionality of the Phone Book

1)	Clone the code from git, Two folders are present one is UI and the other is services . A script file is present ( Sql Server ) simple script to create data base Run the above script , Services are developed in Dot net web Api . Created  a file  phoneBookController.cs  in Controllers folder.
2)	The above file contain methods Get (save new phone book details) and Post (to search a phone details based on user name or user phone number ). CORS has been enabled for this project in web.config file. I had used Entity Framework to interact with the database. Connectionstring :  PhonebookEntities in web.config file. In your machine replace data source = =(LocalDb)\MSSQLLocalDB with your machine name.
<add name="PhonebookEntities" 
<connectionStrings>
    <add name="DefaultConnection" connectionString="Data Source=(LocalDb)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\aspnet-ABSAServices-20190620125433.mdf;Initial Catalog=aspnet-ABSAServices-20190620125433;Integrated Security=True" providerName="System.Data.SqlClient" />

UI is developed in Angular 6 version
 Open the UI application in visual studio code and follow  below steps in the terminal  ( ctrl + tilde ) 
1)	Npm  install   :  creates  node_modules  folder
2)	Ng  serve  -o  :  run’s the application in the browser
Please feel free to contact me if you have any queries to run the application
kranthikirancse@gmail.com

