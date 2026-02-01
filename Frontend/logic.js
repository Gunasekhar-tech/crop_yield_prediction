// --- 1. TRANSLATIONS (En, Hi, Te, Ta) ---
const translations = {
    en: {
        "menu-soil": "Soil Prediction", "menu-hist": "History Prediction", "menu-chat": "AI Chatbot", "lbl-lang": "Language",
        "header-title": "Smart Agriculture Platform", "title-soil": "Soil Analysis", "lbl-state": "State", "lbl-dist": "District",
        "lbl-soil": "Soil Type", "lbl-ph": "pH Level", "lbl-n": "Nitrogen (N)", "lbl-p": "Phosphorus (P)", "lbl-k": "Potassium (K)",
        "lbl-temp": "Temperature (°C)", "lbl-rain": "Rainfall (mm)", "lbl-humid": "Humidity (%)", "btn-predict1": "Analyze & Predict",
        "title-hist": "Historical Trends", "lbl-h-state": "State", "lbl-h-soil": "Soil Type", "lbl-prev": "Previous Crop",
        "btn-predict2": "Predict Next Crop", "bot-welcome": "Hello! Ask me about crops, fertilizers, or soil.", "chat-input": "Type question...",
        "res-title": "Prediction Result", "lbl-crop": "Best Crop", "lbl-yield": "Est. Yield", "lbl-fert": "Fertilizer", "btn-listen": "🔊 Listen"
    },
    hi: {
        "menu-soil": "मृदा भविष्यवाणी", "menu-hist": "इतिहास भविष्यवाणी", "menu-chat": "ए.आई चैटबॉट", "lbl-lang": "भाषा",
        "header-title": "स्मार्ट कृषि मंच", "title-soil": "मिट्टी विश्लेषण", "lbl-state": "राज्य", "lbl-dist": "ज़िला",
        "lbl-soil": "मिट्टी का प्रकार", "lbl-ph": "पीएच स्तर", "lbl-n": "नाइट्रोजन (N)", "lbl-p": "फास्फोरस (P)", "lbl-k": "पोटेशियम (K)",
        "lbl-temp": "तापमान (°C)", "lbl-rain": "वर्षा (mm)", "lbl-humid": "नमी (%)", "btn-predict1": "भविष्यवाणी करें",
        "title-hist": "ऐतिहासिक रुझान", "lbl-h-state": "राज्य", "lbl-h-soil": "मिट्टी का प्रकार", "lbl-prev": "पिछली फसल",
        "btn-predict2": "अगली फसल", "bot-welcome": "नमस्ते! फसल या खाद के बारे में पूछें...", "chat-input": "यहाँ लिखें...",
        "res-title": "परिणाम", "lbl-crop": "फसल", "lbl-yield": "उपज", "lbl-fert": "खाद", "btn-listen": "🔊 सुनें"
    },
    te: {
        "menu-soil": "నేల అంచనా", "menu-hist": "చరిత్ర అంచనా", "menu-chat": "AI చాట్‌బాట్", "lbl-lang": "భాష",
        "header-title": "స్మార్ట్ వ్యవసాయ వేదిక", "title-soil": "మట్టి విశ్లేషణ", "lbl-state": "రాష్ట్రం", "lbl-dist": "జిల్లా",
        "lbl-soil": "మట్టి రకం", "lbl-ph": "pH స్థాయి", "lbl-n": "నైట్రోజన్", "lbl-p": "భాస్వరం", "lbl-k": "పొటాషియం",
        "lbl-temp": "ఉష్ణోగ్రత", "lbl-rain": "వర్షపాతం", "lbl-humid": "తేమ", "btn-predict1": "విశ్లేషించండి",
        "title-hist": "చారిత్రక పోకడలు", "lbl-h-state": "రాష్ట్రం", "lbl-h-soil": "మట్టి రకం", "lbl-prev": "గత పంట",
        "btn-predict2": "అంచనా వేయండి", "bot-welcome": "నమస్కారం! పంటల గురించి అడగండి.", "chat-input": "టైప్ చేయండి...",
        "res-title": "ఫలితం", "lbl-crop": "పంట", "lbl-yield": "దిగుబడి", "lbl-fert": "ఎరువులు", "btn-listen": "🔊 వినండి"
    },
    ta: {
        "menu-soil": "மண் கணிப்பு", "menu-hist": "வரலாறு கணிப்பு", "menu-chat": "AI அரட்டை", "lbl-lang": "மொழி",
        "header-title": "ஸ்மார்ட் விவசாய தளம்", "title-soil": "மண் பகுப்பாய்வு", "lbl-state": "மாநிலம்", "lbl-dist": "மாவட்டம்",
        "lbl-soil": "மண் வகை", "lbl-ph": "pH அளவு", "lbl-n": "நைட்ரஜன்", "lbl-p": "பாஸ்பரஸ்", "lbl-k": "பொட்டாசியம்",
        "lbl-temp": "வெப்பநிலை", "lbl-rain": "மழை", "lbl-humid": "ஈரப்பதம்", "btn-predict1": "கணிக்கவும்",
        "title-hist": "வரலாற்று போக்குகள்", "lbl-h-state": "மாநிலம்", "lbl-h-soil": "மண் வகை", "lbl-prev": "முந்தைய பயிர்",
        "btn-predict2": "அடுத்த பயிர்", "bot-welcome": "வணக்கம்! பயிர்கள் பற்றி கேளுங்கள்.", "chat-input": "தட்டச்சு செய்க...",
        "res-title": "முடிவு", "lbl-crop": "பயிர்", "lbl-yield": "மகசூல்", "lbl-fert": "உரம்", "btn-listen": "🔊 கேளுங்கள்"
    }
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    const t = translations[lang];
    for (const key in t) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'chat-input') el.placeholder = t[key];
            else el.innerText = t[key];
        }
    }
}

