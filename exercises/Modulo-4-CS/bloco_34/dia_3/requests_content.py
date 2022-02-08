import requests

# Requisição do tipo GET
request = requests.get("https://www.betrybe.com")

# código de status
print(request.status_code)  # 200

# conteúdo no formato html
print(request.headers["Content-Type"])  # text/html

# Conteúdo recebido da requisição
print(request.text)

# Bytes recebidos como resposta
print(request.content)

# Requisição do tipo post
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/get")
print(response.json())

# Podemos também pedir que a resposta lance
# uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
