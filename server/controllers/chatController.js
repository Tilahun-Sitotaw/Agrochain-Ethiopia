// controllers/chatController.js

exports.chatBotResponse = (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    // Normalize message to lowercase for easier matching
    const lowerMessage = message.toLowerCase();

    // Simple regex patterns for matching different queries
    const greetingsPattern = /(hello|hi|hey|good morning|good evening)/i;
    const goodbyePattern = /(bye|goodbye|see you)/i;
    const helpPattern = /(help|assist|support)/i;
    const buyPattern = /(buy|purchase|want to buy|looking for)/i;
    const sellPattern = /(sell|offer|selling|want to sell|selling farm products)/i;
    const productInquiryPattern = /(product|item|farm produce|available products)/i;
    const priceInquiryPattern = /(price|cost|how much|value)/i;
    const locationPattern = /(location|where|area|delivery|shipping)/i;

    // Default response
    let response = "I'm sorry, I didn't understand that. Could you please clarify?";

    // Match for greeting
    if (greetingsPattern.test(lowerMessage)) {
        response = "Hi there! How can I assist you with farm products today?";
    }
    // Match for goodbye
    else if (goodbyePattern.test(lowerMessage)) {
        response = "Goodbye! Have a great day ahead! If you need anything, feel free to ask.";
    }
    // Match for help
    else if (helpPattern.test(lowerMessage)) {
        response = "Sure, I'm here to assist you. Do you want to buy or sell farm products?";
    }
    // Match for buy-related queries
    else if (buyPattern.test(lowerMessage)) {
        response = "What farm products are you looking to buy? I can help you find them.";
    }
    // Match for sell-related queries
    else if (sellPattern.test(lowerMessage)) {
        response = "Are you looking to sell farm products? Please tell me what you have to offer.";
    }
    // Match for product inquiry
    else if (productInquiryPattern.test(lowerMessage)) {
        response = "We have a variety of farm products available for sale. What kind of products are you interested in?";
    }
    // Match for price inquiry
    else if (priceInquiryPattern.test(lowerMessage)) {
        response = "Prices vary depending on the product. Could you specify what you're interested in so I can provide more details?";
    }
    // Match for location or delivery-related queries
    else if (locationPattern.test(lowerMessage)) {
        response = "We deliver farm products nationwide. Could you please share your location for more accurate delivery information?";
    }
    // Default fallback if no match
    else {
        response = "I'm not sure I understand your request. Could you please clarify or let me know if you're looking to buy or sell something?";
    }

    return res.status(200).json({ reply: response });
};
