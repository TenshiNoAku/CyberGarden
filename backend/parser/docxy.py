import docx ,re,pymorphy3, parser.config as config
from faker import Faker
from docx.shared import Pt
import random,datetime,locale

def masking_param(data,i):
    match i:
        case 0: return (data[0].replace(',', ''),"{} {} {}".format("*"*10,"*"*10,"*"*10,))
        case 1: return (data[0],"************")
        case 2: return (' '.join(data[0].split(' ')[3:]),"*******************")
        case 3: return (data[0], "номер {} серия {}".format("****","******"))
        case 4: return (data[0],"{}.{}.{}".format("**","**","****"))
        case _: return (data[0],"****************")


def masking(para):
    masking_rules = [config.regeX['fullname'],config.regeX['passport_given'],config.regeX['full_address'],config.regeX['passport'],config.regeX['date']]

    for i in range(len(masking_rules)):
        data = re.findall(masking_rules[i],para.text)
        if data:
            inline = para.runs[0]
            inline.text = inline.text.replace(*masking_param(data,i))
    return para.text

def one_year_timedelta():
    return datetime.timedelta(days=random.randint(-365,365))

def DOCX(file_path:str):
    doc = docx.Document(docx = file_path)
    paras = doc.paragraphs
    for para in paras:
        inline = para.runs
        inline[0].text = masking(para)
    doc.save('parser/temp/answer.docx') 


def masking(para):
    masking_rules = [config.regeX['fullname'],config.regeX['passport_given'],config.regeX['full_address'],config.regeX['passport'],config.regeX['date']]

    for i in range(len(masking_rules)):
        data = re.findall(masking_rules[i],para.text)
        
        if data:
            for i in data:
                inline = para.runs[0]
                inline.text = inline.text.replace(i,"****************")
    return para.text