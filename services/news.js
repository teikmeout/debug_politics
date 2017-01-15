const API_URL = `https://api.cognitive.microsoft.com/bing/v5.0/news/search?`;
const API_KEY =  process.env.BING_API_KEY;

function getArticles() {
  
  let queryString = '';
  let url = `https://api.cognitive.microsoft.com/bing/v5.0/news/search?count=10&offset=0&mkt=en-us&safeSearch=Moderate`;

  for (let i = 0; i < reps.length; i++) {
    queryString += `q=${reps[i]}&`
  }

  return fetch(`${url}${queryString}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/JSON',
      'Ocp-Apim-Subscription-Key': API_KEY
    }
  })
  .then( (data) => {
    console.log(data)
  })
  .catch( (error) => {
    console.log(error)
  })
}
