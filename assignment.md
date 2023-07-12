Insomnia Labs Frontend Developer Take-Home Test
Thank you for your interest in the Frontend Developer position at our company. As part of our hiring process, we would like you to complete a take-home test to assess your skills in building a fully-functional frontend application using ReactJs/NextJs.

Instructions
For this assessmennt, we want you to create a simple application with two pages using ReactJs/NextJs. Requirements are stated as follows:

First Page: Bitcoin (BTC) Price Index page
Build a page that displays the current BTC price index, as provided by this Rest API

Page should contain price details of USD, GBP and EUR currencies, refreshed at a default interval of 5 seconds.
Page must include feature to allow user choose between different data refresh intervals
Page must support feature to allow user toggle on/off some of the currencies displayed.
Page must remember user preferences for the features on-page.
Here's a sample of the data provided by the API:

{
  "time": {
    "updated": "Jul 11, 2023 09:56:00 UTC",
    "updatedISO": "2023-07-11T09:56:00+00:00",
    "updateduk": "Jul 11, 2023 at 10:56 BST"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "chartName": "Bitcoin",
  "bpi": {
    "USD": {
      "code": "USD",
      "symbol": "&#36;",
      "rate": "30,428.4059",
      "description": "United States Dollar",
      "rate_float": 30428.4059
    },
    "GBP": {
      "code": "GBP",
      "symbol": "&pound;",
      "rate": "25,425.7326",
      "description": "British Pound Sterling",
      "rate_float": 25425.7326
    },
    "EUR": {
      "code": "EUR",
      "symbol": "&euro;",
      "rate": "29,641.7099",
      "description": "Euro",
      "rate_float": 29641.7099
    }
  }
}
Second Page: NFT List page
We want you to build a simple page that lists the NFTs owned by a connected user's wallet.

Page should display NFT basic details as well as NFT metadata (if available)
This includes (but not limited to): name, description, token id, image, smart contract address, etc
That's all!
If you'd need testnet NFTs for testing, do let us know. Also, please feel free to use a style library of your choice (Material UI, Tailwind CSS, etc)

Submission
Please submit your code as a GitHub repository. The repository should contain a README.md file that explains how to start and deploy your application, as well as any other relevant information.

Evaluation
We will evaluate your submission based on the following criteria:

Code quality: Is the code well-structured, easy to read, and maintainable?
Functionality: Does the application meet the requirements specified above?
Aesthetics: Is the UI/UX appealing to users?
Testing: Does the backend have appropriate tests in place?
Documentation: Is the code well-documented and easy to understand?
Questions
If you have any questions about the take-home test, please do not hesitate to contact us. We look forward to seeing your submission!