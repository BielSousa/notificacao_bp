function create_request(){
    const Http = new XMLHttpRequest();
    return Http
}

function send_request_GET(endpoint, success_function = undefined, fail_function = undefined, callback = undefined) {
  var Http = create_request();
  Http.onreadystatechange = function() {
    if (Http.readyState === 4) {
      if (Http.status === 200) {
        if (typeof success_function === 'function') {
          success_function(Http);
        }
      } else {
        if (typeof fail_function === 'function') {
          fail_function();
        }
      }
    }
  };
  const protocol = document.URL.split('/')[0];
  const base_url = document.URL.split('/')[2];
  const url = `${protocol}//${base_url}${endpoint}`;
  Http.open('GET', url, true);
  Http.send();

  if (typeof callback === 'function') {
    callback();
  }
}

function success_request(http) {
    response = JSON.parse(http.response)
    alert(response['msg'])
    console.log(response)
    if('card' in response){
        console.log('entrou')
        let div = document.getElementById("card").innerText = response['card']['name'] 
    }
} 

function error_request(http) {
  console.error('Erro na requisição:', http);
}