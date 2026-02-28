from chains.summary_chain import chain

def main():
    topic = input("Enter a topic: ")

    result = chain.invoke({
        "topic": topic
    })

    print("/nStructured Output:/n")
    print(result)

if __name__ == "__main__":
    main()