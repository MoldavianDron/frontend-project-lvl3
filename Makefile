install:
	npm ci
lint:
	npx eslint .
build:
	npx webpack --config webpack.config.js