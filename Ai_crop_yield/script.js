
const translations = {
    en: {
        "menu-soil": "Soil Prediction", "menu-hist": "History Prediction", "menu-chat": "AI Chatbot", "lbl-lang": "Language",
        "header-title": "Smart Agriculture Platform", "title-soil": "Soil Analysis", "lbl-state": "State", "lbl-dist": "District",
        "lbl-soil": "Soil Type", "lbl-ph": "pH Level", "lbl-n": "Nitrogen (N)", "lbl-p": "Phosphorus (P)", "lbl-k": "Potassium (K)",
        "lbl-temp": "Temperature (°C)", "lbl-rain": "Rainfall (mm)", "lbl-humid": "Humidity (%)", "btn-predict1": "Analyze & Predict",
        "title-hist": "Historical Trends", "lbl-h-state": "State", "lbl-h-soil": "Soil Type", "lbl-prev": "Previous Crop",
        "btn-predict2": "Predict Next Crop", "bot-welcome": "Hello! Ask me about crops.", "chat-input": "Type question...",
        "res-title": "Prediction Result", "lbl-crop": "Best Crop", "lbl-yield": "Est. Yield", "lbl-fert": "Fertilizer", "btn-listen": "🔊 Listen"
    },
    hi: {
        "menu-soil": "मृदा भविष्यवाणी", "menu-hist": "इतिहास भविष्यवाणी", "menu-chat": "ए.आई चैटबॉट", "lbl-lang": "भाषा",
        "header-title": "स्मार्ट कृषि मंच", "title-soil": "मिट्टी विश्लेषण", "lbl-state": "राज्य", "lbl-dist": "ज़िला",
        "lbl-soil": "मिट्टी का प्रकार", "lbl-ph": "पीएच स्तर", "lbl-n": "नाइट्रोजन (N)", "lbl-p": "फास्फोरस (P)", "lbl-k": "पोटेशियम (K)",
        "lbl-temp": "तापमान (°C)", "lbl-rain": "वर्षा (mm)", "lbl-humid": "नमी (%)", "btn-predict1": "भविष्यवाणी करें",
        "title-hist": "ऐतिहासिक रुझान", "lbl-h-state": "राज्य", "lbl-h-soil": "मिट्टी का प्रकार", "lbl-prev": "पिछली फसल",
        "btn-predict2": "अगली फसल", "bot-welcome": "नमस्ते!", "chat-input": "यहाँ लिखें...",
        "res-title": "परिणाम", "lbl-crop": "फसल", "lbl-yield": "उपज", "lbl-fert": "खाद", "btn-listen": "🔊 सुनें"
    },
    te: {
        "menu-soil": "నేల అంచనా", "menu-hist": "చరిత్ర అంచనా", "menu-chat": "AI చాట్‌బాట్", "lbl-lang": "భాష",
        "header-title": "స్మార్ట్ వ్యవసాయ వేదిక", "title-soil": "మట్టి విశ్లేషణ", "lbl-state": "రాష్ట్రం", "lbl-dist": "జిల్లా",
        "lbl-soil": "మట్టి రకం", "lbl-ph": "pH స్థాయి", "lbl-n": "నైట్రోజన్", "lbl-p": "భాస్వరం", "lbl-k": "పొటాషియం",
        "lbl-temp": "ఉష్ణోగ్రత", "lbl-rain": "వర్షపాతం", "lbl-humid": "తేమ", "btn-predict1": "విశ్లేషించండి",
        "title-hist": "చారిత్రక పోకడలు", "lbl-h-state": "రాష్ట్రం", "lbl-h-soil": "మట్టి రకం", "lbl-prev": "గత పంట",
        "btn-predict2": "అంచనా వేయండి", "bot-welcome": "నమస్కారం!", "chat-input": "టైప్ చేయండి...",
        "res-title": "ఫలితం", "lbl-crop": "పంట", "lbl-yield": "దిగుబడి", "lbl-fert": "ఎరువులు", "btn-listen": "🔊 వినండి"
    },
    ta: {
        "menu-soil": "மண் கணிப்பு", "menu-hist": "வரலாறு கணிப்பு", "menu-chat": "AI அரட்டை", "lbl-lang": "மொழி",
        "header-title": "ஸ்மார்ட் விவசாய தளம்", "title-soil": "மண் பகுப்பாய்வு", "lbl-state": "மாநிலம்", "lbl-dist": "மாவட்டம்",
        "lbl-soil": "மண் வகை", "lbl-ph": "pH அளவு", "lbl-n": "நைட்ரஜன்", "lbl-p": "பாஸ்பரஸ்", "lbl-k": "பொட்டாசியம்",
        "lbl-temp": "வெப்பநிலை", "lbl-rain": "மழை", "lbl-humid": "ஈரப்பதம்", "btn-predict1": "கணிக்கவும்",
        "title-hist": "வரலாற்று போக்குகள்", "lbl-h-state": "மாநிலம்", "lbl-h-soil": "மண் வகை", "lbl-prev": "முந்தைய பயிர்",
        "btn-predict2": "அடுத்த பயிர்", "bot-welcome": "வணக்கம்!", "chat-input": "தட்டச்சு செய்க...",
        "res-title": "முடிவு", "lbl-crop": "பயிர்", "lbl-yield": "மகசூல்", "lbl-fert": "உரம்", "btn-listen": "🔊 கேளுங்கள்"
    }
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    const t = translations[lang] || translations['en'];
    for (const key in t) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'chat-input') {
                el.placeholder = t[key];
            } else if (key === 'bot-welcome') {
                const welcomeMsg = document.getElementById('bot-welcome');
                if (welcomeMsg) welcomeMsg.innerText = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage();
});
function showSection(id, btn) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active-section');
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('result-card').classList.add('hidden');
}
setInterval(async () => {
    try { 
        await fetch('/'); 
        document.getElementById('server-status').style.background = '#00e676'; // Green
        document.getElementById('server-status').title = "Online";
    } catch { 
        document.getElementById('server-status').style.background = 'red'; // Red
        document.getElementById('server-status').title = "Offline (Check Terminal)";
    }
}, 5000);
async function predictSoil() {
    const state = document.getElementById('s-state').value.trim();
    const soilType = document.getElementById('s-soil').value;
    
    if (!state) {
        alert("Please select a State");
        return;
    }
    
    await sendPrediction('/predict/case1', {
        State: state,
        Soil_Type: soilType,
        Nitrogen: parseFloat(document.getElementById('s-n').value) || 0,
        Phosphorus: parseFloat(document.getElementById('s-p').value) || 0,
        Potassium: parseFloat(document.getElementById('s-k').value) || 0,
        pH: parseFloat(document.getElementById('s-ph').value) || 7.0,
        Temperature: parseFloat(document.getElementById('s-temp').value) || 25.0,
        Rainfall: parseFloat(document.getElementById('s-rain').value) || 1000.0,
        Humidity: parseFloat(document.getElementById('s-humid').value) || 50.0
    });
}

