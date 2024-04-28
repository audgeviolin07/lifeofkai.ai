
# from fastapi import FastAPI, File, UploadFile

# app = FastAPI()

# @app.post("/upload/")
# async def upload_file(file: UploadFile = File(...)):
#     contents = await file.read()
#     with open(file.filename, "wb") as f:
#         f.write(contents)
#     return {"filename": file.filename}

# import firebase_admin
# from firebase_admin import credentials, storage
# from fastapi import FastAPI, File, UploadFile
# from tempfile import NamedTemporaryFile
# import os

# app = FastAPI()

# # Initialize Firebase Admin SDK
# cred = credentials.Certificate("./firebase-adminsdk.json")
# firebase_admin.initialize_app(cred, {'storageBucket': 'gs://lifeofkaihackdavis2024.appspot.com'})

# @app.post("/upload/")
# async def upload_file(file: UploadFile = File(...)):
#     # Read the contents of the uploaded file
#     contents = await file.read()
    
#     # Write the file contents to a temporary file
#     with NamedTemporaryFile(delete=False) as temp_file:
#         temp_file.write(contents)
#         temp_file_path = temp_file.name
    
#     # Upload the temporary file to Firebase Storage
#     bucket = storage.bucket()
#     blob = bucket.blob(file.filename)
#     blob.upload_from_filename(temp_file_path)
    
#     # Get the public URL of the uploaded file
#     url = blob.public_url
    
#     # Delete the temporary file
#     os.remove(temp_file_path)
    
#     return {"filename": file.filename, "url": url}

# from fastapi import FastAPI, File, UploadFile
# from firebase_admin import credentials, storage
# import firebase_admin
# import base64

# app = FastAPI()

# # Initialize Firebase Admin SDK (make sure to replace 'path/to/firebase-adminsdk.json' with the path to your service account key file)
# cred = credentials.Certificate('./firebase-adminsdk.json')
# firebase_admin.initialize_app(cred, {'storageBucket': 'lifeofkaihackdavis2024.appspot.com'})
# from fastapi.middleware.cors import CORSMiddleware

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=['*'],  # Allow requests from all origins
#     allow_credentials=True,
#     allow_methods=["*"],  # Allow all HTTP methods
#     allow_headers=["*"],  # Allow all HTTP headers
# )

# @app.post("/upload/")
# async def upload_file(file: UploadFile = File(...)):
#     # Read the contents of the uploaded file
#     contents = await file.read()

#     # Decode the Base64-encoded image data
#     decoded_image_data = base64.b64decode(contents)

#     # Upload the image to Firebase Storage
#     bucket = storage.bucket()
#     blob = bucket.blob(file.filename)
#     blob.upload_from_string(decoded_image_data)

#     # Get the public URL of the uploaded image
#     url = blob.public_url

#     return {"filename": file.filename, "url": url}
import os
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from shutil import copyfile

app = FastAPI()

# Define the directory path for uploads
UPLOADS_DIR = "uploads"

# Create the uploads directory if it doesn't exist
os.makedirs(UPLOADS_DIR, exist_ok=True)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    # Save the uploaded file to the uploads directory
    with open(os.path.join(UPLOADS_DIR, file.filename), "wb") as f:
        f.write(await file.read())
    return {"filename": file.filename}

@app.get("/images/{filename}")
async def get_image(filename: str):
    # Return the image file as a response
    return FileResponse(os.path.join(UPLOADS_DIR, filename))
