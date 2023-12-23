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

locale.setlocale(locale.LC_TIME,"ru_RU.UTF-8")
def generate_SNILS_id():
    lst = [random.randint(0, 9) for i in range(9)]
    check_sum = sum(list(map(lambda x,i : x*i ,reversed(lst),range(1,len(lst)+1))))
    if check_sum > 101: check_sum %= 101
    if check_sum in [100,101]: check_sum = 0
    lst.append('{:02}'.format(check_sum))
    SNILS = '{}{}{}-{}{}{}-{}{}{} {}'.format(*lst)
    return SNILS
    

class UserSNILS(BaseModel):
    id: str
    sex: str
    city: str
    first_name: str
    middle_name : str
    last_name : str
    birthday: str
    registration: str

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

    cv2.imwrite('test.png',out_img)

def AUTO(img:str):
    image = cv2.imread(img)
    img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)#Преобразовываем изображение в оттенки серого
    _, img_black_white = cv2.threshold(img_gray, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY_INV) #Преобразовываем изображение в черно-белое
    w,h = img_black_white.shape
    out_img = cv2.imread(img)
    cv2.rectangle(out_img,(round(0.6*w),round(0.1*h)),(round(1.5*w),round(h*0.3)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.05*w),round(0.1*h)),(round(0.55*w),round(h*0.48)),(0,0,0),-1)
    cv2.rectangle(out_img,(round(0.05*w),round(0.5*h)),(round(0.55*w),round(h*0.6)),(0,0,0),-1)
    cv2.imwrite('test.png',out_img)

AUTO('auto.jpg')