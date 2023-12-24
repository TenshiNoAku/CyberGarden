
from pdf2image import convert_from_path
import pytesseract
import cv2,parser.config as config,re
import matplotlib.pyplot as plt
from PIL import Image
from parser.png import PNG
def find_subarray_index(arr, subarray):
    sub_len = len(subarray)
    for i in range(len(arr) - sub_len + 1):
        if arr[i:i+sub_len] == subarray:
            return i
    return -1



def PDF(path):
    pdf_images = convert_from_path(path)
    files = []
    for idx in range(len(pdf_images)):
        path = 'parser/temp/pdf_page_'+ str(idx+1) +'.png'
        print(path)
        pdf_images[idx].save(path, 'PNG')
        files.append(path)
        PNG(path,False)

    pdf_list_img = []

    for png_file_path in files:
        pdf_list_img.append(Image.open(png_file_path).convert('RGB'))
        
    pdf_list_img[0].save('parser/temp/answer.pdf',save_all=True,append_images=pdf_images)

    return 'temp/answer.pdf'
    
    