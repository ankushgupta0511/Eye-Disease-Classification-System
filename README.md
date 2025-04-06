Readme.md
#### Eye-Disease Classification System Project Setup
`Requirements:`<br>
- `8 GB RAM`<br>
- `Code Editor VSCode / Pycharm`<br>
- `Git CLI`<br>
- `Docker Desktop`<br>
- `Web Browser Chrome / Edge`<br>
- `python 3.12.4`<br>
  
### Note :
```
 djangoauthapi is a Backend Project
 medicinerecommendationsystem is a frontend Project
```

#### Clone the Project
```
git clone git@github.com:ankushgupta0511/Eye-Disease-Classification-System.git
```


#### Create virtual environment and install dependencies
- `Create environment`<br>
```
python -m virtualenv env
```

- `Activate environment`<br>
```
.\env\Scripts\activate
```

- `Install Dependencies`<br>
```
pip install -r requirements.txt
```


##### Setup Environment Variables in `.env` 
```

# django settings
DEBUG_MODE = TRUE
ALLOWED_HOSTS = 'localhost:8000 127.0.0.1:8000 *'
SECRET_KEY = ''


# Email configuration
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 587

```

##### Team Members
- [Ankush Gupta](https://github.com/ankushgupta0511/)
- [Chandan Banjara](https://github.com/ChandanBanjara/)
