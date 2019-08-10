"use strict"
const recognition = new webkitSpeechRecognition();
recognition.lang = 'ja-JP';

const app = new Vue({
    el: "#app",
    data: {
        message: "ボタンを押して意味のある言葉をかけてください"
    }
})

recognition.onresult = (e)=>{
    // console.log(e.results[0][0].transcript);
    app.message = e.results[0][0].transcript;
}

const getSpeech = ()=>{
    recognition.start();
}