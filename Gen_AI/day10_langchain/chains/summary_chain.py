from config.llm import get_llm
from parsers.output_parser import parser
from prompts.summary_prompt import summary_prompt

llm = get_llm()

chain = summary_prompt | llm | parser