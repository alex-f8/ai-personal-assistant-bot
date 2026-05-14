# 🤖 AI Personal Assistant — Telegram Bot

A smart personal assistant Telegram bot powered by Google Gemini AI.  
Provides real-time weather, news, currency rates, and translations — all in one place.

---

## ✨ Features

- 🌤️ **Weather** — current weather for any city
- 📰 **News** — latest news on any topic
- 🌍 **Translation** — translate text to any language
- 💱 **Currency rates** — real-time exchange rates
- ⚡ Powered by Google Gemini AI
- 🛡️ Built with TypeScript for reliability

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| TypeScript | Main language |
| Grammy | Telegram Bot framework |
| Google Gemini AI | AI responses |
| Node.js | Runtime |

---

## 📋 Commands

| Command | Description | Example |
|---|---|---|
| `/start` | Welcome message | `/start` |
| `/w [city]` | Current weather for any city | `/w London` |
| `/n [topic]` | Latest news on a topic | `/n technology` |
| `/t [lang] [text]` | Translate text to any language | `/t Spanish Hello!` |
| `/r [currency]` | Exchange rate against USD | `/r EUR` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))
- Google Gemini API Key ([get here](https://aistudio.google.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/alex-f8/ai-personal-assistant-bot.git
cd ai-personal-assistant-bot

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```env
TOKEN_KEY=your_telegram_bot_token
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
```

### Run

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── index.ts          # Entry point, bot setup
├── commands/
│   ├── weather.ts    # Weather command handler
│   ├── news.ts       # News command handler
│   ├── translate.ts  # Translation command handler
│   └── rate.ts       # Currency rate command handler
└── ai/
    └── gemini.ts     # Google Gemini AI integration
```

---

## 💡 Usage Examples

**Weather:**
```
/w Tokyo
→ 🌤️ Tokyo: +22°C, Partly cloudy, Wind: 10 km/h
```

**Translation:**
```
/t French Good morning, how are you?
→ 🌍 Bonjour, comment allez-vous ?
```

**Currency:**
```
/r GEL
→ 💱 1 USD = 2.65 GEL
```

**News:**
```
/n AI
→ 📰 Latest in AI: ...
```

---

## 📄 License

MIT License — feel free to use and modify.

---

> Built by [Alex F.](https://github.com/alex-f8)
