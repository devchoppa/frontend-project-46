install-deps: 
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js
	
test:
	npm test

lint: 
	npx eslint .
	
fix-all: 
	npx eslint --fix .