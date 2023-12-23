from fastapi import FastAPI,UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from parser.png import PNG
from parser.pdfy import PDF_d
from pydantic import BaseModel
from fastapi.responses import FileResponse
UPLOAD_DIR = './parser/temp'
print(Path())
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def file_download(data,file_name):
    save_to = UPLOAD_DIR / file_name
    with open(save_to,'wb') as f:
        f.write(data)
    

async def file_upload(file_upload: UploadFile):
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    save_to = UPLOAD_DIR / file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)

@app.post('/upload_file/snils')
async def create_upload_file(file_upload: UploadFile):
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    file_download(data,file_upload.filename)

@app.post('/upload_file/auto')
async def create_upload_file(file_upload: UploadFile):
    #delete_files_in_temp()
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    file_download(data,file_upload)

@app.post('/upload_file/document')
async def create_upload_file(file_upload: UploadFile):
    #delete_files_in_temp()
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    save_to = UPLOAD_DIR + file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to)
    if data_type == 'pdf':
        PDF_d(save_to)
        return FileResponse(path='parser/temp/answer.pdf')
    elif data_type in ['png','jpg','jpeg']:
        pass

@app.get('/')
def download():
    return FileResponse(path='parser/temp/answer.pdf')