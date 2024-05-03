# Python3 program to convert docx to pdf
# using docx2pdf module

# Import the convert method from the
# docx2pdf module
print("aaaaaaaaaaaaaa")
from docx2pdf import convert

# convert(r"C:\Users\EV\Desktop\Property\modified.docx", r"C:\Users\EV\Desktop\Property\output.pdf")
import subprocess

print("bbbbbbbbbbbbbbbbbbb")


def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])


# Usage example
package_name = "your_package_name"
install("docx2pdf")

print("ccccccccccc")



def convert_docx_to_pdf(input_file, output_file):
    convert(input_file, output_file)


if __name__ == "__main__":
    import sys

    arg1 = sys.argv[1]
    arg2 = sys.argv[2]
    result = convert_docx_to_pdf(arg1, arg2)
print("dddddddddddddddddddddddddd")
