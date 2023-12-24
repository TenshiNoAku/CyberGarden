from fastapi import FastAPI,UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from parser.png import PNG, SNILS, AUTO
from parser.pdfy import PDF
from pydantic import BaseModel
from parser.docxy import DOCX
from parser.config import delete_files_in_temp
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


@app.post('/upload_file/snils')
async def create_upload_file(file_upload: UploadFile):
    delete_files_in_temp()
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    save_to = UPLOAD_DIR + file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    SNILS(save_to)
    return FileResponse('parser/temp/answer.png')

@app.post('/upload_file/auto')
async def create_upload_file(file_upload: UploadFile):
    delete_files_in_temp()
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    save_to = UPLOAD_DIR + file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    AUTO(save_to)
    return FileResponse('parser/temp/answer.png')

@app.post('/upload_file/document')
async def create_upload_file(file_upload: UploadFile):
    delete_files_in_temp()
    data_type = file_upload.filename.split('.')[1]
    data = await file_upload.read()
    save_to = UPLOAD_DIR + file_upload.filename
    with open(save_to,'wb') as f:
        f.write(data)
    print(save_to,data_type)
    if data_type == 'pdf':
        PDF(save_to)
        return FileResponse(path='parser/temp/answer.pdf')
    elif data_type in ['png','jpg','jpeg']:
        PNG(save_to)
        return FileResponse(path='parser/temp/answer.'+data_type)
    elif data_type in ['docx','doc']:
        DOCX(save_to)
        return FileResponse(path='parser/temp/answer.'+ data_type)

