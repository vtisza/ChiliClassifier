import os
from shutil import copyfile

filenames= os.listdir ("chili_pics/") # get all files' and folders' names in the current directory

for filename in filenames: # loop through all the files and folders
    if os.path.isdir(os.path.join(os.path.abspath("chili_pics/"), filename)): # check whether the current object is a folder or not
        pic_link= "chili_pics/"+filename+"/000001.jpg"
        destination = "src/thumbnails/"+filename+".jpg"
        copyfile(pic_link, destination)
        print(f"Coppied: {pic_link} to {destination}")
