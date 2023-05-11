# Noah Morris | Personal Website

This project is my personal website, which is built using the python Django Framework. The project features some JavaScript & React.js on the frontend.

## AI

### CodeGPT

CodeGPT is a django application which connects to OpenAi's text-davinci-003 LLModel to Debug code. The bot essentially takes two input's in the prompt template...

A)	Language: a drop down list of >10 programming languages.

B)	Code: A TextArea which user inputs the code which the want to debug.

The application is mainly python, most of the logic lives in "/applications/ai/views.py". That said the app utilises [Prism.js](https://prismjs.com/) to format the AI response into a IDE friendly format. The API key may be turned off however I will cache the last response in this case, for demonstrative effect. The frontend post's the prompt to the view.py which uses django forms to process the message into a prompt template which is sent to OpenAi api. The prompt template is "Respond only with {language} code. Debug and Improve this: {code}"

## Analytics

Analytics is the navigation page for a some simple dashboards. These tools use publicly available data for visualisation, the pages also feature some statistics and probability. These apps which are mainly built using JavaScript. However the data collection for and the API's used in these pages have been programmed using Python. For data Collection and Processing "scripts/CollectData.py".

### MacroEconomics

Currently this application features a chart which shows the United States [business cycle](https://en.wikipedia.org/wiki/Business_cycle) and uses some Machine Learning in sci-kit to perform linear regression on the BCI (Business Confidence Indicator), the BCI is a diffusion index which leads GDP growth. It's essentially a qualitative survey which questions supply chain mangers at many Large and Mega cap coparation in the USA. The forecast is 12 months, however the model is not been fine tuned and is definately a WIP. The rest of my development for this model, as in it's usecase, will not be open source as I am researching & developing a much fancier model, which will be used in production for one of my software products. However the Estimates on this page are ok, for the intended purpose, considering macro effects things on a lag forecasting the business cycle, with a tiny thin tolerance is not actually that useful, however risk managing the peaks and troughs and riding the trends is much more useful and actionable. The application also features probability distribution for the BCI & GDP. Their is also a distribution of BCI's 3 month rate of change.

**Use the DashBoard**: Track, Measure & Estimate the US growth cycle.

### Quantative Analytics

### Marine Traffic
