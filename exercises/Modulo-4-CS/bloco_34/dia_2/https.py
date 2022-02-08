import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
from dotenv import load_dotenv

load_dotenv()

SSL_PASSWORD = os.getenv('SSL_PASSWORD')

get_ssl_context = ssl.SSLContext()
get_ssl_context.load_cert_chain(
  "cert.pem", keyfile="key.pem", password=SSL_PASSWORD
)

server_address = ('localhost', 8000)
server = HTTPServer(server_address, SimpleHTTPRequestHandler)
server.socket = get_ssl_context.wrap_socket(server.socket, server_side=True)

server.serve_forever()
