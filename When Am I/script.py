rulesList = ["Thank you for watching my stream!", "To help everyone enjoy the stream more, please follow these rules:", "1. Be nice to other viewers. Don’t spam or troll.", "2. If you see spam or trolling, don’t respond. Just block, report, and ignore those comments.", "3. Talk about the stream, but please don’t bring up unrelated topics or have personal conversations.", "4. Don’t bring up other streamers or streams unless I mention them.", "5. Similarly, don’t talk about me or my stream in other streamers’ chat.", "6. No backseating unless I ask for help. I'd rather learn from my mistakes by dying countless times; if I fail, it will be on my own terms.", "7. Please refrain from chatting before the stream starts to prevent any issues.", "8. I will be reading some superchats that may catch my attention during the game but most of the reading will be done at the end of stream.", "9. Please refrain from making voice requests as they were most likely done already.", "As long as you follow the rules above, you can chat in any language!"]

with open("stamp.txt", "r") as f:
    stamp = f.readlines()
    for s in stamp:
        data = s.strip("\n \"")
        if ":" not in data:
            eval(f"print('{data}', end='')")
        else:
            splitStr = data.split(":")
            eval("print(rulesList[{}].split(" ")[{}][{}], end='')".format((int(splitStr[0])-1), (int(splitStr[1])-1), (int(splitStr[2])-1)))