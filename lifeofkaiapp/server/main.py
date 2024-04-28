# from fastapi import FastAPI

# app = FastAPI()

# @app.post('/log')
# async def receive_log(message: str):
#     # Handle the received log message
#     print(f'Received log message: {message}')
#     # You can perform additional processing or logging here

#     # Return a response
#     return {'message': 'Log message received'}

from fastapi import FastAPI, File, UploadFile

app = FastAPI()

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    with open(file.filename, "wb") as f:
        f.write(contents)
    return {"filename": file.filename}
