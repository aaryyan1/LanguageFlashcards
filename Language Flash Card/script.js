const language = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}
let langOption=document.querySelectorAll('select');
let questionText=document.querySelector('.fromText');
let answerinText=document.querySelector('.toTranslate');
let fromVoice=document.querySelector('.from');
let toVoice=document.querySelector('.to');
langOption.forEach(( get , con)=>{
    for(let countryCode in language){

        let selected;
        if(con== 0 && countryCode=="en-GB"){
            selected="selected";
        }else if(con== 1 && countryCode=="bn-IN"){
            selected="selected";

        }


        let option=`<option value="${countryCode} ${selected}">${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend',option);
    }
})

questionText.addEventListener('input',function(){
    let content=questionText.value;
    fromContent=langOption[0].value;
    transContent=langOption[1].value;

    let transLink=`https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`
 
    fetch(transLink).then(translate=>translate.json()).then(data=>{
        answerinText.value=data.responseData.translatedText;
    })


})
fromVoice.addEventListener('click',function(){
    let fromTalk;
    fromTalk= new SpeechSynthesisUtterance(questionText.value);
    fromTalk.lang=langOption[0].value;
    speechSynthesis.speak(fromTalk);
})


toVoice.addEventListener('click',function(){

let fromTalk;
fromTalk= new SpeechSynthesisUtterance(answerinText.value);
fromTalk.lang=langOption[1].value;
speechSynthesis.speak(fromTalk);
})


  var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    document.getElementById("save_card").addEventListener("click", () => {
      addFlashcard();
    });
    
    document.getElementById("delete_cards").addEventListener("click", () => {
      localStorage.clear();
      flashcards.innerHTML = '';
      contentArray = [];
    });
    
    document.getElementById("show_card_box").addEventListener("click", () => {
      document.getElementById("create_card").style.display = "block";
    });
    
    document.getElementById("close_card_box").addEventListener("click", () => {
      document.getElementById("create_card").style.display = "none";
    });
    
    flashcardMaker = (text, delThisIndex) => {
      const flashcard = document.createElement("div");
      const question = document.createElement('h2');
      const answer = document.createElement('h2');
      const meaning = document.createElement('h2');
      const del = document.createElement('i');
    
      flashcard.className = 'flashcard';
    
      question.setAttribute("style", "border-top:1px solid black; padding: 15px; margin-top:30px");
      //question.textContent = text.my_question;

      question.innerHTML=`<h2 style="color: red; font-size: 20px;">Word : </h2>
      <p>${text.my_question}</p>`
    
      answer.setAttribute("style", "text-align:center; display:none; color:red");
      answer.textContent = text.my_answer;
      meaning.innerHTML=`<h2 style="color: red; font-size: 20px;">Meaning : </h2>
      <p>${text.my_meaning}</p>`
      // meaning.textContent=text.my_meaning;
      meaning.setAttribute("style", " padding: 15px;");
    //   <i class="fa-solid fa-dumpster"></i>
      del.className = "fa-solid fa-dumpster";
      del.addEventListener("click", () => {
        contentArray.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(contentArray));
        window.location.reload();
      })
    
      flashcard.appendChild(question);
      flashcard.appendChild(meaning);
      flashcard.appendChild(answer);

      flashcard.appendChild(del);
    
      flashcard.addEventListener("click", () => {
        if(answer.style.display == "none")
          answer.style.display = "block";
        else
          answer.style.display = "none";
      })
    
      document.querySelector("#flashcards").appendChild(flashcard);
    }
    
    contentArray.forEach(flashcardMaker);
    
    addFlashcard = () => {
      const question = document.querySelector("#question");
      const meaning = document.querySelector("#meaning");
      const answer = document.querySelector("#answer");
    
      let flashcard_info = {
        'my_question' : question.value,
        'my_meaning'  : meaning.value,
        'my_answer'  : answer.value

      }
    
      contentArray.push(flashcard_info);
      localStorage.setItem('items', JSON.stringify(contentArray));
      flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
      question.value = "";
      meaning.value = "";
      answer.value = "";
    }