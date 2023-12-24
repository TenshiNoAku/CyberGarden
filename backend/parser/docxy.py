import docx ,re,pymorphy3, parser.config as config
from faker import Faker
from docx.shared import Pt
import random,datetime,locale

def masked_name(first_name:str):
    fake = Faker("ru_RU")
    if (morph.parse(first_name.split()[0])[0].tag.gender == 'masc'):
        return fake.name_male()
    return fake.name_female()


def masking_data():
    inline = para.runs
    inline[0].text = para.text.replace(name.replace(',', '') ,masked_name(name.split()[0]))

def random_passport():
    return '{:02}'.format(random.randint(0,99)) + '{:02}'.format(random.randint(0,99)),'{:06}'.format(random.randint(000000,999999))

def formated_passport():
    return 'номер {} серия {}'.format(*random_passport())

def maseked_date(date):
    return (date + one_year_timedelta()).strftime("%d.%m.%Y")

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
            print(data)
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