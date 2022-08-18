# การ backup mongodb
- every Database
    ```
        mongodump --uri="mongodb://userbk:passbk@localhost:30000/?authSource=admin" --forceTableScan   --out ./backup1
    ```
    Keyword    | Define
    -----------|--------------------------------------------------------
    userbk     | root user of admin database.
    passbk     | root password of admin database.
    localhost  | domain of database exist.
    30000      | port of database expose.
    ./backup1  | path that you would like to store data from database.

- espectialy Database
    ```
        mongodump --uri="mongodb://userbk:passbk@localhost:30000/Music?authSource=admin&authMechanism=SCRAM-SHA-1" --forceTableScan   --out ./backup3
    ``` 
    Keyword    | Define                                                 
    -----------|--------------------------------------------------------
    userbk     | root user of admin database.                                     
    passbk     | root password of admin database.                              
    localhost  | domain of database exist.                                      
    30000      | port of database expose.                                  
    Music      | database that your would like to backup.                         
    ./backup3  | path that you would like to store data from database.  

# การใช้งาน backup     
- uri
    - ใส่ uri `BACKUP_URI` ใน file `.env`   
    ```
    BACKUP_URI="mongodb://userbk:passbk@localhost:30000/Music?authSource=admin&authMechanism=SCRAM-SHA-1"
    ```        
- Directory
    - ใส่ชื่อ `DIRECTORY` ใน file `backup.js` ใน 
    ```
    const DIRECTORY = "backup1"
    ```

# การ restore mongodb
- every Database
    ```
        mongorestore --nsInclude="Music"."Album" --uri="mongodb://userre:passre@localhost:30001/?authSource=admin" --drop ./backup3/Music/Album.bson
    ```
    Keyword    | Define                                                 
    -----------|--------------------------------------------------------
    Music      | Database name                                    
    Album      | Collection name                              
    userre     | root user of admin database.                                      
    passre     | root password of admin database.                                   
    localhost  | domain of database exist.                           
    30001      | port of database expose.  
    ./backup3/Music/Album.bson | path of store backup data to restore this database.

# การใช้งาน restore
- uri
    - ใส่ uri `RESTORE_URI` ใน file `.env`   
    ```
    RESTORE_URI="mongodb://userre:passre@localhost:30001/?authSource=admin"
    ```        
- RESTORE_DIRECTORY_PATH
    - ใส่ชื่อ `RESTORE_DIRECTORY_PATH` ใน file `restore.js` ใน 
    ```
    const RESTORE_DIRECTORY_PATH = "./backup3/Music"
    ```
     Keyword   | Define                                                 
    -----------|--------------------------------------------------------
    ./backup3  | Directory of store backup data to restore.
    Music      | Database directory when backup created.                  
- COLLECTION
    - ใส่ชื่อ `COLLECTION` ที่ต้องการ restore ใน file `restore.js` ใน 
    ```
    const COLLECTION = "Artist"
    ```