
from pdf2image import convert_from_path
import pytesseract
import cv2,parser.config as config,re
import matplotlib.pyplot as plt
from PIL import Image

def find_subarray_index(arr, subarray):
    sub_len = len(subarray)
    for i in range(len(arr) - sub_len + 1):
        if arr[i:i+sub_len] == subarray:
            return i
    return -1


def page_mask(path):
    image = cv2.imread(path)
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
    out_img = cv2.imread(path)


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
    cv2.imwrite(path, out_img) 

def PDF_d(path):
    pdf_images = convert_from_path(path)
    files = []
    for idx in range(len(pdf_images)):
        path = 'parser/temp/pdf_page_'+ str(idx+1) +'.png'
        print(path)
        pdf_images[idx].save(path, 'PNG')
        files.append(path)
        page_mask(path)

    pdf_list_img = []

    for png_file_path in files:
        pdf_list_img.append(Image.open(png_file_path).convert('RGB'))
        
    pdf_list_img[0].save('parser/temp/answer.pdf',save_all=True,append_images=pdf_images)

    return 'temp/answer.pdf'
    
    