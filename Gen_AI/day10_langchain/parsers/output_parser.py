from pydantic import BaseModel
from langchain_core.output_parsers import PydanticOutputParser
class Summary(BaseModel):
    topic : str
    Summary : str
    difficulty : str

parser = PydanticOutputParser(pydantic_object=Summary)