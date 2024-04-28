from fastapi import FastAPI

app = FastAPI()

@app.post('/log')
async def receive_log(message: str):
    # Handle the received log message
    print(f'Received log message: {message}')
    # You can perform additional processing or logging here

    # Return a response
    return {'message': 'Log message received'}

