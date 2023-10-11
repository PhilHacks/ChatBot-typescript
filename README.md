# 🤖ChatBot-typescript

**Table of Contents**
- [Project Overview](#1-project-overview)
- [Installation and Setup](#2-installation-and-setup)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Project Features](#3-project-features)
  - [List of Features](#list-of-features)
  - [Usage Examples](#usage-examples)
- [Project Structure](#4-project-structure)
- [Technologies Used](#5-technologies-used)
- [Testing](#6-testing)
---


### **1. Project Overview**


- **Project Name:** ChatBotApp
- **Description:** ChatBotApp is a simple command-line interface chatbot developed using Node.js and Typescript. It can respond to specific commands such as "help", "greet", and "weather". The application is designed so that it can easily be scaled up with new commands.

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
   npm start
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

![Prompts in command line](https://github.com/PhilHacks/ChatBot-typescript/blob/main/img/chatbot-ts.png)

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

Here's the provided content formatted in Markdown:

### **6. Testing**

The ChatBot application is equipped with a suite of tests to ensure its functionality and robustness. These tests cover individual command classes, the main `executeCommand` method, and various edge cases.

#### **Running Tests:**

To run the tests, navigate to the project directory and execute:

```bash
npm test
```

#### **Test Cases Overview:**

- **Individual Command Classes:** Tests the functionality of each command class (`HelpCommand`, `GreetCommand`, and `WeatherCommand`).

- **Unknown Commands:** Ensures that any unknown or undefined command returns the "Unknown command" response.

- **Execute Command Method:** Tests the main `executeCommand` method in the ChatBot class to ensure it correctly delegates to the appropriate command class.

- **Edge Cases:** Tests various edge cases, such as providing undefined or malformed commands.

For details of tests, see [botMain.test.ts](test/botMain.test.ts) file.


