import random
import time
romaji = [
    "a","i","u","e","o",
    "ka","ki","ku","ke","ko",
    "sa","shi","su","se","so",
    "ta","chi","tsu","te","to",
    "na","ni","nu","ne","no",
    "ha","hi","hu","he","ho",
    "ma","mi","mu","me","mo",
    "ya","yu","yo",
    "ra","ri","ru","re","ro",
    "wa","o",
    "n",
    "ga","gi","gu","ge","go",
    "za","ji","zu","ze","zo",
    "da","di","du","de","do",
    "ba","bi","bu","be","bo",
    "pa","pi","pu","pe","po",
]
pin = [
    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "た","ち","つ","て","と",
    "な","に","ぬ","ね","の",
    "は","ひ","ふ","へ","ほ",
    "ま","み","む","め","も",
    "や","ゆ","よ",
    "ら","り","る","れ","ろ",
    "わ","お",
    "ん"
]
pian = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","オ",
    "ン"
]
t = 10
userInput = ""
flag = input("1:平假名书写练习，2:片假名书写练习")
quest = romaji

answer = pin if flag=='1' else pian

while userInput == "":
    randomMojiNum = random.randint(0,len(pian)-1)
    print("["+ quest[randomMojiNum]+"]"+" 请开始书写。。。")
    time.sleep(t)
    print(answer[randomMojiNum])
    userInput = input("回车继续")


    
    
