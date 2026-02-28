from langchain.prompts import PromptTemplate

summary_prompt = PromptTemplate(
    input_variables=["topic"],
    template = """
You are an AI expert teacher.

Explain the topic : {topic}

Return response in JSON format: 
{{
    "topic": "",
    "summary" : "",
    "difficulty":""
}}
"""
)