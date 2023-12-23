
from pdf2image import convert_from_path
import pytesseract
import cv2,config,re
import matplotlib.pyplot as plt
from PIL import Image
pdf_images = convert_from_path('test.pdf')

for idx in range(len(pdf_images)):
    pdf_images[idx].save('pdf_page_'+ str(idx+1) +'.png', 'PNG')
print("Successfully converted PDF to images")

def find_subarray_index(arr, subarray):
    sub_len = len(subarray)
    for i in range(len(arr) - sub_len + 1):
        if arr[i:i+sub_len] == subarray:
            return i
    return -1

image = cv2.imread("pdf_page_1.png")
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
masking_coord = []
out_img = cv2.imread("pdf_page_1.png")


masking_rules = [config.regeX['fullname'],
                 config.regeX['passport_given'],
                 config.regeX['full_address'],
                 config.regeX['passport'],
                 config.regeX['date'],
                 config.regeX['data']]

for i in range(len(masking_rules)):
        data = re.findall(masking_rules[i],text_string)
        if data:
            for matches in data:
                match_arr = matches.split()
                if (i == 2):
                    match_arr = match_arr[3:]
                indx = find_subarray_index(text,match_arr)
                masking_coord.append(coord[indx:indx + len(match_arr)])

print(masking_coord)

for j in masking_coord:
    for i in j:
        cv2.rectangle(out_img,(i[2],i[0]),(i[2]+i[3],i[1]+i[0]),(0,0,0),-1)
cv2.imwrite('out_img.png', out_img) 