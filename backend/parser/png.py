import pytesseract
import cv2
import matplotlib.pyplot as plt
from PIL import Image
from pprint import pprint
from pydantic import BaseModel
import datetime
from faker import Faker
import locale
import random
import parser.config as config
import re

def SNILS(img: str):
    image = cv2.imread(img)
    img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)#Преобразовываем изображение в оттенки серого
    _, img_black_white = cv2.threshold(img_gray, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY_INV) #Преобразовываем изображение в черно-белое
    w,h = img_black_white.shape
    out_img = cv2.imread(img)


    cv2.rectangle(out_img,(round(0.6*w),round(0.37*h)),(round(1.2*w),round(h*0.42)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.27*w),round(0.258*h)),(round(0.76*w),round(h*0.37)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.3*w),round(0.53*h)),(round(0.7*w),round(h*0.6)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.36*w),round(0.23*h)),(round(0.95*w),round(h*0.28)),(0,0,0),-1)

    cv2.imwrite('parser/temp/answer.png',out_img)

def AUTO(img:str):
    image = cv2.imread(img)
    img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)#Преобразовываем изображение в оттенки серого
    _, img_black_white = cv2.threshold(img_gray, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY_INV) #Преобразовываем изображение в черно-белое
    w,h = img_black_white.shape
    out_img = cv2.imread(img)
    cv2.rectangle(out_img,(round(0.6*w),round(0.1*h)),(round(1.5*w),round(h*0.3)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.05*w),round(0.1*h)),(round(0.55*w),round(h*0.48)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.05*w),round(0.5*h)),(round(0.55*w),round(h*0.6)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.67*w),round(0.41*h)),(round(1.5*w),round(h*0.45)),(0,0,0),-1)
    cv2.imwrite('parser/temp/answer.png',out_img)
    
def find_subarray_index(arr, subarray):
    sub_len = len(subarray)
    for i in range(len(arr) - sub_len + 1):
        if arr[i:i+sub_len] == subarray:
            return i
    return -1

def PNG(img_path:str,b=True):
    image = cv2.imread(img_path)

    a = pytesseract.image_to_data(image,lang="rus",output_type=pytesseract.Output.DICT)
    coord = []
    text = []
    for i in range(len(a['text'])):
        if a['conf'][i] == -1:
            continue
        coord.append((a['top'][i],a['height'][i],a['left'][i],a['width'][i]))
        text.append(a['text'][i])

    for i in range(len(text)):
        text[i] = text[i].replace(',',"")
    
    text_string = ' '.join(text)
    print(text_string)
    masking_coord = []
    out_img = cv2.imread(img_path)
    print(len(config.regeX.values()))
    for i in range(len(config.regeX.values())):
            data = re.findall(list(config.regeX.values())[i],text_string)
            if data:
                for matches in data:
                    print(matches)
                    match_arr = matches.split()
                    indx = find_subarray_index(text,match_arr)
                    masking_coord.append(coord[indx:indx + len(match_arr)])
    for j in masking_coord:
        for i in j:
            cv2.rectangle(out_img,(i[2],i[0]),(i[2]+i[3],i[1]+i[0]),(0,0,0),-1)
    if b:
        cv2.imwrite('parser/temp/answer.png', out_img)
    else: 
        cv2.imwrite(img_path,out_img)