async function predictHistory() {
    const state = document.getElementById('h-state').value.trim();
    const prevCrop = document.getElementById('h-prev').value.trim();
    
    if (!state || !prevCrop) {
        alert("Please fill in all required fields");
        return;
    }
    
    await sendPrediction('/predict/case2', {
        State: state,
        Soil_Type: document.getElementById('h-soil').value,
        Previous_Crop: prevCrop
    });
}

async function sendPrediction(endpoint, dataPayload) {
    const btn = document.querySelector('.active-section .btn-primary');
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = "Analyzing...";

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataPayload)
        });
        
        const result = await res.json();
        
        if (!res.ok || result.error) {
            alert("Error: " + (result.error || "Prediction failed. Please check your inputs."));
        } else {
            document.getElementById('res-crop').innerText = result.crop || '--';
            document.getElementById('res-yield').innerText = result.yield || '--';
            document.getElementById('res-fert').innerText = result.fertilizer || '--';
            document.getElementById('result-card').classList.remove('hidden');
            document.getElementById('result-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } catch (e) {
        console.error('Prediction error:', e);
        alert("❌ Connection Error! Please make sure the backend is running on port 5000.");
    } finally {
        btn.disabled = false;
        btn.innerText = originalText;
    }
}
async function sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;
    
    addMsg(msg, 'user');
    input.value = "";
    
    try {
        const res = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });
        
        if (!res.ok) {
            throw new Error('Chat service unavailable');
        }
        
        const data = await res.json();
        addMsg(data.reply || "I'm sorry, I didn't understand that.", 'bot');
    } catch (e) {
        console.error('Chat error:', e);
        addMsg("⚠️ Error: Backend Offline. Please check if the server is running.", 'bot');
    }
}

function addMsg(txt, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerText = txt;
    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function startVoice(type) {
    const r = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const lang = document.getElementById('language').value;
    r.lang = lang === 'hi' ? 'hi-IN' : lang === 'te' ? 'te-IN' : lang === 'ta' ? 'ta-IN' : 'en-US';
    
    r.start();
    r.onresult = (e) => {
        const text = e.results[0][0].transcript;
        if(type === 'soil') document.getElementById('s-district').value = text;
    };
}

function speakResult() {
    const txt = document.getElementById('res-crop').innerText;
    const lang = document.getElementById('language').value;
    
    let speechText = `The recommended crop is ${txt}`;
    let code = 'en-US';

    if(lang === 'hi') { speechText = `अनुशंसित फसल ${txt} है`; code = 'hi-IN'; }
    if(lang === 'te') { speechText = `సిఫార్సు చేయబడిన పంట ${txt}`; code = 'te-IN'; }
    if(lang === 'ta') { speechText = `பரிந்துரைக்கப்பட்ட பயிர் ${txt}`; code = 'ta-IN'; }

    const u = new SpeechSynthesisUtterance(speechText);
    u.lang = code;
    window.speechSynthesis.speak(u);
}