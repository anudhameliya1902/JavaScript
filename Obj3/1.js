
function ran(){


    let a =[
        {
            sente :   "सकारात्मक सोच आपको हर काम नकारात्मक सोच से बेहतर करने में सक्षम बनाएगी।",
            name :   "जिग जिगलर"
        },
        {
            sente :   "आपकी सकारात्मक क्रिया और सकारात्मक सोच का संयोजन सफलता में सहायक होता है।",
            name :   "शिव खेड़ा"
        },
        {
            sente :   "सकारात्मक सोच सिर्फ़ एक टैगलाइन से कहीं ज़्यादा है। यह हमारे व्यवहार के तरीके को बदल देती है। और मेरा दृढ़ विश्वास है कि जब मैं सकारात्मक होता हूँ, तो यह न केवल मुझे बेहतर बनाता है, बल्कि मेरे आस-पास के लोगों को भी बेहतर बनाता है।",
            name :   "हार्वे मैके"
        },
        {
            sente :   "सकारात्मक सोच एक मूल्यवान उपकरण है जो आपको बाधाओं पर विजय पाने, दर्द से निपटने और नए लक्ष्यों तक पहुंचने में मदद कर सकता है।",
            name :   "एमी मोरिन"
        },
        {
            sente :   "सकारात्मक सोच वह धारणा है कि यदि आप अच्छे विचार रखते हैं, तो चीजें अच्छी तरह से काम करेंगी। आशावाद यह सोचने की भावना है कि चीजें अच्छी तरह से होंगी और आशावान बनें।",
            name :   "मार्टिन ईपी सेलिगमैन"
        },
        
    ]

    let x = Math.round(Math.random() * a.length)

    document.getElementById("quotes").innerHTML =`<h1>${a[x].sente}</h1> <p>${a[x].name}</p>`;

}

ran()
