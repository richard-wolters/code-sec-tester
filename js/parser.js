import OpenAI from "openai";


const openai = new OpenAI();
const api_key = '';




function parse(s) {
    // Array für die aufgeteilten Strings
    const ret = [];

    // Grenzen für die Länge der Strings
    const minLength = 400;
    const maxLength = 800;

    while (s.length > 0) {
        if (s.length <= maxLength) {
            // Wenn die verbleibende Länge kleiner als maxLength ist, alles hinzufügen und beenden
            ret.push(s);
            s = "";
        } else {
            // Zähler für die Tiefe der geschachtelten Klammern
            let depth = 0;

            // Beste Position zum Schneiden speichern
            let tmpBest = minLength;
            let tmpBestDepth = -1;

            // Durchlaufen der ersten maxLength Zeichen von s
            for (let i = 0; i < maxLength; i++) {
                if (s[i] === '{') {
                    depth++;
                }
                if (s[i] === '}') {
                    depth--;

                    // Beste Position zum Schneiden aktualisieren, wenn Bedingungen erfüllt sind
                    if ((tmpBestDepth === -1 || tmpBestDepth >= depth) && i >= minLength) {
                        tmpBest = i;
                        tmpBestDepth = depth;
                    }
                }
            }

            // Das beste gefundene Teilstück zur Ergebnisliste hinzufügen und von s entfernen
            ret.push(s.substring(0, tmpBest));
            s = s.substring(tmpBest);
        }
    }
    return ret;
}

function checkButtonClicked(){
    let input = document.getElementById('').value;
    let parsedText = parse(input);
    let chatGptAnswer = callChatGPT(parsedText);
}

async function callChatGPT(s){
    const answer = "";
    const fullResponse = "";
    for(let i = 0; i < s.length; i++){
        prompt = "You will be given a code, prompt for prompt. Evaluate its safety! " + s[i]; 
        fullResponse.concat(await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_Key}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 100 // Adjust this value to control the response length
        })
        }));

        const data = await response.json();
        answer.concat(data.choices[0].message.content);
    }   
}
