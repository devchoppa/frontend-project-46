install: 
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint: 
	npx eslint .
	
fix-all: 
	npx eslint --fix .