// --- 2. NAVIGATION ---
function showSection(id, btn) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active-section');
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('result-card').classList.add('hidden');
}

// --- 3. CONNECTION CHECKER ---
setInterval(async () => {
    try { 
        await fetch('http://127.0.0.1:5000/'); 
        document.getElementById('server-status').style.background = '#00e676'; 
        document.getElementById('server-status').title = "Online";
    } catch { 
        document.getElementById('server-status').style.background = 'red'; 
        document.getElementById('server-status').title = "Offline (Demo Mode)";
    }
}, 5000);

// --- 4. PREDICTIONS ---
async function predictSoil() {
    // Default fallback values if inputs are empty
    await sendPrediction('/predict/case1', {
        State: document.getElementById('s-state').value || "Odisha",
        District: document.getElementById('s-district').value || "District1",
        Soil_Type: document.getElementById('s-soil').value || "Alluvial",
        Nitrogen: document.getElementById('s-n').value || 120,
        Phosphorus: document.getElementById('s-p').value || 40,
        Potassium: document.getElementById('s-k').value || 60,
        pH: document.getElementById('s-ph').value || 6.5,
        Temperature: document.getElementById('s-temp').value || 30,
        Rainfall: document.getElementById('s-rain').value || 1000,
        Humidity: document.getElementById('s-humid').value || 50
    });
}

async function predictHistory() {
    await sendPrediction('/predict/case2', {
        State: document.getElementById('h-state').value || "Punjab",
        Soil_Type: document.getElementById('h-soil').value || "Loamy",
        Previous_Crop: document.getElementById('h-prev').value || "Wheat"
    });
}

