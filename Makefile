install:
	npm ci
lint:
	npx eslint .
build-dev:
	npx webpack --config webpack.dev.js
build-prod:
	npx webpack --config webpack.prod.js