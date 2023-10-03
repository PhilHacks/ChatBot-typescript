# ChatBot-typescript

**Table of Contents**
- [Project Overview](#project-overview)
- [Installation and Setup](#installation-and-setup)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Project Features](#project-features)
  - [List of Features](#list-of-features)
  - [Usage Examples](#usage-examples)
    - [Using Help Command](#using-help-command)
    - [Using Greet Command](#using-greet-command)
    - [Using Weather Command](#using-weather-command)
- [Project Structure](#project-structure)
  - [Directory Structure](#directory-structure)
  - [Key Files](#key-files)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks/Libraries](#frameworkslibraries)

### **1. Project Overview**

- **Project Name:** ChatBotApp
- **Description:** ChatBotApp is a simple command-line interface chatbot developed using Node.js. It can respond to specific commands such as "help", "greet", and "weather". The application is designed using the Command design pattern, allowing for easy scalability and addition of new commands in the future.

### **2. Installation and Setup**

#### **Requirements:**

Before you can run ChatBotApp, ensure you have the following prerequisites:

- **Node.js:** Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).

- **npm (Node Package Manager):** npm comes bundled with Node.js. Verify its installation by running `npm -v` in your terminal.

#### **Installation:**

To set up ChatBotApp locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatbot-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chatbot-app
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node index.js
   ```

   The ChatBotApp will now be running in your terminal.

### **3. Project Features**

#### **List of Features:**

- **Help Command:** Provides guidance on how to use the chatbot.
  
- **Greet Command:** Returns a greeting message.
  
- **Weather Command:** Returns a predefined weather message.

#### **Usage Examples:**

##### Using Help Command:

Type `help` and press enter. The chatbot will return "Here is the help text".

##### Using Greet Command:

Type `greet` and press enter. The chatbot will return "Here is the greet text".

##### Using Weather Command:

Type `weather` and press enter. The chatbot will return "Here is The weather: Sunny and 25°C".

### **4. Project Structure**

#### **Directory Structure:**

The project is organized as follows:

- `ChatBot.ts`: Contains the main logic for the chatbot and command execution.

- `index.ts`: Initializes the command-line interface and interacts with the ChatBot class.

#### **Key Files:**

- `ChatBot.ts`: The core logic for chatbot command execution.

- `index.ts`: Initializes the command-line interface and user interaction.

### **5. Technologies Used**

#### **Languages:**

- TypeScript

#### **Frameworks/Libraries:**

- Node.js
- readline: Used for creating an interactive command-line interface.

---

Du kan kopiera ovanstående text och lägga till den i en `README.md`-fil i ditt projekt. Justera länkar eller andra specifika detaljer efter behov.