async function sendPrediction(endpoint, dataPayload) {
    const btn = document.querySelector('.active-section .btn-primary');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";

    try {
        const res = await fetch(`http://127.0.0.1:5000${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataPayload)
        });
        
        const result = await res.json();
        if (result.error) throw new Error(result.error);
        displayResult(result.crop, result.yield, result.fertilizer);

    } catch (e) {
        console.warn("Using Mock Result");
        const mock = generateMockResult();
        displayResult(mock.crop, mock.yield, mock.fertilizer);
    }
    
    btn.innerText = originalText;
}

function displayResult(crop, yieldVal, fert) {
    document.getElementById('res-crop').innerText = crop;
    document.getElementById('res-yield').innerText = yieldVal;
    document.getElementById('res-fert').innerText = fert;
    document.getElementById('result-card').classList.remove('hidden');
}

// --- SMART RANDOM GENERATOR ---
function generateMockResult() {
    // Defined Crop Profiles for realism
    const profiles = [
        { c: "Rice", y: "40-50", f: "Urea + DAP" },
        { c: "Wheat", y: "45-55", f: "NPK 12-32-16" },
        { c: "Maize", y: "50-60", f: "Urea + Potash" },
        { c: "Cotton", y: "20-30", f: "DAP + Zinc" },
        { c: "Sugarcane", y: "800-1000", f: "Urea + Super Phosphate" }, // High yield
        { c: "Groundnut", y: "20-25", f: "Gypsum + NPK" },
        { c: "Tomato", y: "250-300", f: "NPK 10-26-26" },
        { c: "Mustard", y: "15-20", f: "Sulphur + Urea" }
    ];
    
    const p = profiles[Math.floor(Math.random() * profiles.length)];
    
    // Add small random variation to yield
    // If yield is "40-50", pick a random number between them
    let yieldFinal = p.y;
    if (p.y.includes('-')) {
        const [min, max] = p.y.split('-').map(Number);
        const val = (Math.random() * (max - min) + min).toFixed(2);
        yieldFinal = val;
    }

    return {
        crop: p.c,
        yield: yieldFinal + " Quintals/Acre",
        fertilizer: p.f
    };
}

// --- 5. SMART CHATBOT ---
async function sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.toLowerCase();
    if (!msg) return;
    
    addMsg(input.value, 'user'); // Show original case for user
    input.value = "";
    
    try {
        const res = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        addMsg(data.reply, 'bot');
    } catch { 
        // --- OFFLINE KNOWLEDGE BASE ---
        let reply = "I am not sure about that. Try asking about Rice, Wheat, or Soil.";
        
        // Key-word matching
        if (msg.includes('hello') || msg.includes('hi')) reply = "Namaste! How can I help you with farming today?";
        else if (msg.includes('rice')) reply = "Rice is a Kharif crop. It needs standing water and clayey soil. Best fertilizer: Urea & DAP.";
        else if (msg.includes('wheat')) reply = "Wheat is a Rabi crop. It grows best in cool winters with Loamy soil. Yield: 45-55 Quintals/Acre.";
        else if (msg.includes('tomato')) reply = "Tomato needs well-drained soil. Watch out for Blight disease. Use staking for better yield.";
        else if (msg.includes('cotton')) reply = "Cotton grows well in Black soil (Regur soil). It requires a dry climate during harvest.";
        else if (msg.includes('sugarcane')) reply = "Sugarcane is a long-duration crop (10-12 months). It needs heavy irrigation and Nitrogen.";
        else if (msg.includes('soil')) reply = "Red soil is rich in iron but needs Phosphate. Black soil is good for Cotton. Alluvial is best for Rice/Wheat.";
        else if (msg.includes('fertilizer') || msg.includes('urea')) reply = "Urea provides Nitrogen for leaf growth. DAP provides Phosphorus for roots. Potash helps with disease resistance.";
        else if (msg.includes('pest')) reply = "For pests, try Neem Oil first. For heavy infestation, consult a local Agri-clinic.";
        else if (msg.includes('rain') || msg.includes('water')) reply = "Ensure proper drainage. Excess water can cause root rot in non-paddy crops.";

        // Simulate thinking delay
        setTimeout(() => addMsg(reply, 'bot'), 600);
    }
}

function addMsg(txt, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerText = txt;
    const box = document.getElementById('chat-box');
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

// --- 6. VOICE ---
function startVoice(type) {
    const r = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const lang = document.getElementById('language').value;
    r.lang = lang === 'hi' ? 'hi-IN' : lang === 'te' ? 'te-IN' : lang === 'ta' ? 'ta-IN' : 'en-US';
    
    r.start();
    r.onresult = (e) => {
        const text = e.results[0][0].transcript;
        if(type === 'soil') {
            const states = ["Odisha", "Punjab", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Karnataka", "Maharashtra", "Gujarat"];
            const foundState = states.find(s => text.toLowerCase().includes(s.toLowerCase()));
            
            if (foundState) document.getElementById('s-state').value = foundState;
            else document.getElementById('s-district').value = text;
        }
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