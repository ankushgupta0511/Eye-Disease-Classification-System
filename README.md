## Step 2: Create a Virtual Environment for Django
```
# Install virtualenv if not already installed

pip install virtualenv

# Create a virtual environment
virtualenv authenv

# Activate the virtual environment
# On Windows
authenv\Scripts\activate

# On macOS/Linux
source authenv/bin/activate
```


## Step 2: Install Backend Dependencies (Django)
```
# Navigate to your Django project directory
cd djangoAuthapi1

# Install all required packages from requirements.txt
pip install -r requirements.txt

# Run the Django development server to ensure setup is successful
python manage.py runserver

```

## Step 3: Set Up React Frontend
```

# Start the React development server
npm start

```
