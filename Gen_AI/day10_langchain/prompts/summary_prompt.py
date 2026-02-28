from langchain.prompts import PromptTemplate

summary_prompt = PromptTemplate(
    input_variables=["text"],
    template = """
You are an AI expert teacher.

Explain the topic : {text}

Return response in JSON format: 
{{
    "topic": "",
    "summary" : "",
    "difficulty":""
}}
"""
)