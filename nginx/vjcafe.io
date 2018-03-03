server {
	listen 443 ssl;
	server_name thevjcafe.com;
	ssl_certificate /etc/letsencrypt/live/thevjcafe.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/thevjcafe.com/privkey.pem;
	location /api {
		proxy_pass http://127.0.0.1:87;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location / {
		proxy_pass http://127.0.0.1:87;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location /backend {
		root /home/info/vjcafe;
		index index.html index.htm;
	}
}
server {
	listen 87;
	server_name thevjcafe.com;
	return 301 https://thevjcafe.com$request_uri;
}